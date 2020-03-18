import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

const  SimpleBottomNavigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Add income"  icon={<AddCircleOutlineIcon />} />
            <BottomNavigationAction label="Your balance" icon={<span><strong>3000</strong></span>}/>
            <BottomNavigationAction label="Add expense" icon={<RemoveCircleOutlineIcon />} />
        </BottomNavigation>
    );
};
export default SimpleBottomNavigation;