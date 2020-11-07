import users from '../../data/users.js'; 
import * as helpers from '../../utils/helpers.js'; 

export const list = () => {

    if(!users > 0){
        return{
            status: 200, 
            message: 'No users in the database'
        }
    }
    return{
        status: 200, 
        data: Object.fromEntries(users)
    }
};

export const get = (id) => {
    const singelUser = helpers.findId(users, id); 

    if(singelUser.error){
        return( singelUser); 
    }

    return{
        status: 200, 
        data: singelUser
    }
};