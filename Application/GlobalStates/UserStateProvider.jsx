import React, {createContext, useEffect, useState} from 'react'; 

export const UserContext = createContext({
    state: null,
    updateState: () => {}

}); 

const GlobalStateProvider = ( {children} ) => {

   
    const [user, setUser] = useState(null); 

    useEffect(() => {
        console.log(user)
    }, [user]) 

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    );    
    
}

export default GlobalStateProvider; 