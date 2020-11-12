import React from 'react';

import{
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect
} from 'react-router-dom';

import MainPage from "../Pages/MainPage/MainPage";
import MainLayout from "../CommonComponents/Layout";
import Poll from "../Pages/poll/Poll";
import Login from "../Pages/login/Login";
import CreatePoll from "../Pages/createPoll/createPoll"
import Delete from '../Pages/APICommunication/delete/Delete';
import Get from '../Pages/APICommunication/get/Get';
import Put from '../Pages/APICommunication/put/put';
import Post from '../Pages/APICommunication/post/create';

const Routes = () => (

    <Router>    
        <MainLayout>
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
                    <Get />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Delete">
                    <Delete />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Put">
                    <Put />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Post">
                    <Post />
                </Route>
            </Switch>

            <Switch>
                <Route path="/Put/:id">
                    <Put />
                </Route>
            </Switch>

            <Switch>
                <Route path="/Get/:id">
                    <Get />
                </Route>
            </Switch>
            <Switch>
                <Route path="/Delete/:id">
                    <Delete />
                </Route>
            </Switch>

            
        </MainLayout>    
        
    </Router>
    
)

export default Routes; 



