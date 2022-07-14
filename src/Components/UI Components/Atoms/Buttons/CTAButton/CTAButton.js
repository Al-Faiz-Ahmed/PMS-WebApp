import React from "react";
import "./styles.scss";

const CTAButton = (props) => {
  let { buttonLabel=null, variant, fullWidth, clickHandler = null, style } = props;
  variant ? variant : (variant = "primary");
  fullWidth ? (fullWidth = "fullWidth") : "";

  return (
    <>
      {variant === "primary" && (
        <button
          onClick={clickHandler}
          className={`primary ctaButton ${fullWidth}`}
          style={style}
        >
          {buttonLabel}
        </button>
      )}
      {variant === "loading" && (
        <button className={`loading ctaButton ${fullWidth}`} style={style}>
          <img src={'/Assets/Images/spinner.svg'} alt="spinner" width="20" />
        </button>
      )}
      {variant === "disable" && (
        <button className={`disable ctaButton ${fullWidth}`} style={style}>
          {buttonLabel}
        </button>
      )}
    </>
  );
};

export default CTAButton;
