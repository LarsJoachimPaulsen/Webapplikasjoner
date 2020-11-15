import React from 'react'; 
import styled from 'styled-components'; 
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




const List = ({ data  }) => {
    
    const answerPoll = (id) => {

        console.log(id);
    }

    return(
    <>
        {data.map((item) => (
            <ListStyle key={item[0]}>
                <PollCard item={item} answerPoll={answerPoll} />
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