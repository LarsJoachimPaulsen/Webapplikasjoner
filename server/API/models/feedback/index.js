import feedback from '../../data/feedback.js';
import feedbacks from '../../data/feedback.js';
import * as helpers from '../../utils/helpers.js'

export const list = () =>{
    if(feedbacks.size === 0){
        return {status: 200, data: 'No Feedbacks'}
    }

    return {status: 200, data: Object.fromEntries(feedbacks)}
};
export const get = (id) => {
    const feedbackItem = helpers.findId(feedbacks, id); 
    if(feedbackItem.error){
        return feedbackItem
    }

    return{
        status:200, 
        data: feedbackItem
    }
};

export const create = (feedback) => {
    const {...data} = feedback; 

    if(!data){
        return{
            status: 200, 
            data: 'No feedback'
        };
    }
    const newId = helpers.createId(feedbacks); 
    feedbacks.set(newId, data); 
    return{
        status: 200, 
        data: Object.fromEntries(feedbacks)
    }
};

export const update = (feedback) => {
    const {id, ...data} = feedback; 
    const feedbackItem = helpers.findId(feedbacks, id); 
    
    if(feedback.error){
        return feedbackItem;
    }
    feedbacks.set(id, data); 
    return{
        status: 200, 
        data: true, 
    }
};

export const remove = (id) => {
    const feedbackItem = helpers.findId(feedbacks, id); 
    if(feedbackItem.error){
        return feedbackItem
    }
    return{
        status: 200, 
        data: true
    }
}