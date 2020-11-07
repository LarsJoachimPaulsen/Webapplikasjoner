import express from 'express'; 
import { 
    getUsers, 
    getUser, 
    updateUsers, 
    createUser, 
    removeUser } 
    from '../Controllers/users/index.js';

import { 
    isInteger, 
    checkUserInput } 
    from '../middelware/index.js'

const router = express.Router(); 


router.get('/', getUsers); 
router.get('/:id', isInteger, getUser);
router.put('/:id', isInteger, checkUserInput , updateUsers);
router.post('/', checkUserInput, createUser);
router.delete('/:id', isInteger, removeUser); 
// router.patch('/:id', isInteger, updateUsers); 


export default router; 