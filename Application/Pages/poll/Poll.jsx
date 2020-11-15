import axios from 'axios';
import { transform } from 'babel-core';
import React, {useState, useEffect} from 'react';
import Error from '../../CommonComponents/Error';

const Poll = ({id}) => {

    const paramId = {id}
    const [loading, setLoading] = (false);
    const [poll, setPoll] = ([]); 
    const [error, setError] = (''); 

    const createMap = ({data}) => (
        Object.entries(data) 
    ); 
    
    useEffect(() => {

     const fetchData = async () =>{
         setLoading(true)
        try{
        const response = await axios.get(`http://localhost:5001/api/v1/${paramId}`, {
            transformRespons: createMap, 
            responseType: 'json' 


        });

        if(response === 200){
            setPoll(response.data); 
            setError('');

        }
        }catch(error){
            setError(error.message); 
            setPoll([]); 
        }finally{
            setLoading(false)
        }
     }
    
     fetchData(); 
    
    }, []);

    return(
        <div>
            <h2>Post page</h2>
            <div>
                {loading ? (
                    'Loading...'
                ): (
                    <div>
                        <h2>{poll.pollname}</h2>
                        <p>{poll.question}</p>
                        <ul> 
                            <li></li>
                        </ul>
                    </div>
                )}
                {error ? <Error message={error} /> : null}
            </div>
        </div>
    )
}

export default Poll;