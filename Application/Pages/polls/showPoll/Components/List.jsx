import React, {useState, useContext, useEffect} from 'react'; 
import styled from 'styled-components'; 
import PollCard from './PollCard';
import {UserContext} from '../../../../GlobalStates/UserStateProvider';
import axios from 'axios';

const ListStyle = styled.div`
    width: 15%;
    margin: 0 1.2em 0 0;
    padding: 1.5%;
    background-color: #ffe2c9;
    box-shadow: 10px 10px 5px 0px rgba(184,178,219,1);
    diplay: flex;
    flex-direction: column;
`; 

const List = ({ polls, setPoll  }) => {

    const [answeredPoll, setAnsweredPoll] = useState({"pollname":"", "pollquestion":"", "answer":""});
    const [userdata, setUserData] = useState(); 
   
    
    const { user } = useContext(UserContext); 

    let paramId = user.userId;
    let username = user.username; 
    let password = user.password;

    let pollId = ""; 
    

    useEffect(()=>{
        paramId = user.userId;
        username = user.username;
        password = user.password;
    }, [user])

    const answerPoll = (id) => {

        console.log({...answeredPoll});

        pollId = id; 

       
        /*
        const mellomlagret = {
            "pollname": fromChild.item[1].pollname, 
            "question": fromChild.item[1].question,
            "answer": fromChild.item[1].answer
        }
        pollId = item[0]; 
        setAnsweredPoll(mellomlagret)
        setUserData({"username": username, "password":password});
       
*/
        //console.log(JSON.stringify(answeredPoll))
        addPollToUser()
        
        
    }

    const addPollToUser = () => { 

        console.log("kommer hit")

        console.log({...answeredPoll});
        const addNewInformation = async () => {

            console.log("kommer hit")

            try{
                
                const response = axios.put(`http://localhost:5001/api/v1/users/${paramId}`, 
                    {
                        ...userdata,
                        "completedPoll":[
                            pollId,
                            
                                ...answeredPoll
                            

                        ] 
                    }
                
        
                )
        
                    console.log(response.status);
                if(response.status >= 200 && response.status < 400){
                    console.log(virker)
                }
            }
            catch(error){
                console.error(error)
            }
        }

        addNewInformation(); 

    }   

 /*    const response = await axios({

                    method: 'put', 
                    params: paramId,
                    url: '/api/v1/users',
                    data: {
                        "username": user.username, 
                        "password": user.password, 

                        "completedPolls": [
                            pollId, {
                            "pollname": answeredPoll.pollname,
                            "pollquestion": answeredPoll.pollquestion, 
                            "answer": answeredPoll.answer
                            }
                        ]
                    }

                }) */

    return(
    <>  
        {polls.map((item) => (
            <ListStyle key={item[0]}>
                <PollCard 
                item={item} 
                answerPoll={answerPoll}
                answeredPoll={answeredPoll}
                setAnsweredPoll={setAnsweredPoll}


                />
            </ListStyle>
        ))}
    </>
    )
}

export default List;