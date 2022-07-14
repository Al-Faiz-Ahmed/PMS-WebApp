import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const BreadCrumbs = (props) => {
  const { pageHistory = "", currentPage } = props;
  return (
    <div className="breadCrumbs">
      {pageHistory.map((link, index) => (
        <React.Fragment key={index}>
          <Link to={link[1]}> {link[0]}</Link> {"/"}
        </React.Fragment>
      ))}
      <span> {currentPage}</span>
    </div>
  );
};

export default BreadCrumbs;
