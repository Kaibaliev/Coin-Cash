import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,

    },


});

const SimpleBottomNavigation = () => {
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
            <BottomNavigationAction label="Add income"
                                    icon={
                                        <Link to='/add_income'>
                                            <AddCircleOutlineIcon/>
                                        </Link>}/>
            <BottomNavigationAction label="Your balance"
                                    icon={
                                        <Link to='/balance'>
                                            <span>
                                                <strong >3000</strong>
                                            </span>
                                        </Link>}/>
            <BottomNavigationAction label="Add expense"
                                    icon={
                                        <Link to='add_expense'>
                                            <RemoveCircleOutlineIcon/>
                                        </Link>}/>
        </BottomNavigation>
    );
};
export default SimpleBottomNavigation;