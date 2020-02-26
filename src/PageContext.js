import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

function PageContent (props) {

    const {darkMode, toggleTheme} = useContext(ThemeContext);

    let ambientColor = null;

    if (darkMode)
    {
        ambientColor = "#1e2559";
    }
    else
    {
        ambientColor = "#dbb293";
    }

    const styles = {
        backgroundColor: ambientColor,
        height: "100vh",
        width: "100vw"
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default PageContent;