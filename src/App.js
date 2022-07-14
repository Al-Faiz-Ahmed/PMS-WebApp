import ContextProvider from "Context/context";
import React from "react";
import ReactRouter from "./Navigation/reactRouter";

const App = () => {
  return (
    <ContextProvider>
      <ReactRouter />
    </ContextProvider>
  );
};

export default App;
