import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 100%; 
    
`;

const NavMenu = styled.ul`
    display: flex; 
    justify-content: space-between;
    margin-right: 20px;  
    padding: 0; 
    list-style: none; 
`;

const NavMenuItem = styled.li`
    padding: 0; 
`;
const Navbar = () =>(

    <StyledNav>    
        <NavMenu>
            <NavMenuItem>
                <nav> 
                    <h1> Oblig 6</h1>   
                    <div> 
                       <NavLink to="/"> Startside</NavLink>
                       <NavLink to="/login">Lag bruker</NavLink>
                        <NavLink to="/poll"> Svar på poll</NavLink>
                        <NavLink to="/createPoll"> Lag ny poll</NavLink>
                    </div> 
                </nav>
            </NavMenuItem>
        </NavMenu>
     </StyledNav>

)

export default Navbar;

