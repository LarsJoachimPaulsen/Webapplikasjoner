import React, {useState, useEffect} from 'react'; 
import styled from 'styled-components'; 

const AnswerPollBtn = () => {

    const ButtonStyle = styled.button`
    width: 50%;
    border: solid 1px darkgrey;
    background-color: #ebe8f7;
    font-size: 0.9em;
    margin: 15px 0 0 0;
    padding: 3px;
`; 


    return(

        <ButtonStyle>
            <button
            >
                Answer poll
            </button>
        </ButtonStyle>
    )
}

export default AnswerPollBtn; 