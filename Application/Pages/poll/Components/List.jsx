import React from 'react'; 
import styled from 'styled-components'; 

const ListStyle = styled.div`
    width: 15%;
    margin: 0 1.2em 0 0;
    padding: 1.5%;
    background-color: #ffe2c9;
    box-shadow: 10px 10px 5px 0px rgba(184,178,219,1);
    diplay: flex;
    flex-direction: column;
`; 

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

const UlStyle = styled.ul`
    margin: 0 0 0 20px;
    padding: 0;
`; 

const ButtonStyle = styled.button`
    width: 50%;
    border: solid 1px darkgrey;
    background-color: #ebe8f7;
    font-size: 0.9em;
    margin: 15px 0 0 0;
    padding: 3px;
`; 


const List = ({ data, answerbtn }) => (
    <>
        {data.map((item) => (
            <ListStyle key={item[0]}>
                <HeaderStyle>
                    <HStyle name="pollname">{item[1].pollname}</HStyle>
                </HeaderStyle>
                <PStyle name="question">{item[1].question}</PStyle>
                <UlStyle>
                    <li> {item[1].answers[0]}</li>
                    <li> {item[1].answers[1]}</li>
                    <li> {item[1].answers[2]}</li>
                    <li> {item[1].answers[3]}</li>
                </UlStyle>
                <ButtonStyle onClick={answerbtn}> Answer </ButtonStyle>
            </ListStyle>
        ))}
    </>
)

export default List;