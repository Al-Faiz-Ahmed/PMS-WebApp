import React from "react";
import AboutUsIcon from "../../ProjectIcons/AboutUsIcon";
import "./style.scss";
const AboutUsButton = (props) => {
  const { buttonState = "", onClickHandler = null } = props;
  return buttonState === "active" ? (
    <button className="navButton navActiveButton" onClick={onClickHandler}>
      <AboutUsIcon color="#ff7700" size="20px" />
      <p>About us</p>
    </button>
  ) : (
    <button className="navButton navInActiveButton" onClick={onClickHandler}>
      <AboutUsIcon color="#fff" size="22px" />
      <p>About us</p>
    </button>
  );
};

export default AboutUsButton;
