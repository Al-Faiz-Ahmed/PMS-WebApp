import React from "react";
import "./style.scss";

const InputField = (props) => {
  const {
    inputValue,
    id,
    onChangeHandler = null,
    fullWidth,
    style,
    placeHolder = "You know well..",
    type = "password",
    variant = "default",
  } = props;

  return (
    <>
      {variant === "search-field" && (
        <input
          id={id}
          style={style}
          type="text"
          className={fullWidth ? "fullwidth searchFeild" : "searchFeild"}
          onChange={onChangeHandler}
          value={inputValue}
          placeholder="eg: Google or Github."
        />
      )}
      {variant === "default" && (
        <input
          id={id}
          style={{
            borderColor: inputValue !== "" && "#FF7700",
            marginTop: style?.marginTop && style.marginTop,
          }}
          type={type}
          className={fullWidth ? "fullwidth signup" : "signup"}
          onChange={onChangeHandler}
          value={inputValue}
          placeholder={placeHolder}
        />
      )}
    </>
  );
};

export default InputField;
