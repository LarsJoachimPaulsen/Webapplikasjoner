import express from 'express'; 
import {
    isInteger, 
    pollInputCheck
} from '../middelware/index.js'

import{
    getPolls, 
    getPoll,
    putPoll,
    postPoll,
    deletePoll
} from '../Controllers/polls/index.js'; 

const router = express.Router(); 

router.get('/', getPolls); 
router.get('/:id', isInteger, getPoll); 
router.put('/:id', isInteger, pollInputCheck, putPoll); 
router.post('/', pollInputCheck, postPoll); 
router.delete('/:id', isInteger, deletePoll); 

export default router; 