import React, {useContext} from 'react';

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

import {ThemeContext} from '../ThemeContext.js';
import {LanguageContext} from '../LanguageContext.js';

function NavBar (props)
{
    const {darkMode, toggleTheme} = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color={darkMode ? "default" : "primary"}>
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

                    <Switch onChange = {toggleTheme}/>
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

export default withStyles(styles)(NavBar);