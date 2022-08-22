import express from 'express';
import { createQuestion, getAnswer, updateQuestion } from '../controller/assignment.js';
const router = express.Router();

router.post('/builder', createQuestion);
router.get('/answer', getAnswer);
router.patch('/:id', updateQuestion);


export default router;