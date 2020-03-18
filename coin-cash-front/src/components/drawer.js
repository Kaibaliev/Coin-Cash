import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import {LeftSideList} from "./side-left-list";




export const AppDrawer = (props) => {

    return (
        <div>
            <Drawer open={props.left}
                    onClose={open => props.toggleDrawer(open)}>
                <LeftSideList />
            </Drawer>
        </div>
    );
};