import React, { useState } from 'react';
 
const useCustomForm = ({ initialState }) => {

    const [values, setValues] = useState( initialState || {}); 
    const [errors, setErrors] = useState(null); 
    const [submitable, setSubmitable] = useState(false); 

    const handleChange = (e) => {
        const {target} = e; 
        const {name, value} = target; 
        setValues({...values, [name]:value});
        console.log(values);
    };

    const validateForm = () => {
        console.log(values.password);
        if(!values.password || values.password === '' || values.password.length < 3){
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

export default useCustomForm; 