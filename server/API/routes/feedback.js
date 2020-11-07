import express from 'express'; 
import {isInteger, validateFields} from '../middelware/index.js'
import { 
    getFeedbacks, 
    getFeedback,
    createFeedback, 
    updateFeedback, 
    removeFeedback 
    } from '../Controllers/feedback/index.js'

const router = express.Router(); 

router.get('/', getFeedbacks); 
router.get('/:id', getFeedback);
router.post('/', validateFields, createFeedback); 
router.put('/:id', isInteger, updateFeedback); 
router.delete('/:id', isInteger, removeFeedback); 

export default router; 