import React from "react";
import LogoutIcon from "../../ProjectIcons/LogoutIcon";
import "./style.scss";
const LogoutButton = (props) => {
  const { buttonState = "", onClickHandler = null } = props;
  return buttonState === "active" ? (
    <button className="navButton navActiveButton" onClick={onClickHandler}>
      <LogoutIcon color="#ff7700" size="20px" />
      <p>Log out</p>
    </button>
  ) : (
    <button className="navButton navInActiveButton" onClick={onClickHandler}>
      <LogoutIcon color="#fff" size="22px" />
      <p>Log out</p>
    </button>
  );
};

export default LogoutButton;
