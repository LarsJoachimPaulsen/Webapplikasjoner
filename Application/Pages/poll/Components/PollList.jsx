import React, {useState, useEffect, useContext} from 'react'; 
import styled from 'styled-components'; 
import AnswerPollBtn from '../../../CommonComponents/AnswerPollBtn';
import { UserContext } from '../../../GlobalStates/UserStateProvider';
import PollCard from './PollCard';


 const ListStyle = styled.div`
    width: 15%;
    margin: 0 1.2em 0 0;
    padding: 1.5%;
    background-color: #ffe2c9;
    box-shadow: 10px 10px 5px 0px rgba(184,178,219,1);
    diplay: flex;
    flex-direction: column;
`; 



const List = ({ data }) => {

    const { user } = useContext(UserContext); 

    let paramId = user.userId;
    let username = user.username; 
    
    useEffect(()=>{
        paramId = user.userId;
        username = user.username;
    }, [user])

    const [answeredPoll, setAnsweredPoll] = useState({pollname: '', pollquestion: '', answer: ''}); 


    const answerPoll = (id) => {

        console.log("her er id");
        console.log(id);
        console.log(data)
        //if(!data[id][1].answer){data[id][1].answer = ''}

        // henter id fra array, første id av pollene er 1, første indeks av array er 0
        // for å hente ut riktig poll id må vi derfor bruke id-1
        setAnsweredPoll({...data[id-1][1]});

        console.log(answeredPoll);
    }

    return(

         <>
            {data.map((item) => (
                <ListStyle key={item[0]}>
                   <PollCard 
                   item = {item}
                   answerPoll = {answerPoll}
                   > </PollCard>
                </ListStyle>
            ))}
        </>
    )
}
   

  /*  <UlStyle>
                    <li> {item[1].answers[0]}</li>
                    <li> {item[1].answers[1]}</li>
                    <li> {item[1].answers[2]}</li>
                    <li> {item[1].answers[3]}</li>
                </UlStyle> */
export default List;