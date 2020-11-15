import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react'; 
import {Link} from 'react-router-dom';
import List from './Components/List';

import { UserContext } from '../../../GlobalStates/UserStateProvider';




const Polls = () => {

    const [loading, setLoading] = useState(false);
    const [polls, setPolls] = useState([]);
    const [error, setError] = useState('');


    const { user }= useContext(UserContext); 

    const createMap = ({data} ) =>(
        Object.entries(data)
    );

    const answerBtn = (e) =>{
        e.preventDefault(); 
        alert(e.target.pollname); 
    }
 

    useEffect(()  =>{
        const fetchData = async () =>{
            setLoading(true); 

            try{
                const response = await axios.get('http://localhost:5001/api/v1/polls/',{
                    transformResponse: createMap,
                    responseType: 'json'
                })
                console.log(response);
                if(response.status === 200) {
                    console.log("kommer hit");
                    
                    setPolls(response.data); 
                    setError(''); 
                    
                }; 
            }
            catch(error){
                setPolls([]);
                setError(error.message);
                
            }finally{
                setLoading(false);
                console.log(polls.length);
               
            }

        };
        fetchData();
    }, []);


    return(
        <>  
            {user.username === '' ? null : <h1> hei {user.username}  </h1>} 
            <div>
                {loading && 'Loading ...'}
                {polls && polls.length > 0 && <List data={polls} answerbtn={answerBtn} />}
            </div>
           
        </>
    );
};

export default Polls; 