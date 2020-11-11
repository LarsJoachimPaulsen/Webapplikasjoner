import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>(
    <nav> 
        <h1> Oblig 6</h1>   
        <div> 
            <p><NavLink to="/"> Startside</NavLink></p>
            <p><NavLink to="/login">Lag bruker</NavLink></p>
            <p><NavLink to="/poll"> Svar på poll</NavLink></p>
            <p><NavLink to="/createPoll"> Lag ny poll</NavLink></p>
        </div> 
     </nav>
)

export default Navbar;

