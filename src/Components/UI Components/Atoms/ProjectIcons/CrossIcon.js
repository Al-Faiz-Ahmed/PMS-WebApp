import React from "react";

const CrossIcon = (props) => {
  const { color = "#fff", size = "24px" } = props;
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
          d="M6.34311 14.8284C5.56206 15.6094 5.56206 16.8758 6.34311 17.6568C7.12416 18.4379 8.39049 18.4379 9.17154 17.6568L12 14.8284L14.8284 17.6568C15.6094 18.4379 16.8758 18.4379 17.6568 17.6568C18.4379 16.8758 18.4379 15.6094 17.6568 14.8284L14.8284 12L17.6568 9.17154C18.4379 8.39049 18.4379 7.12416 17.6568 6.34311C16.8758 5.56206 15.6094 5.56206 14.8284 6.34311L12 9.17154L9.17154 6.34311C8.39049 5.56206 7.12416 5.56206 6.34311 6.34311C5.56206 7.12416 5.56206 8.39049 6.34311 9.17154L9.17154 12L6.34311 14.8284Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default CrossIcon;
