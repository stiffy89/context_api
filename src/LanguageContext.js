import React, {useContext, Component, createContext} from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {

    constructor (props) {
        super(props);

        this.state = {

            language : "spanish"

        };
    }

    render () {
        return (
            <LanguageContext.Provider value = {this.state}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}