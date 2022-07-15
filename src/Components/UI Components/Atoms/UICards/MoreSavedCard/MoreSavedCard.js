import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const MoreSavedCard = (props) => {
  const {
    variant = "primary",
    source = null,
    text = "More..",
    pageLink = '',
  } = props;
  return (
    <>
      {variant === "primary" && (
        <div className="moreSavedcard">
          <Link to={pageLink}>
            <img src={process.env.PUBLIC_URL + source} alt="" />
          </Link>
        </div>
      )}
      {variant === "text" && (
        <div className="moreSavedcard">
          <Link to={pageLink}>
            <p className="link">{text}</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default MoreSavedCard;
