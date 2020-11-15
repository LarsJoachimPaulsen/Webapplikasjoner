import { createGlobalStyle } from 'styled-components'; 
import normalize from 'styled-components';

 const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        font-size: 20px
    }
    body{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    body main div div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    form {
    display:block; 
    background-color: #ffe2c9; 
    box-shadow: 10px 10px 5px 0px rgba(184,178,219,1);
    padding: 1.5%;
    width: 20%; 
    }
    button {
        width: 50%;
        border: solid 1px darkgrey;
        background-color: #ebe8f7;
        font-size: 0.9em;
        margin: 15px 0 0 0;
        padding: 3px;
    }
    label {
        display: inline-block; 
        float: left; 
        margin-bottom: 1%;
        font-size: 1.2em;
    }
    input {
        display: block; 
        width: 90%; 
        float: left;
        margin-bottom: 3%;
        font-size: 0.8em;
    }
    .inputSubmit {
        width: auto;
        border: solid 1px darkgrey;
        background-color: #ebe8f7;
        font-size: 0.8em;
        margin: 15px 0 0 0;
        padding: 3px;
    }
`;

export {GlobalStyles}; 