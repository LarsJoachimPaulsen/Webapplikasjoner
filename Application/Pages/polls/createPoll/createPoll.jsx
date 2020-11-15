import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import { useHistory } from 'react-router-dom';
//import useCustomForm from '../../hooks/useCustomForm'



const CreatePoll = () => {

    const history = useHistory(); 
    const [error, setError] = useState(''); 
    const [submitable, setSubmitable] = useState(false);
    const [values, setValues] = useState({pollname: '', question: '', alt1: '', alt2: '', alt3: '', alt4: '' })

    
  
    
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
        
            <form  onSubmit={createNewPoll} >

                <label htmlFor="pollname">Navn på poll</label>
                <input id="pollname" type="text" required value={values.pollname} onChange={handleChange} name="pollname" />

                <label htmlFor="question" name="title" >spørsmål: </label>
                <input type="text" id="question" required value={values.question} onChange={handleChange} name="question"  /> 
            
                <label htmlFor="alt1"> Alternativ1 </label>
                <input type="text" id="alt1" required  value={values.alt1} onChange={handleChange} name="alt1" />

                <label htmlFor="alt2">Navn på poll</label>
                <input id="alt2" type="text" required value={values.alt2} onChange={handleChange} name="alt2" />

                <label htmlFor="alt3">Navn på poll</label>
                <input id="alt3" type="text" required value={values.alt3} onChange={handleChange} name="alt3" />

                <label htmlFor="alt4">Navn på poll</label>
                <input id="alt4" type="text" required value={values.alt4} onChange={handleChange} name="alt4" />
            
                <input type='submit' value="Send inn"/>   
                
            </form>
        </div>
        </>
        
    )

};

export default CreatePoll;