import mongoose from "mongoose";

const assessmentSchema = mongoose.Schema({
        question: {type: String, required: true},
        answer: {type: String, required: true},
        checkboxAnswer: [{type: String}],
        paragraph: {type: String, default: ""},
        checkbox: [{type: String}],
        
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

export default Assessment;