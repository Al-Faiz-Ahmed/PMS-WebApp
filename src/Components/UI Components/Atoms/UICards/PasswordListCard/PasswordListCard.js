import { GlobalContext } from "Context/context";
import { UPDATE_DATA } from "Context/types";
import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CTAButton from "../../Buttons/CTAButton/CTAButton";
import InputField from "../../InputField/InputField";
import Modal from "../../Modal/Modal";
import CopyIcon from "../../ProjectIcons/CopyIcon";
import CrossIcon from "../../ProjectIcons/CrossIcon";
import EditIcon from "../../ProjectIcons/EditIcon";
import "./style.scss";

const PasswordListCard = (props) => {
  let { dispatch } = useContext(GlobalContext);
  const [displayModal, setDisplayModal] = useState([false, "dafault"]);
  const [userNameValue, setUserNameValue] = useState(props.userName);
  const [passwordValue, setPasswordValue] = useState(props.debian);
  const [updateButton, setUpdatedButton] = useState("primary");

  const [copyToClipboard, setCopyToClipboard] = useState([false, false]);
  let holdButton;
  const longPressFunction = () => {
    setDisplayModal([true, "active"]);
  };

  return (
    <>
      <div
        className="passwordList"
        onTouchStart={() => {
          holdButton = setTimeout(() => {
            longPressFunction();
          }, 1000);
        }}
        onTouchEnd={() => {
          clearTimeout(holdButton);
        }}
      >
        <div className="username">
          <div>
            {props.userName}
            <CopyToClipboard
              text={props.userName}
              onCopy={() => {
                setCopyToClipboard([true, false]);
                setTimeout(() => {
                  setCopyToClipboard([false, false]);
                }, 800);
              }}
            >
              <button title="Copy">
                {copyToClipboard[0] ? "Copied" : <CopyIcon />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="password">
          <div>
            xxxxxxxxx
            <CopyToClipboard
              text={props.debian}
              onCopy={() => {
                setCopyToClipboard([false, true]);
                setTimeout(() => {
                  setCopyToClipboard([false, false]);
                }, 800);
              }}
            >
              <button title="Copy">
                {copyToClipboard[1] ? "Copied" : <CopyIcon />}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="editBtn">
          <div>
            <button title="Edit" onClick={longPressFunction}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Modal JSX */}
      {displayModal[0] && (
        <Modal.Container DisplayModal={displayModal[1]}>
          <Modal.Header>
            <h4>{props.refrence[0]} Credential</h4>
            <button
              className="crossIcon"
              onClick={() => {
                setDisplayModal([true, "default"]);
                setTimeout(() => {
                  setDisplayModal([false, "default"]);
                }, 1000);
              }}
            >
              <CrossIcon color="#ff7700" size="32px" />
            </button>
          </Modal.Header>
          <Modal.Body>
            <div>
              <InputField
                inputValue={userNameValue}
                onChangeHandler={(e) => setUserNameValue(e.target.value)}
                fullWidth
                type="text"
                placeHolder="Email or Username"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <InputField
                inputValue={passwordValue}
                onChangeHandler={(e) => setPasswordValue(e.target.value)}
                fullWidth
                type="text"
                placeHolder="Password"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <CTAButton
              variant={updateButton}
              buttonLabel="Update"
              clickHandler={async () => {
                setUpdatedButton("loading");
                await dispatch({
                  type: UPDATE_DATA,
                  payload: {
                    indexNumber: props.refrence[1],
                    categoryName: props.refrence[0],
                    userName: userNameValue,
                    password: passwordValue,
                  },
                });
                setDisplayModal([true, "default"]);
                setTimeout(() => {
                  setDisplayModal([false, "default"]);
                }, 1000);
              }}
            />
          </Modal.Footer>
        </Modal.Container>
      )}
    </>
  );
};

export default PasswordListCard;

