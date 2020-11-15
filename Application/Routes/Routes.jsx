import React from 'react';

import{
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom';

import MainPage from "../Pages/MainPage/MainPage";
import MainLayout from "../CommonComponents/Layout";
import Polls from "../Pages/poll/Polls";
import Login from "../Pages/login/login"
import CreateUser from '../Pages/createUser/CreateUser';
import CreatePoll from "../Pages/createPoll/createPoll"

const Routes = () => (

    <Router>    
        <MainLayout>
            <Switch>
                <Route exact path="/">
                    <Polls />
                </Route>
            </Switch>
        
            <Switch>
                <Route exact path="/createUser">
                    <CreateUser />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/login"> 
                    <Login /> 
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/polls">
                    <Polls />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/createPoll">
                    <CreatePoll />
                </Route>
            </Switch>

            
        </MainLayout>    
        
    </Router>
    
)

export default Routes; 



