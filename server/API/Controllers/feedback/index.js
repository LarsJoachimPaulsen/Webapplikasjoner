import { list, get, create, update, remove } from '../../models/feedback/index.js';
import feedbacks from '../../data/feedback.js';
import feedback from '../../data/feedback.js';

export const getFeedbacks = (req, res, next) => {
    const {status, data} = list (); 
    res.status(status).json({
        status, 
        data
    });
};

export const getFeedback = (req, res, next) => {
    const { id } = req.params; 

    const{error, status, data} = get(id); 
    console.log(error,status,data)
    res.status(status).json({
        status, 
        data, 
        params: id
    });
}

export const createFeedback = (req, res, next) => {
    const { id, ...feedback} = req.body; 
    const {status, error, data } = create({id, ...feedback})
    res.status(status).json({
        status, 
        error, 
        data, 
    });
}

export const updateFeedback = (req, res, next) => {
    const { id } = req.params; 
    const {...feedback} = req.body; 

    const {status, error, data} = update({id, ...feedback})
    res.status(status).json({
        status, 
        data, 
        error, 
        params: id, 
    }); 
}

export const removeFeedback = (req, res, next) => {
    const { id } = req.params; 
    const {status, error, data} = remove(id); 
    res.status(status).json({
        status, 
        error, 
        data, 
        params: req.params.id, 
    });
}