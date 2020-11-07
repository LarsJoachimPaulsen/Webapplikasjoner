import express from 'express'; 
import { getUsers, getUser, updateUsers, createUser } from '../Controllers/users/index.js';
import { isInteger, checkUserInput } from '../middelware/index.js'

const router = express.Router(); 


router.get('/', getUsers); 
router.get('/:id', isInteger, getUser);
router.put('/:id', isInteger, updateUsers);
router.post('/', checkUserInput, createUser); 


export default router; 