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

    
`;

export {GlobalStyles}; 