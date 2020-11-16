
export const setPollPayload = (pollname, question, answer, createdByUser) => {
    
    let pollInput = getPollSet(); 

    pollInput.pollname = pollname; 
    pollInput.question = question; 
    pollInput.answer = answer; 
    pollInput.createdByUserId = createdByUser;
}


const getPollSet = () =>{
    return {
        "id": 
        {
            "pollname": "", 
            "question": "", 
            "answer": "", 
            "createdByUserId": ""
        }
    }
    
}