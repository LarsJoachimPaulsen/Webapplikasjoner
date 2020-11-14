import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react'; 
import {useHistory} from 'react-router-dom'; 
import UseCustomform from '../../../hooks/useCustomForm';
import GlobalStateProvider, { UserContext } from '../../../GlobalStates/UserStateProvider';

const initialState = {username: '', password: ''};

const CreateUserBox = () => {
    
   // const [submitable, setSubmitable] = useState(false); 
    const [error, setError] = useState(''); 
    const { setUser } = useContext(UserContext);


        const setMap = ({data}) => {

           return Object.fromEntries(data); 
        }
        const history = useHistory(); 

        const {
            values, 
            errors, 
            handleChange, 
            validateForm, 
            submitable,
        } = UseCustomform(
            initialState,
        );
    


        const handleSubmit = (e) => {

            e.preventDefault(); 
            validateForm(); 
            console.log(submitable);
        }
    
    const createNewUser = () => {
        console.log(values); 
        console.log({values});
        const sendData = async () => {
            try{
                const response = await axios.post('http://localhost:5001/api/v1/users/', 
                    values, 
                );

                console.log(response.data.data)
                //console.log(response.data.data.keys()); 

                if(response.status>=200 && response.status<400){
                    setError('');
                    //history.push('/polls');
        

                    //console.log(id);
                    setUser(values.username);
                }    
            }catch(error){
                setError(error.message);
                console.log(error)
            }
        }
        sendData(); 
    }

    useEffect(() =>{
            if(submitable){
                createNewUser();
            };
        }, [submitable]);

    return (
           
            <div className="Form-box">
                <form onSubmit={handleSubmit} > 
                <label htmlFor ="username"> Epost </label>
                <input type="email" value={values.username} id="username" placeholder="brukernavn" onChange={handleChange} name="username" />
                <label htmlFor="password"> Passord </label>
                <input type="password" id="password" value={values.password} placeholder="passord" onChange={handleChange} name="password" />
                <label htmlFor="confirmPassword">Bekreft passord</label>
                <input type="password" id="confirmPassword" placeholder="bekreftPassord" name="confirmPassword"/>           
                <input type="submit" value="Registrer" />   
                </form>            
            </div>

    );
}



export default CreateUserBox;