import React from 'react';
import {Route, Switch} from 'react-router';
import {SignIn, Home, SignUp} from './templates';

const Router = () => {
    return(
        <Switch>
            <Route exact path = {"/signUp"} component={SignUp}/>
            <Route exact path = {"/signIn"} component={SignIn}/>
            <Route path = {"(/)?"} component={Home}/>
        </Switch>
    )
}
export default Router