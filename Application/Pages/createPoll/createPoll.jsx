import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import { useHistory } from 'react-router-dom';
//import useCustomForm from '../../hooks/useCustomForm'



const CreatePoll = () => {

    const history = useHistory(); 
    const [error, setError] = useState(''); 
    const [submitable, setSubmitable] = useState(false);
    const [values, setValues] = useState({question: '', alt1: '' })

  
    
    const createNewPoll = (e) => {
        e.preventDefault(); 
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
        setValues((...prev) => ({
            ...prev,
            ...inputValue
        }));
    }


    const submitForm = () => {
       
        const postData = async () => {
            try{
                console.log('trying')
                const response = await axios.post('http://localhost:5001/api/v1/polls', {
                    values,
                });

                if(response === 200){
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
         
        </div>
        <form  onSubmit={createNewPoll} >
            <label htmlFor="question" name="title" >spørsmål: </label>
            <input type="text" id="question" required value={values.question} onChange={handleChange} name="question"  /> 
          
            <label htmlFor="alt1"> Alternativ1 </label>
            <input type="text" id="alt1" required  value={values.alt1} onChange={handleChange} name="alt1" />
           
            <input type='submit' value="Send inn"/>   
            
        </form>

        </>
        
    )

};

export default CreatePoll;