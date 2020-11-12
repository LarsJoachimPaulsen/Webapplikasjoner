import React from 'react'; 

const List = ({ data, answerbtn }) => (

    <>
        {data.map((item) => (
            <li key={item[0]}>
                <header>
                    <h2 name="pollname">{item[1].pollname}</h2>
                    <p name="question">{item[1].question}</p>
                    <ul>
                        <li> {item[1].answers[0]}</li>
                        <li> {item[1].answers[1]}</li>
                        <li> {item[1].answers[2]}</li>
                        <li> {item[1].answers[3]}</li>
                    </ul>
                </header>

                <button onClick={answerbtn}> Answer </button>
            </li>

            
        ))}

    </>
)

export default List;