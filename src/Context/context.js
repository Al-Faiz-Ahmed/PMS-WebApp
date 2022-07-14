import React, { createContext, useReducer } from "react";

import { reducer, initialState } from "./reducer";

export const GlobalContext = createContext("Initial Value");

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
