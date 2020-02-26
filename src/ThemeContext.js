import React, {useState, createContext} from 'react';

export const ThemeContext = createContext();

export function ThemeProvider (props) 
{
    const [isDarkMode, setDarkMode] = useState(true);

    const toggleTheme = () => { setDarkMode(!isDarkMode) };

    return (
        <ThemeContext.Provider value = {{darkMode: isDarkMode, toggleTheme: toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    ); 
}