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
<<<<<<< HEAD

                console.log(response.data)
=======
                console.log(response.data.data)
>>>>>>> d76ae6ecd81d202659ccf088abc3688a78eeedbb
                //console.log(response.data.data.keys()); 

                if(response.status>=200 && response.status<400){
                    setError('');
                    
                    const map = setMap(response.data.data); 
                
    
                     
                    history.push('/polls');
        
                    //console.log(id);
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
                    <input type="email" value={values.username} id="username" placeholder="Brukernavn" onChange={handleChange} name="username" />
                <label htmlFor="password"> Passord </label>
                    <input type="password" id="password" value={values.password} placeholder="Passord" onChange={handleChange} name="password" />
                <label htmlFor="confirmPassword">Bekreft passord</label>
                    <input type="password" id="confirmPassword" placeholder="Bekreft passord" name="confirmPassword"/>           
                <input class="inputSubmit" type="submit" value="Registrer" />   
            </form>            
        </div>
    );
}

export default CreateUserBox;