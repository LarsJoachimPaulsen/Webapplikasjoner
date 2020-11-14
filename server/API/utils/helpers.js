export const findId = (map, id) => {
    const feedback = map.get(id); 
    if(!feedback){
        return {
            status:404, 
            error: 'Id not found'}
    }
    return feedback; 
}

export const findName = (map, userName) => {
    const feedback = map.get(userName); 
    if(!feedback){
        return{
            status:404,
            error: 'User not found'
        }
    }
}

export const createId = (map) =>{
    return (map.size > 0 ? map.size + 1: 1).toString(); 
}

