export const findId = (map, id) => {
    const feedback = map.get(id); 
    if(!feedback){
        return {status:404, error: 'Id not found'}
    }
    return feedback; 
}

export const createId = (map) =>{
    (map.size > 0 ? map.size + 1: 1).toString(); 
}

