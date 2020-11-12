import axios from 'axios';
import React, { useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import List from './Components/List';



const Poll = () => {

    const [loading, setLoading] = useState(false);
    const [polls, setPolls] = useState([]);
    const [error, setError] = useState('');

    const createMap = ( {data} ) =>{
        Object.entries(data);
    }

    useEffect(()  =>{
        const fetchData = async () =>{
            setLoading(true); 

            try{
                const response = await axios.get(`http://localhost:5001/api/v1/users`, {
                    transformResponse: createMap, 
                    responseType: 'json',
                });
                if(response.status === 200) {
                    setPolls(response.data); 
                    setError(''); 
                }
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
        <div>
            {loading && 'Loading ...'}
            {error && <p>{error}</p>}
            {polls && polls.length > 0 && <List data={polls} />}
        </div>
    );
};

export default Poll; 