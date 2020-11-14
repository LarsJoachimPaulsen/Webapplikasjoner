import pollData from '../../data/polls.js';
import {
    list, 
    getSingelPoll, 
    updatePoll, 
    newPoll,
    removePoll

} from '../../models/poll/index.js'; 

export const getPolls = (req, res, next) =>{

    const {status, data} = list(); 

    res.status(status).json({
        status, 
        data
    })
}

export const getPoll = (req, res, next) =>{
    const { id } = req.params; 
    
    const{status, error, data} = getSingelPoll(id); 

    res.status(status).json({
        status, 
        error, 
        data, 
        param: id
    })
}

export const putPoll = (req, res, next) => {
    const {id } = req.params;
    const {...polls} = req.body; 

    const{status, error, data } = updatePoll({id, ...polls}); 

    res.status(status).json({
        status, 
        error, 
        data, 
        params: id
    });
};

export const postPoll = (req, res, next) => {

    const{id, ...polls} = req.body; 

    const {status, error, data} = newPoll({id, ...polls});

    res.status(status).json({
        status, 
        error, 
        data
    });

}

export const deletePoll = (req, res, next) => {

    const { id } = req.params; 

    
    const {status, error, data} = removePoll(id); 

    res.status(status).json({
        status, 
        error, 
        data, 
        param: req.param.id
    });
};