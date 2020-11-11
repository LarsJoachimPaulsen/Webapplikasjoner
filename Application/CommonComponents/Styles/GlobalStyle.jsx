import { createGlobalStyle } from 'styled-components'; 
import normalize from 'styled-components';

 const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    html{
        font-size: 20px
    }

    
`;

export {GlobalStyles}; 