import React from "react";
import HomeIcon from "../../ProjectIcons/HomeIcon";
import "./style.scss";
const HomeButton = (props) => {
  const { buttonState = "active",onClickHandler=null } = props;
  return buttonState === "active" ? (
    <button className="navButton navActiveButton" onClick={onClickHandler}>
      <HomeIcon color="#ff7700" size="22px" />
      <p>Home</p>
    </button>
  ) : (
    <button className="navButton navInActiveButton" onClick={onClickHandler}>
      <HomeIcon color="#fff" size="22px" />
      <p>Home</p>
    </button>
  );
};

export default HomeButton;
