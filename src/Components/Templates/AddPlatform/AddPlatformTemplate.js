import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";
import WebData from "../../../SampleData/sampleWebData.json";

import {
  CrossIcon,
  CTAButton,
  InputField,
  Modal,
} from "Components/UI Components/Atoms";
import { GlobalContext } from "Context/context";
import {
  MOBILE_SIDEBAR_SLIDE_DEFAULT,
  PAGE_NAVIGATOR,
  SAVE_DATA_FROM_BACKEND,
} from "Context/types";

const AddPlatformTemplate = () => {
  let { state, dispatch } = useContext(GlobalContext);
  const [updateButton, setUpdatedButton] = useState("primary");
  const [displayModal, setDisplayModal] = useState([false, "dafault"]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [platformNameValue, setPlatformName] = useState("");
  const [platformNameError, setPlatformNameError] = useState(false);
  const [logoImage, setLogoImage] = useState("");
  let searchWords = state.AppData?.searchWords;

  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
    dispatch({
      type: PAGE_NAVIGATOR,
      payload: "home",
    });
  }, []);
  const addPlatformValidate = (e) => {
    e.preventDefault();
    let samePlatform = searchWords.filter((data) => {
      return data === platformNameValue.toLocaleLowerCase();
    });
    if (samePlatform.length < 1) {
      setPlatformNameError(false);
      addPlatform();
    } else {
      setPlatformNameError(true);
    }
    async function addPlatform() {
      let { categories } = WebData;
      let orderNumber = WebData.categories.at(-1).orderNumber;
      let categoryName = platformNameValue.toLowerCase();
      categoryName =
        platformNameValue[0].toLocaleUpperCase() + platformNameValue.slice(1);
      let platformObj = {
        UpdatedAt: new Date().toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        categoryName,
        orderNumber,
        hashes: [{ userName: userNameValue, debian: passwordValue }],
        image: logoImage,
      };
      categories.push(platformObj);
      await dispatch({
        type: SAVE_DATA_FROM_BACKEND,
        payload: WebData,
      });
      setLogoImage("");
      setPlatformName("");
      setPlatformNameError("");
      setUserNameValue("");
      setPasswordValue("");
    }
  };

  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />

          <div className="form-Section">
            <h3>Add New Platform</h3>
            <form>
              <div className="image-section">
                <div className="image-picker-Section">
                  <button
                    className="image-picker"
                    onClick={(e) => {
                      e.preventDefault();
                      setDisplayModal([true, "active"]);
                    }}
                  >
                    {logoImage ? (
                      <img src={process.env.PUBLIC_URL + logoImage} />
                    ) : (
                      <>
                        <h4>Logo</h4>
                        <p>Image</p>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="platform-name">
                <label htmlFor="plaform">
                  Platform
                  <InputField
                    type="text"
                    id="plaform"
                    fullWidth
                    placeHolder={"eg: Youtube, Google"}
                    onChangeHandler={(e) => {
                      setPlatformName(e.target.value);
                    }}
                    inputValue={platformNameValue}
                  />
                </label>
                {platformNameError && (
                  <p style={{ color: "#FF6666", padding: "10px 0px" }}>
                    Sorry! This platform is already available.
                  </p>
                )}
              </div>
              <div className="email-section">
                <label htmlFor="email">
                  Email / Username
                  <InputField
                    type="text"
                    id="email"
                    fullWidth
                    placeHolder={"eg: faizahmed, faizahmed@example.com"}
                    onChangeHandler={(e) => {
                      setUserNameValue(e.target.value);
                    }}
                    inputValue={userNameValue}
                  />
                </label>
              </div>
              <div className="password-section">
                <label htmlFor="password">
                  Password
                  <InputField
                    fullWidth
                    id="password"
                    onChangeHandler={(e) => {
                      setPasswordValue(e.target.value);
                    }}
                    inputValue={passwordValue}
                  />
                </label>
              </div>
              <div className="add-platform-button">
                {logoImage &&
                platformNameValue &&
                userNameValue &&
                passwordValue ? (
                  <CTAButton
                    buttonLabel="Add Platform"
                    fullWidth
                    clickHandler={addPlatformValidate}
                  />
                ) : (
                  <CTAButton
                    variant="disable"
                    buttonLabel="Add Platform"
                    fullWidth
                    clickHandler={addPlatformValidate}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
        {/* Modal JSX */}
        {displayModal[0] && (
          <Modal.Container DisplayModal={displayModal[1]}>
            <Modal.Header>
              <h4>Logo Image</h4>
              <button
                className="crossIcon"
                onClick={() => {
                  setDisplayModal([true, "default"]);
                  setTimeout(() => {
                    setDisplayModal([false, "default"]);
                    setSelectedImage([]);
                  }, 1000);
                }}
              >
                <CrossIcon color="#ff7700" size="32px" />
              </button>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-image">
                <div className="image-picker-Section">
                  {selectedImage[0] ? (
                    <div className="imageContainer">
                      <img src={selectedImage[0]} alt={selectedImage[1]} />
                    </div>
                  ) : (
                    <label htmlFor="imagePicker">
                      <div className="image-picker">
                        <input
                          id="imagePicker"
                          type="file"
                          accept=".svg"
                          hidden
                          onChange={(e) => {
                            let file = e.target.files[0];
                            let fileUrl = URL.createObjectURL(file);
                            setSelectedImage([fileUrl, file.name]);
                          }}
                        />
                        <h4>Logo</h4>
                        <p>70 x 70 pt</p>
                      </div>
                    </label>
                  )}
                </div>
                <p className="svgName">
                  {selectedImage[1] && `${selectedImage[1]}`}
                </p>
                <div className="guide-Section">
                  <ol>
                    <li>Only svg file allowed.</li>
                    <li>SVG file size should be less than 40kb.</li>
                    <li>Canvas/Frame/Artboard size should be 70pt x 70pt.</li>
                    <li>Image should be in size of 43pt x 43pt.</li>
                    <li>Image should be centered align.</li>
                  </ol>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <CTAButton
                variant={selectedImage[0] ? updateButton : "disable"}
                buttonLabel="Save Image"
                clickHandler={async () => {
                  setUpdatedButton("loading");
                  await setLogoImage(selectedImage[0]);
                  setDisplayModal([true, "default"]);
                  setTimeout(() => {
                    setDisplayModal([false, "default"]);
                    setUpdatedButton("primary");
                    setSelectedImage([]);
                  }, 1000);
                }}
              />
            </Modal.Footer>
          </Modal.Container>
        )}
      </div>
    </div>
  );
};

export default AddPlatformTemplate;
