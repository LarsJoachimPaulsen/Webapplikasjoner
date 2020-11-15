import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react'; 
import {useHistory} from 'react-router-dom'; 
import UseCustomform from '../../../hooks/useCustomForm';
import GlobalStateProvider, { UserContext } from '../../../GlobalStates/UserStateProvider';
import styled from 'styled-components';

const initialState = {username: '', password: ''};

const StyledDivForm = styled.div`

`;

const StyledForm = styled.form`
    display:block; 
    background-color: #ffe2c9; 
    box-shadow: 10px 10px 5px 0px rgba(184,178,219,1);
    padding: 1.5%;
    width: 20%; 
`;

const StyledLabel = styled.label`
    display: inline-block; 
    float: left; 
    margin-bottom: 1%;
    font-size: 1.2em;
`;

const StyledInput = styled.input`
    display: block; 
    width: 90%; 
    float: left;
    margin-bottom: 3%;
    font-size: 0.8em;
`;

const StyledInputSubmit = styled.input`
    width: auto;
    border: solid 1px darkgrey;
    background-color: #ebe8f7;
    font-size: 0.8em;
    margin: 15px 0 0 0;
    padding: 3px;
`;


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

                     setUser({userId: '1', username: values.username});
                     
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
           
            <StyledDivForm className="Form-box">
                <StyledForm onSubmit={handleSubmit} > 
                    <StyledLabel htmlFor ="username"> Epost </StyledLabel>
                        <StyledInput type="email" value={values.username} id="username" placeholder="brukernavn" onChange={handleChange} name="username" />
                    <StyledLabel htmlFor="password"> Passord </StyledLabel>
                        <StyledInput type="password" id="password" value={values.password} placeholder="passord" onChange={handleChange} name="password" />
                    <StyledLabel htmlFor="confirmPassword">Bekreft passord</StyledLabel>
                        <StyledInput type="password" id="confirmPassword" placeholder="bekreftPassord" name="confirmPassword"/>           
                    <StyledInputSubmit type="submit" value="Registrer" />   
                </StyledForm>            
            </StyledDivForm>

    );
}



export default CreateUserBox;