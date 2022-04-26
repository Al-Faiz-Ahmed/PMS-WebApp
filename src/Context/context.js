import React, { createContext, useReducer } from 'react';

import { reducer, data } from './reducer';

export const GlobalContext = createContext('Initial Value');

function ContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider;