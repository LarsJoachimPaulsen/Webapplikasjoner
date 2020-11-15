import React from 'react'; 
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

const ButtonStyle = styled.button`
    width: 50%;
    border: solid 1px darkgrey;
    background-color: #ebe8f7;
    font-size: 0.9em;
    margin: 15px 0 0 0;
    padding: 3px;
`; 

const PollCard = ({item, answerPoll}) => (

    <>
        <HeaderStyle>
            <HStyle name="pollname">{item[1].pollname}</HStyle>
            </HeaderStyle>
            <PStyle name="question">{item[1].question}</PStyle>
            <textarea defaultValue={item[1].answer} />

        <ButtonStyle onClick={() => answerPoll(item[0])}> Answer </ButtonStyle>
    </>
)

export default PollCard; 