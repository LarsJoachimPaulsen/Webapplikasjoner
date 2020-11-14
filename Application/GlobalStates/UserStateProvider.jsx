import React, {createContext, useState} from 'react'; 

export const UserContext = createContext({
    state: 'no user',
    updateState: () => {}

}); 

const GlobalStateProvider = ( {children} ) => {

   
    const [state, setUser] = useState({userId: '', user: ''}); 

    const updateState = (userId, username) =>{
        setUser({userId: userId, user: username}); 
    };

    return (
        <UserContext.Provider value={{ state, setUser, updateState}}>
            { children }
        </UserContext.Provider>
    );    
    
}

export default GlobalStateProvider; 