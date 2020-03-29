import React, {Component} from 'react'
import {Switch, Route, Redirect, HashRouter} from 'react-router-dom'
import AppHeader from "../components/header";
import {AppDrawer} from "../components/drawer";
import SimpleBottomNavigation from "../components/bottom-menu";
import {BalancePage} from "./BalancePage";
import {IncomePage} from "./IncomePage";
import {ExpensePage} from "./ExpensePage";
import {HomePage} from "./HomePage";
import {AddIncomePage} from "./AddIncome";
import {AddExpensePage} from "./AddExpense";


export class UserPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isDrawerLeftOpen: false,
            isDrawerRightOpen: false
        }
    }

    render() {
        return (
            <HashRouter>
                <div className="container">
                    <AppHeader
                        onLeftIconClick={() => this.setState({isDrawerLeftOpen: true})}
                    />
                    <AppDrawer
                        left={this.state.isDrawerLeftOpen}
                        toggleDrawer={() => this.setState({isDrawerLeftOpen: false})}
                    />
                    <Switch>
                        <Route exact path="/home">
                            <HomePage/>
                        </Route>
                        <Route path="/balance">
                            <BalancePage/>
                        </Route>
                        <Route path="/income">
                            <IncomePage/>
                        </Route>
                        <Route path="/expense">
                            <ExpensePage/>
                        </Route>
                        <Route path="/add_income">
                            <AddIncomePage/>
                        </Route>
                        <Route path="/add_expense">
                            <AddExpensePage/>
                        </Route>
                        <Redirect to="/home"/>
                    </Switch>

                    <SimpleBottomNavigation/>

                </div>
            </HashRouter>
        )
    }
}