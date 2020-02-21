import React, {Component} from 'react';

import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Switch
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import styles from '../Styles/NavBarStyles';

class NavBar extends Component {
    
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit">
                            <span>🇫🇷</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App Title
                        </Typography>

                        <Switch/>
                        <div className={classes.grow}/>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>

                            <InputBase 
                                placeholder="Search.."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput
                                }}
                                />
                        </div>
                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);