import React from "react";

const DetailChip = (props) => {
  const {
    value = "856 days",
    state = "static",
    top = "0px",
    right = "0px",
  } = props;
  return (
    <span
      style={{
        backgroundColor: "#fff",
        position: state,
        top: top,
        right: right,
        boxShadow:
          "6px 7px 10px -3px rgba(255, 119, 0, 0.4), inset -3px -2px 4px rgba(255, 170, 96, 0.35)",
        color: "#FF7700",
        borderRadius: "200px",
        padding: "6px 20px",
        fontSize: "10px",
      }}
    >
      {value}
    </span>
  );
};

export default DetailChip;
