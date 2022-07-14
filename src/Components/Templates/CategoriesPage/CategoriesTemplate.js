import React, { useContext, useEffect } from "react";
import "./style.scss";
import {
  // Avatar,
  // LogoutButton,
  MoreSavedCard,
} from "Components/UI Components/Atoms";
import { BreadCrumbs } from "Components/UI Components/Molecules";

import { GlobalContext } from "Context/context";
import { MOBILE_SIDEBAR_SLIDE_DEFAULT, PAGE_NAVIGATOR } from "Context/types";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";

const CategoriesTemplate = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const initialData = state.AppData?.initialData;
  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
    dispatch({
      type: PAGE_NAVIGATOR,
      payload: "categories",
    });
  }, []);
  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs
              pageHistory={[["Home", "/"]]}
              currentPage={"categories"}
            />
          </div>

          <div className="mainSection">
            <h3>More Saved Passwords</h3>
            <div className="MoreSavedrow">
              {initialData &&
                initialData.map((data, index) => (
                  <MoreSavedCard
                    source={data.image}
                    pageLink={`/category/${data.categoryName}`}
                    key={index}
                  />
                ))}
              <MoreSavedCard
                variant="text"
                text="Add New"
                pageLink="/add-platform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesTemplate;
