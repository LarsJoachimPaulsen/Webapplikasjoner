import React from 'react'; 

const List = ({ data, answerbtn }) => (

    <>
        {data.map((item) => (
            <li key={item[0]}>
                <header>
                    <h2>{item[1].pollname}</h2>
                    <p>{item[1].question}</p>
                    <ul>
                        <li> item[1].answers</li>
                    </ul>
                </header>
            </li>

            
        ))}

        <button onClick={answerbtn}> Answer </button>
    </>
)

export default List;