import React, {Component} from 'react';
import AppHeader from './components/header';
import {AppDrawer} from './components/drawer';

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isDrawerOpen: false
        }
}

    render() {
        return (
            <div className="App">
                <AppHeader
                    onLeftIconClick={() => this.setState({isDrawerOpen: true})}
                />
                <AppDrawer
                    open = {this.state.isDrawerOpen}
                    toggleDrawer={() => this.setState({isDrawerOpen: false})}
                />
            </div>
        )
    }

};
