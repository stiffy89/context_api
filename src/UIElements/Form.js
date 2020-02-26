import React, {useContext} from 'react';

import {
    Avatar,
    Button,
    CssBaseline,
    FormControl,
    FormControlLabel,
    Checkbox,
    Input,
    InputLabel,
    Paper,
    Typography,
    MenuItem,
    Select
} from '@material-ui/core';

import {withStyles} from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import styles from '../Styles/FormStyles';

import {LanguageContext} from '../LanguageContext';

const selectedLanguage = {
    french: {
        email: "adresse électronique",
        password: "mot de passe",
        remember: "rappelles toi",
        signIn: "se connecter"
    },
    spanish: {
        email: "correo electronico",
        password: "contrasena",
        remember: "recuerda",
        signIn: "registrarse"
    },
    english: {
        email: "email",
        password: "password",
        remember: "remember",
        signIn: "sign in"
    }
};

function Form (props) 
{
    const {language, setLanguage} = useContext(LanguageContext);
    
    const {classes} = props;

    const {email, password, remember, signIn} = selectedLanguage[language];

    return (
        <main className = {classes.main}>
                <Paper className = {classes.paper}>
                    <Avatar className = {classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>

                    <Typography variant="h5">
                        {signIn}
                    </Typography>

                    <Select value={language} onChange={setLanguage}>
                        <MenuItem value="english"> English </MenuItem>
                        <MenuItem value="french"> French </MenuItem>
                        <MenuItem value="spanish"> Spanish </MenuItem>
                    </Select>
                    <form className= {classes.form}>
                        <FormControl margin="normal" 
                                     required 
                                     fullWidth>
                            <InputLabel htmlFor="email">
                                {email}
                            </InputLabel>
                            <Input 
                                id="email" 
                                name="email" 
                                autoFocus/>
                        </FormControl>

                        <FormControl 
                            margin="normal" 
                            required 
                            fullWidth>
                            <InputLabel htmlFor="password">
                                {password}
                            </InputLabel>
                            <Input 
                                id="password" 
                                name="password" 
                                autoFocus/>
                        </FormControl>

                        <FormControlLabel 
                            label={remember} 
                            control={<Checkbox color="primary"/>}/>

                        <Button 
                            variant="contained" 
                            type="submit" 
                            fullWidth 
                            color="primary" 
                            className={classes.submit}> 
                            {signIn}
                        </Button>
                    </form>
                </Paper>
            </main>
    )
}


export default withStyles(styles)(Form);