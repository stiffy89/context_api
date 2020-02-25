import React, {Component} from 'react';
import {ThemeContext} from './ThemeContext';

class PageContent extends Component {

    static contextType = ThemeContext;

    render () {

        let ambientColor = null;

        if (this.context.isDarkMode)
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
                {this.props.children}
            </div>
        )
    }

}

export default PageContent;