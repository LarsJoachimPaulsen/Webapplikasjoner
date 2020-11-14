import userData from '../../data/users.js'; 
import * as helpers from '../../utils/helpers.js'; 

export const list = () => {

    if(!userData > 0){
        return{
            status: 200, 
            message: 'No users in the database'
        }
    }
    return{
        status: 200, 
        data: Object.fromEntries(userData)
    }
};

export const get = (id) => {
    const singelUser = helpers.findId(userData, id); 
    if(singelUser.error){
        return( singelUser); 
    }

    return{
        status: 200, 
        data: singelUser
    }
};


export const update = (user) => {

    const {id, ...data} = user; 

    console.log(id)

    const updateUser = helpers.findId(userData, id); 

    if(user.error){
        return updateUser
    }

    userData.set(id, data); 
    return {
        status: 200, 
        data: true
    }


}

export const create = (user) => {

    const {...newUserData} = user; 

    if(!newUserData){
        return{
            status: 200, 
            message: 'No userdata'
        }
    }; 

    const newId = helpers.createId(userData); 

    console.log(newId); 

    userData.set(newId, newUserData);
    
    return{
        status: 200, 
        data: Object.fromEntries(userData) 
    };
}; 

export const remove = (id) => {

    const userToRemove = helpers.findId(userData, id); 

    if(!userToRemove){
        return userToRemove; 
    }
    userData.delete(id);
    return{
        status: 200, 
        data: true
    } 

}; 