import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    padding: 0.5em;
    text-align: center;
`;

const NavHeader = styled.h1`
    margin: 0;
    font-size: 2.5em;
`;

const NavMenu = styled.ul`
    display: flex; 
    justify-content: space-between;
    margin-right: 20px;  
    padding: 0;
    list-style: none; 
    font-size: 1.25em;
`;

const Navbar = () =>(

    <StyledNav>    
            <NavHeader> Oblig 6</NavHeader>  
            <NavMenu>
                <NavLink to="/createUser" activeClassName="active">Lag bruker</NavLink>
                <NavLink to="/poll" activeClassName="active"> Svar på poll</NavLink>
                <NavLink to="/createPoll" activeClassName="active"> Lag ny poll</NavLink>
            </NavMenu>
     </StyledNav>

)

export default Navbar;

