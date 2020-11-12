import React from 'react'; 
import styled from 'styled-components'; 

const ListStyle = styled.li`

`; 



const List = ({ data, answerbtn }) => (

    <>
        {data.map((item) => (
            <li key={item[0]}>
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
            </li>

            
        ))}

    </>
)

export default List;