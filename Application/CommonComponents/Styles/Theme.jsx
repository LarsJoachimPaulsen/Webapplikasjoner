import React from "react"; 
import { ThemeProvider } from 'styled-components'; 
import { GlobalStyles } from './GlobalStyle'

const theme = {

    background: '#ffffff',
    
    colors: {
        default: '#333',
        warning: '#ff6347', 
        info: '#5cb85c'
    }, 

    breakpoints: {
        sm: '(max-width: 420px)', 
        md: '(max-width: 768px)', 
        lg: '(max-width: 1300px)',
    },

};

const Theme = ({ children }) => (
    <>  
        <GlobalStyles/>
        <ThemeProvider theme={theme}>{ children }</ThemeProvider>
    </>
); 

export default Theme; 