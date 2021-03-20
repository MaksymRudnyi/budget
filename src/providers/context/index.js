import { createContext, useReducer } from 'react';
import defaultContext from './defaultContent';

const AppContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'changeCurrency': {
            return {
                ...state,
                currency: action.currency
            }
        };

        case 'reset': {
            return defaultContext
        };

        default: {
            throw new Error('No action');
        }
    }
}

const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = { state, dispatch };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export {
    AppContext,
    AppContextProvider
};