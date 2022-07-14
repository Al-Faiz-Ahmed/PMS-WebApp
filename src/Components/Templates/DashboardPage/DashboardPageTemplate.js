import React, { useContext, useEffect } from "react";
import "./style.scss";
import {
  DashboardHeader,
  MoreSavedPassword,
  SideBar,
  TopUsedService,
} from "Components/UI Components/Organisms";
import { GlobalContext } from "Context/context";
import { MOBILE_SIDEBAR_SLIDE_DEFAULT, PAGE_NAVIGATOR } from "Context/types";

const DashboardPageTemplate = () => {
  let { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
    dispatch({ type: PAGE_NAVIGATOR, payload: "home" });
  }, []);

  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <TopUsedService />
          <MoreSavedPassword />
        </div>
      </div>
    </div>
  );
};

export default DashboardPageTemplate;
