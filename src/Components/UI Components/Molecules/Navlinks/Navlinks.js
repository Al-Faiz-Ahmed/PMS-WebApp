import React, { useContext, useEffect, useState } from "react";
import {
  AboutUsButton,
  HomeButton,
  SavedPasswordButton,
} from "Components/UI Components/Atoms";
import { GlobalContext } from "Context/context";
import { PAGE_NAVIGATOR } from "Context/types";
import { useNavigate } from "react-router-dom";

const Navlinks = () => {
  const navigate = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);
  let tab = state.ComponentControl?.tab;
  const [buttonState, setButtonState] = useState(tab);

  useEffect(() => {
    setButtonState(tab);
  }, [tab]);
  return (
    <div style={{ marginTop: "50px" }}>
      <HomeButton
        buttonState={buttonState === "home" && "active"}
        onClickHandler={() => {
          dispatch({ type: PAGE_NAVIGATOR, payload: "home" });
          navigate("/");
        }}
      />
      <SavedPasswordButton
        buttonState={buttonState === "categories" && "active"}
        onClickHandler={() => {
          dispatch({
            type: PAGE_NAVIGATOR,
            payload: "categories",
          });
          navigate("/category");

        }}
      />
      <AboutUsButton
        buttonState={buttonState === "about" && "active"}
        onClickHandler={() => {
          dispatch({ type: PAGE_NAVIGATOR, payload: "about" });
          navigate("/about");

        }}
      />
    </div>
  );
};

export default Navlinks;
