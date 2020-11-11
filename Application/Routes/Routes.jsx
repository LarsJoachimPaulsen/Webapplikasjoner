import React from 'react';

import{
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom';

import MainPage from "../Pages/MainPage/MainPage";
import Layout from "../CommonComponents/Layout";
import Poll from "../Pages/poll/Poll";
import Login from "../Pages/login/Login";
import CreatePoll from "../Pages/createPoll/createPoll"
import Delete from '../Pages/APICommunication/delete/Delete';
import Get from '../Pages/APICommunication/get/Get';
import Put from '../Pages/APICommunication/put/Put';
import Post from '../Pages/APICommunication/post/Post';

const Routes = () => (

    <Router>    
        <Layout>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
            </Switch>
        
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/poll">
                    <Poll />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/createPoll">
                    <CreatePoll />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Get">
                    <CreatePoll />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Delete">
                    <CreatePoll />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Put">
                    <CreatePoll />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Post">
                    <CreatePoll />
                </Route>
            </Switch>
        </Layout>    
        
    </Router>
    
)

export default Routes; 



