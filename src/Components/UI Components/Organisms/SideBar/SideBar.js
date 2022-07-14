import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Avatar, LogoutButton } from "Components/UI Components/Atoms";
import { Navlinks } from "Components/UI Components/Molecules";
import { GlobalContext } from "Context/context";
import {
  MOBILE_SIDEBAR_SLIDE_DEFAULT,
  MOBILE_SIDEBAR_SLIDE_OFF,
  USER_LOGOUT,
} from "Context/types";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);
  const {
    ComponentControl: { mobileSideBar },
  } = state;
  const [sideBarShow, setideBarShow] = useState("");

  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
  }, []);

  useEffect(() => {
    setideBarShow(mobileSideBar);
  }, [mobileSideBar]);

  return (
    <div className={`sideBar_parent ${sideBarShow}`}>
      <div className={`sidebar`} tabIndex="-1">
        <div className="user_info">
          <Avatar borderColor="#fff" width="50" borderWidth="4px" />
          <p className="user_name">@muhammadfaizahmed</p>
        </div>
        <Navlinks />
        <div className="logoutButton">
          <LogoutButton
            onClickHandler={async () => {
              await dispatch({
                type: USER_LOGOUT,
              });
              navigate("/");
            }}
          />
        </div>
      </div>
      <div
        className="side-sibling"
        onClick={() => {
          dispatch({ type: MOBILE_SIDEBAR_SLIDE_OFF });
        }}
      ></div>
    </div>
  );
};

export default SideBar;
