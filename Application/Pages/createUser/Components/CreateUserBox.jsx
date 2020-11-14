import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react'; 
import {useHistory} from 'react-router-dom'; 
import GlobalStateProvider, { UserContext } from '../../../GlobalStates/UserStateProvider';

const CreateUserBox = () => {
    const [values, setValues] = useState();
    const [submitable, setSubmitable] = useState(false); 
    const [error, setError] = useState(''); 

    const { setUser, state } = useContext(UserContext);

    
    const handleChange = (e) =>{

        const inputValue = e.target.value
        setValues((prev) => ({
            ...prev,
            ...inputValue
        })); 

    };


    const createUser = (e) =>{
        e.preventDefault(); 
        validateSubmit(); 
        console.log(values)
    };

    const validateSubmit = () => {
        console.log("validate");
        let goodToGo = false; 
        if(!password.value || password.value === '' || password.length < 3){
            setError('Passord feil')
        }else if(password.value !== confirmPassword.value){
            setError('passordene er ikke like')
        }
        else{
            goodToGo=true; 
        }
        if(goodToGo){
            setSubmitable(true); 
           
        }
    }

    useEffect(() =>{
        if(submitable){
            createNewUser();
        };
    }, [submitable]);

    const createNewUser = () => {

        const sendData = async () => {
            try{
                const response = await axios.post('http://localhost:5001/api/v1/users/', {
                    values 
                });
               console.log(response); 

                if(response === 200){
                    setError('');
                    history.push('/polls');
                }    
            }catch(error){
                setError(error.message);
                console.log(error)
            }
        }
        sendData(); 
    }

    return (
         <GlobalStateProvider>    
             {error ? <h3>{error.message}</h3> : null } 
            <div className="Form-box">
                <form onSubmit={createUser}> 
                <label htmlFor ="username"> Epost </label>
                <input type="email" value={values.username} id="username" placeholder="brukernavn" name="username" onChange={handleChange}/>
                <label htmlFor="password"> Passord </label>
                <input type="password" id="password" value={values.password} placeholder="passord" name="password" onChange={handleChange}/>
                <label htmlFor="confirmPassword">Bekreft passord</label>
                <input type="password" id="confirmPassword" placeholder="bekreftPassord" name="confirmPassword"/>           
                <input type="submit" value="Registrer" />   
                </form>            
            </div>
       </GlobalStateProvider>
    );
}



export default CreateUserBox;