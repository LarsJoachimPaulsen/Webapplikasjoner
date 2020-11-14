
import React, {useContext} from 'react'; 
import GlobalStateProvider, { UserContext } from '../../GlobalStates/UserStateProvider';


const MainPage = () =>{
   
const { state } = useContext(UserContext); 

    return(
    <GlobalStateProvider>
       <div> 
        <h1>Startside</h1>
        {state === "no user" ?  null : <h2> Hei!{state} </h2>}
        <p><a href="/login">Lag bruker</a></p>
        <p><a href="/poll"> Svar på poll</a></p>
        <p><a href="/createPoll"> Lag ny poll</a></p>
      </div>  
    </GlobalStateProvider> 
    
    )
}

export default MainPage