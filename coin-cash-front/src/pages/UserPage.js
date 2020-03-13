import React, {Component} from 'react'
import AppHeader from "../components/header";
import {AppDrawer} from "../components/drawer";
import SimpleBottomNavigation from "../components/bottom-menu";

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
            <div className="App">
                <AppHeader
                    onLeftIconClick={() => this.setState({isDrawerLeftOpen: true})}
                    onRightIconClick={() => this.setState({isDrawerRightOpen: true})}
                />
                <AppDrawer
                    left={this.state.isDrawerLeftOpen}
                    right={this.state.isDrawerRightOpen}
                    toggleDrawer={() => this.setState({isDrawerLeftOpen: false, isDrawerRightOpen: false})}
                />


                <SimpleBottomNavigation/>

            </div>
        )
    }
}