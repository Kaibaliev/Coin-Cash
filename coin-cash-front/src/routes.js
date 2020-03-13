import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import {UserPage} from "./pages/UserPage";
import {IncomePage} from "./pages/IncomePage";
import {ExpensePage} from "./pages/ExpensePage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/user" exact>
                   <UserPage/>
                </Route>
                <Route path="/expense">
                    <ExpensePage/>
                </Route>
                <Route path="/income">
                    <IncomePage/>
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