import React, {Component, createContext} from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {

    constructor(props){
        super(props);

        this.state = {
            isDarkMode : true
        };

        this.toggleTheme = this.toggleTheme.bind(this);

    }  

    toggleTheme () 
    {

        this.setState({ isDarkMode: !this.state.isDarkMode});
    }

    render () {
          //pass in the information from the state
        return (
            <ThemeContext.Provider value = {{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )      
    }
}