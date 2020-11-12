import React, { useState } from 'react';
 /*
const useCustomForm = ({ initialState }) => {

    const [values, setValues] = useState( initialState || {}); 
    const [errors, setErrors] = useState(null); 
    const [submitable, setSubmitable] = useState(false); 

    const handleChange = (e) => {
        const {target} = e; 
        const {name, value} = target; 
        setValues({...value, [name]:value});
    };

    const validateForm = () => {
        if(!values.title || values.title === '' || values.title.length < 3){
            setErrors('Fyll ut tittel'); 
        }
        else{
            setErrors(''); 
            setSubmitable(true); 
        }
    }

    return {
        values, 
        errors, 
        handleChange, 
        validateForm, 
        submitable, 
    }

}

export default useCustomForm; */