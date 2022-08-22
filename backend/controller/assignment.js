import Assessment from '../model/assignment.js';

export const createQuestion = async (req, res) => {
    const { question, answer, checkbox, paragraph, checkboxAnswer } = req.body;
    const data = {
        question: question,
        answer: answer,
        checkbox: checkbox,
        paragraph: paragraph,
        checkboxAnswer: checkboxAnswer
    }
    const newQuestion = new Assessment({ ...data });
    try {
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestion = async (req, res) => {
    const {id} = req.params;
    const { paragraph, checkboxAnswer } = req.body;

    const quesUpdate = await Assessment.findById(id);

    if(quesUpdate.answer === "paragraph" && paragraph) {
        quesUpdate.paragraph = paragraph;
    }

    if(quesUpdate.answer === "checkbox" && checkboxAnswer && checkboxAnswer.length) {
        quesUpdate.checkboxAnswer = checkboxAnswer;
    }
    
    try {
        const a1 = await quesUpdate.save()
        res.status(201).json(a1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getAnswer = async (req, res) => {
    try {
        const data = await Assessment.find()
        res.status(201).json(data);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }
}

