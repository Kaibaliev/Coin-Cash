import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import {LeftSideList} from "./side-left-list";
import {RightSideList} from "./side-right-list";




export const AppDrawer = (props) => {

    return (
        <div>
            <Drawer open={props.left}
                    onClose={open => props.toggleDrawer(open)}>
                <LeftSideList />
            </Drawer>
            <Drawer anchor="right"
                    open={props.right}
                    onClose={open => props.toggleDrawer(open)}>
                <RightSideList />
            </Drawer>
        </div>
    );
};