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

const PollCard = ({item, answerPoll}) => (

    <>
        <HeaderStyle>
            <HStyle name="pollname" value={item[1].pollname}>{item[1].pollname}</HStyle>
            </HeaderStyle>
            <PStyle name="question" value={item[1].question}>{item[1].question}</PStyle>
            <textarea name="answer" defaultValue={item[1].answer} />

        <button onClick={() => answerPoll(item[0])}> Answer </button>
    </>
)
   
export default PollCard; 