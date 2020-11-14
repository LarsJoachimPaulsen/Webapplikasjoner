/*import React, {useState, useEffect} from 'react'; 
import { Switch } from 'react-router-dom';
import axios from 'axios'; 
import { transform } from 'babel-core';


const Login = () => {

    const [loginValues, setLoginValue] = useState({username: '', password: ''}); 
    const [users, setUsers] = useState([''])
    const [submitable, setSubmitable] = useState(false); 
    const [error, setError] = useState(['']); 

    const createMap = ({data}) => (
        Object.fromEntries(data) 
    );

    const updateUser = (e) => {
        
        const inputValue = {[e.target.name]: e.target.value}; 
        console.log(inputValue); 
        setLoginValue((prev) =>({
            ...prev, 
            ...inputValue
        }));
        
    }

    const verifyInformation = (e) => {
        e.preventDefault(); 

        if(!username){
            setError('Brukernavn må skrives inn'); 
            return; 
        }
        if(!password){
            setError('Password må skrives inn'); 
            return; 
        }
        setSubmitable(true); 
    }

    useEffect(() => {

        if(submitable){
            login();
        }

    }, [submitable]);


    const login = () => {

        const fetchUserDate = () => {

            try{

                const response = axios.get('http://localhost:5001/api/v1/users',{
                    transformResponse: createMap, 
                    responseType: 'json'
                })
                if(response === 200){
                    setUsers(response.data);

                    setError(['']); 
                }
            }
            catch(error){
                setError(error.message); 
                set
            }
        }
    }

    return(
        <>
        <form onSubmit={verifyInformation}>
            <label htmlFor="username"> Brukernavn </label>
            <input type="email" value={loginValues.username} name="username" required id="username" onChange={updateUser}/>
            <label htmlFor="password">Passord</label>
            <input type="password" value={loginValues.password} name="password" required id="password" onChange={updateUser} />
            
        </form>

        </>
    )
}

export default Login

*/