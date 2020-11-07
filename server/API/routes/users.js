import express from 'express'; 
import { getUsers, getUser } from '../Controllers/users/index.js';

const router = express.Router(); 


router.get('/', getUsers); 
router.get('/:id', getUser);


export default router; 