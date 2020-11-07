import users from '../../data/users.js'; 
import { list, get } from '../../models/user/index.js';

export const getUsers = (req, res, next) => {

    const{status, data} = list(); 
    res.status(status).json({
        status, 
        data,
    }); 
}; 

export const getUser = (req, res, next) => {
    const { id } = req.params; 
    const {status, error, data} = get(id); 
    res.status(status).json({
        status, 
        data, 
        param: id, 
    });
}; 

