import users from '../../model/users.js'; 
import { 
    list, 
    get,
    update, 
    create,
    remove 
    } from '../../services/user/index.js';

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

export const updateUsers = (req, res, next) => {
    const { id } = req.params; 
    const {...users} = req.body; 

    const {error, data, status} = update({id, ...users}); 

    res.status(status).json({
        status, 
        error, 
        data, 
        param: id
    });
};

export const createUser = (req, res, next) => {

    const {id, ...user} = req.body; 

    const{error, status, data} = create({id, ...user}); 
    res.status(status).json({
        status, 
        data, 
        error, 
        param: id
    });
};

export const removeUser = (req, res, next) => {
    
    const {id } = req.params; 
    
    const { status, data, error} = remove(id);
    
    res.status(status).json({
        status, 
        error, 
        data, 
        param: req.params.id
    });

};
