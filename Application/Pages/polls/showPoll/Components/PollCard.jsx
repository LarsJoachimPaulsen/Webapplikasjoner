import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const HeaderStyle = styled.header`
    font-size: 1em;
    margin: 0;
    padding: 0;
`; 

const HStyle = styled.h2`
    margin: 0;
    padding: 0;
`;

const PStyle = styled.p`
    margin: 0;
    padding: 3px 0 10px 0;
`; 

const PollCard = ({item, answerPoll}) => {
    const [answer,setAnswer] =useState("")
    const title = item[1].pollname;
    const id = item[0]
    const question = item[1]

    const postToPoll = ()=>{
        answerPoll(answer,item)
    }

    return(
    <>
        <HeaderStyle>
            <HStyle name="pollname" value={item[1].pollname}>{item[1].pollname}</HStyle>
            </HeaderStyle>
            <PStyle name="question" value={item[1].question}>{item[1].question}</PStyle>
            <textarea onChange={e => setAnswer(e.target.value)} name="answer" defaultValue={item[1].answer} />

        <button onClick={() => postToPoll()}> Answer </button>
    </>
)
}
   
export default PollCard; 