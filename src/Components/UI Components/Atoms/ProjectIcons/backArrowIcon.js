import React from "react";

const BackArrowIcon = (props) => {
  const { color = "#000", size = "30px" } = props;
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
        <path
          d="M9.99963 7.99976L5.99963 11.9998M5.99963 11.9998L9.99963 15.9998M5.99963 11.9998L17.9996 11.9998"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default BackArrowIcon;
