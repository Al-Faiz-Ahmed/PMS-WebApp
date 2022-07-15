import React, { useContext, useEffect } from "react";
import Categories from "Pages/Categories";
import CategoryDetail from "Pages/CategoryDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/login";
import { GlobalContext } from "Context/context";
import { SAVE_DATA_FROM_BACKEND } from "Context/types";
import WebData from "../SampleData/sampleWebData.json";
import AddPlatform from "Pages/AddPlatform";
import About from "Pages/About";

const ReactRouter = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let {
    AuthenticUser: { User },
  } = state;

  useEffect(() => {
    if (User === true) {
      dispatch({
        type: SAVE_DATA_FROM_BACKEND,
        payload: WebData,
      });
    }
  }, [User]);

  return (
    <Router>
      <Routes>
        {User === true && (
          <>
            <Route path="/add-Platform" element={<AddPlatform />} />
            <Route path="/category/:detail" element={<CategoryDetail />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
          </>
        )}
        {User === false && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default ReactRouter;
