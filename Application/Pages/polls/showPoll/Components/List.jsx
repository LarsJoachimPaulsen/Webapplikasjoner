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

    const [answeredPoll, setAnsweredPoll] = useState();
    
    const { user } = useContext(UserContext); 

    let paramId = user.userId;
    let username = user.username; 
    

    useEffect(()=>{
        paramId = user.userId;
        username = user.username;
    }, [user])

    const answerPoll = (answer,item) => {
        const mellomlagret = [
            item[0],{
            "pollname":item[1].pollname,
            "pollquestion":item[1].question,
            "answer":answer
            }
        ]
        
        setAnsweredPoll(mellomlagret)

        console.log(JSON.stringify(answeredPoll))
       // addPollToUser()
        
    }

    const addPollToUser = () => { 

        console.log("kommer hit")
        const addNewInformation = async () => {

            console.log("kommer hit")

            try{
                const response = await axios.put(`http://localhost:5001/api/v1/users/${paramId}`, 
                    username,
                    answeredPolls [
                        answeredPoll.pollId, 
                        {...answeredPoll}
                    ], 
        
                )
                    //console.log(response.status);
                if(response.status >= 200 && response.status < 400){
                    console.log(virker)
                }
            }
            catch(error){
                console.log(error.mesage); 
            }
        }

        addNewInformation(); 

    }   



    return(
    <>
        {polls.map((item) => (
            <ListStyle key={item[0]}>
                <PollCard 
                item={item} 
                answerPoll={answerPoll}


                />
            </ListStyle>
        ))}
    </>
    )
}

export default List;