import React, {useState, useEffect} from 'react';
import List from './PollList';

const PollHandler = ( { polls }) => {


    return(
        <List polls={polls}></List>
    )

}

export default PollHandler; 