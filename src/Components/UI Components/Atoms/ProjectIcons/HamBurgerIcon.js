import React from "react";

const HamBurgerIcon = (props) => {
  const { color = "#000", size = "24px" } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size,
        width: size,
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="22" height="2" rx="2" fill={color} />
        <rect x="1" y="19" width="22" height="2" rx="2" fill={color} />
        <rect x="1" y="10" width="22" height="2" rx="2" fill={color} />
      </svg>
    </div>
  );
};

export default HamBurgerIcon;
