import React, { Children } from 'react'; 
import Navbar from './Nav';
import Container from './Container'

const Layout = ({children}) =>(
    <>
        <Navbar/>
        <Container>{children}</Container>
    </>
);

 export default Layout;