import React from "react";
import SavedIcon from "../../ProjectIcons/CategoryIcon";
import "./style.scss";
const SavedPasswordButton = (props) => {
  const { buttonState = "", onClickHandler = null } = props;
  return buttonState === "active" ? (
    <button className="navButton navActiveButton" onClick={onClickHandler}>
      <SavedIcon color="#ff7700" size="20px" />
      <p>Categories</p>
    </button>
  ) : (
    <button className="navButton navInActiveButton" onClick={onClickHandler}>
      <SavedIcon color="#fff" size="22px" />
      <p>Categories</p>
    </button>
  );
};

export default SavedPasswordButton;
