import axios from 'axios';
import React, {useState, useEffect} from 'react'; 
import CreateUser from '../CreateUser';

const CreateUserBox = () => {

    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [submtiable, setSubmitable] = useState(false); 
    const [error, setError] = useState(''); 


    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(!username || username === ''){
            setError('legg inn brukernavn')
            return; 
        }
        if(!password || password < 3){
            setError('noe galt med passord'); 
            return;
        }
        setSubmitable(true); 
    }

    const creatNewUser = () => {

        const sendToApi = () => {
            try{
                const response = axios.post("http://localhost:5001/api/v1/users", {
                    username, 
                    password
                });

                if(response === 200){
                    setError(''); 
                };
            }
            catch(error){
                setError(error.message);
            }
        };

        sendToApi(); 
    }

    useEffect(() =>{
        if(submtiable){
            creatNewUser(); 
        }
    }, [submtiable]);

 return (
           
    <div className="Form-box">
        <form onSubmit={handleSubmit} > 
            <label htmlFor ="username"> Epost </label>0
            <input type="email"  id="username" placeholder="brukernavn" onChange={(e) => setUsername(e.target.value)} name="username" />
            <label htmlFor="password"> Passord </label>
            <input type="password" id="password" placeholder="passord" onChange={(e) => setPassword(e.target.value)} name="password" />
            <label htmlFor="confirmPassword">Bekreft passord</label>
            <input type="password" id="confirmPassword" placeholder="bekreftPassord" name="confirmPassword"/>           
            <input type="submit" value="Registrer" />   
        </form>            
    </div>

    );

}

export default CreateUserBoxW; 