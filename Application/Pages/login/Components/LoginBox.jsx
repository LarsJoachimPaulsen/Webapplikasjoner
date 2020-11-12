import axios from 'axios';
import React, {useEffect, useState} from 'react'; 
import {useHistory} from 'react-router-dom'; 

const LoginBox = () => {
    const [values, setValues] = useState({email: '', password: '', confirmPassword: ''})
    const [submitable, setSubmitable] = useState(false); 
    const [error, setError] = useState(''); 



    const handleChange = (e) =>{

        const inputValue = {[e.target.name]: e.target.value}
        setValues((...prev) => ({
            ...prev, 
            ...inputValue
        })); 

    };


    const createUser = (e) =>{
        e.preventDefault();
        validateSubmit(); 
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
                const response = await axios.post('http://localhost:5001/api/v1/users', {
                    values, 
                })

                console.log(response); 

                if(response === 200){
                    setError('');
                    history.push('/polls');
                }    
            }catch(error){
                setError(error.message);
            }

        }
        sendData(); 
        console.log('virker');


    }

    return (
        <div className="Form-box">
            <form onSubmit={createUser}> 
            <label htmlFor ="email"> Epost </label>
            <input type="email" value={values.Email} id="email" placeholder="epost" name="email" onChange={handleChange}/>
            <label htmlFor="password"> Passord </label>
            <input type="password" id="password" value={values.password} placeholder="passord" name="password" onChange={handleChange}/>
            <label htmlFor="confirmPassword">Bekreft passord</label>
            <input type="password" value={values.confirmPassword} id="confirmPassword" placeholder="bekreftPassord" name="confirmPassword" onChange={handleChange} />
            <input type="submit" value="Registrer" />    
        
            </form>     

            
                  
        </div>
    );
}



export default LoginBox;