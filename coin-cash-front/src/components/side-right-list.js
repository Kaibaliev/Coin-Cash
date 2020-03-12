import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});



export const RightSideList = side => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    return (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Sing in', 'Refresh', 'Settings'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 3 === 0 ? <AccountCircleIcon/> : <RefreshIcon/> }</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Support'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <ContactSupportIcon/>
                        </ListItemIcon>

                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
};