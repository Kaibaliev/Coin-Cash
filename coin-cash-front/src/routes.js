import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import {UserPage} from "./pages/UserPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/user" >
                   <UserPage/>
                </Route>
                <Redirect to="/user"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};