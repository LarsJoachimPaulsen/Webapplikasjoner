import axios from 'axios';
import React, {useEffect, useState, useContext} from 'react'; 
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
//import useCustomForm from '../../hooks/useCustomForm'
import {UserContext} from '../../../GlobalStates/UserStateProvider'

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

const CreatePoll = () => {
    const { user } = useContext(UserContext);
    const history = useHistory(); 
    const [error, setError] = useState(''); 
    const [submitable, setSubmitable] = useState(false);
    const [values, setValues] = useState({pollname: '', question: '', answer: '', createdByUserId: user.userId });

     
    
    
    
    const createNewPoll = (e) => {
        e.preventDefault(); 
        
        console.log(values);
        validateForm(); 
      //  console.log(values.title);
        console.log(submitable);
    }
    
    
    const validateForm = () => {
     
        
        if( !question.value || question.value === '' || question.value.length < 3){
            setError('Sett en tittel')
            setSubmitable(false);
        }
        else{
            setError('');
            setSubmitable(true); 
        }
    }

    const handleChange = (e) => {
        
        const inputValue = {[e.target.name]: e.target.value}
        console.log(inputValue);
        //console.log(alt1.value); 
       // const {question, value} = target; 
        setValues((prev) => ({
            ...prev,
            ...inputValue
        }));
    }


    const submitForm = () => {
       
        const postData = async () => {
            try{
                
                const response = await axios.post('http://localhost:5001/api/v1/polls', 
                    values,
                );
                console.log('trying')
                if(response.status >= 200 && response.status <400){
                    console.log('posted')
                    setError(''); 
                    history.push('/polls'); 

                }
            }
            catch(error){
                console.log(error.message);
              setError(error.message); 
            }
            
        }
        postData(); 
    }

    useEffect(() => {
        if(submitable){
            submitForm(); 
        }
    }, [submitable]); 
    
    return(
        <>
        <div>
            {error && <p>{error}</p>}
            <StyledForm  onSubmit={createNewPoll} >

                <StyledLabel htmlFor="pollname">Navn på poll</StyledLabel>
                <StyledInput id="pollname" type="text" required value={values.pollname} placeholder="Navn på poll" onChange={handleChange} name="pollname" />

                <StyledLabel htmlFor="question" name="title" > Spørsmål </StyledLabel>
                <StyledInput type="text" id="question" required value={values.question} placeholder="Spørsmål" onChange={handleChange} name="question"  /> 
        
                <StyledInputSubmit type='submit' value="Send inn"/>   
                
            </StyledForm>
        </div>
        </>
        
    )

};

export default CreatePoll;