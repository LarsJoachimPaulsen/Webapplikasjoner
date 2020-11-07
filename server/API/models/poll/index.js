'use strict'
import pollData from '../../data/polls.js'; 
import * as helpers from '../../utils/helpers.js'; 

export const list = () => {

    if(!pollData.size>0){
        return{
            status: 200, 
            message: 'no Polldata'
        };
    }
    return{
        status: 200, 
        data: Object.fromEntries(pollData)  
        
    };
};

export const getSingelPoll = (id) => {

    const singlePoll = helpers.findId(pollData, id); 

    if(singlePoll.error){
        return singlePoll
    };
    return{
        status: 200, 
        data: singlePoll
    };

};

export const updatePoll = (polls) => {

    const {id, ...poll} = polls; 

    const updatedPoll = helpers.findId(pollData, id); 
    if(updatedPoll.error){
        return updatedPoll
    };

    pollData.set(id, poll)
    return{
        status: 200, 
        data: updatedPoll
    };

};

export const newPoll = (polls) => {

    const {...newPollData} = polls; 

    if(!newPollData){
        return{
            status: 400, 
            data: 'no data'
        }
    }
    const newId = helpers.createId(pollData); 

    pollData.set(newId, newPollData); 
    
    return{
        status: 200, 
        data: true
    };

}

export const removePoll = (id) => {

    const pollToRemove = helpers.findId(pollData, id); 

    if(pollToRemove.error){
        return pollToRemove; 
    }

    pollData.delete(id);    

    return{
        status: 200, 
        data: true
    }

}