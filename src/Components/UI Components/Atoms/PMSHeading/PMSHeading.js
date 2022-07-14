import React from "react";
import "./style.scss";
const PMSHeading = ({ color, variant }) => {
  return variant === "dashboard" ? (
    <h2 style={{ color: color,  }} className='dashboardHeading'>
      P<span>assword</span> M<span>anagement</span> S<span>ystem</span>
    </h2>
  ) : (
    <h2 style={{ color: color, }}>
      P<span>assword</span> M<span>anagement</span> S<span>ystem</span>
    </h2>
  );
};

export default PMSHeading;
