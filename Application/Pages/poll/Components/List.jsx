import React from 'react'; 
import styled from 'styled-components'; 

const ListStyle = styled.div`
    width: 15%;
    margin-left: auto;
    margin-right: auto;
    border: solid black 1px;
    padding: 1.5%;

`; 



const List = ({ data, answerbtn }) => (

    <>
        {data.map((item) => (
            <ListStyle key={item[0]}>
                <header>
                    <h2 name="pollname">{item[1].pollname}</h2>
                </header>
                <p name="question">{item[1].question}</p>
                <ul>
                    <li> {item[1].answers[0]}</li>
                    <li> {item[1].answers[1]}</li>
                    <li> {item[1].answers[2]}</li>
                    <li> {item[1].answers[3]}</li>
                </ul>
                

                <button onClick={answerbtn}> Answer </button>
            </ListStyle>

            
        ))}
    </>
)

export default List;