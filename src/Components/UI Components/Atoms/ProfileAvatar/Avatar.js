import React from "react";

const Avatar = (props) => {
  const { width = "100", borderWidth = "8px", borderColor = "#FF7700" } = props;
  return (
    <img
      src={process.env.PUBLIC_URL + '/Assets/Images/avatar.png'}
      alt="avatar"
      width={width}
      height={width}
      style={{
        borderRadius: "50%",
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: "solid",
      }}
    />
  );
};

export default Avatar;
