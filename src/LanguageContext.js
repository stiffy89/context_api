import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider (props) {

    const[language, setLanguage] = useState("spanish");

    const changeLanguage = (event) => setLanguage(event.target.value);

    return (
        <LanguageContext.Provider value = {{language: language, setLanguage: changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    );
}