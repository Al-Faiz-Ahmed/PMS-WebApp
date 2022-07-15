import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import WebData from "../../../SampleData/sampleWebData.json";
import {
  CrossIcon,
  CTAButton,
  InputField,
  Modal,
  PasswordListCard,
} from "Components/UI Components/Atoms";
import { BreadCrumbs } from "Components/UI Components/Molecules";
import { GlobalContext } from "Context/context";
import {
  MOBILE_SIDEBAR_SLIDE_DEFAULT,
  PAGE_NAVIGATOR,
  SAVE_DATA_FROM_BACKEND,
} from "Context/types";
import { DashboardHeader, SideBar } from "Components/UI Components/Organisms";
import { useParams } from "react-router-dom";

const CategoryDetailTemplate = () => {
  let { state, dispatch } = useContext(GlobalContext);
  let { detail } = useParams();
  const initialData = state.AppData?.initialData;
  const [serviceProvider, setServiceProvider] = useState(null);
  const [displayModal, setDisplayModal] = useState([false, "dafault"]);
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [updateButton, setUpdatedButton] = useState("primary");

  useEffect(() => {
    dispatch({ type: MOBILE_SIDEBAR_SLIDE_DEFAULT });
    dispatch({
      type: PAGE_NAVIGATOR,
      payload: "categories",
    });
  }, []);

  useEffect(() => {
    if (initialData) {
      let service = initialData.find((data) => {
        return data.categoryName.toLowerCase() === detail.toLowerCase();
      });
      setServiceProvider(service);
    }
  }, [initialData, detail]);

  const addNewHash = () => {
    if (userNameValue && passwordValue) {
      let { categories } = WebData;
      categories.filter((data) => {
        if (data.categoryName === serviceProvider.categoryName) {
          data.hashes.push({ userName: userNameValue, debian: passwordValue });
          data.UpdatedAt = new Date().toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
        }
      });
      setUpdatedButton("loading");
      dispatch({
        type: SAVE_DATA_FROM_BACKEND,
        payload: WebData,
      });
      setDisplayModal([true, "default"]);
      setTimeout(() => {
        setDisplayModal([false, "default"]);
      }, 1000);
      setUserNameValue("");
      setPasswordValue("");
      setUpdatedButton("primary");
    }
  };

  return (
    <div className="main_body">
      <div className="dashboard_main">
        <SideBar />
        <div className="dashboard">
          <DashboardHeader />
          <div className="breadCrumbSection">
            <BreadCrumbs
              pageHistory={[
                ["Home", "/"],
                ["Category", "/category"],
              ]}
              currentPage={detail}
            />
          </div>

          <div className="mainSection">
            <div className="header">
              <img
                src={process.env.PUBLIC_URL + serviceProvider?.image}
                alt={serviceProvider?.categoryName}
              />
              <h3>{serviceProvider?.categoryName}</h3>
              <button
                onClick={() => {
                  setDisplayModal([true, "active"]);
                }}
              >
                <CrossIcon size="28px" />
              </button>
            </div>
            <div className="hashSection">
              {serviceProvider?.hashes.map((data, index) => (
                <PasswordListCard
                  key={index}
                  refrence={[serviceProvider.categoryName, index]}
                  {...data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal JSX */}
      {displayModal[0] && (
        <Modal.Container DisplayModal={displayModal[1]}>
          <Modal.Header>
            <h4>{serviceProvider?.categoryName} Credential</h4>
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
            <form action="post">
              <h4>Add New Hash</h4>
              <div style={{ marginTop: "20px" }}>
                <label htmlFor="username">
                  <InputField
                    onChangeHandler={(e) => {
                      setUserNameValue(e.target.value);
                    }}
                    inputValue={userNameValue}
                    id="username"
                    type="text"
                    placeHolder="Email / User-name"
                    fullWidth
                  />
                </label>
              </div>
              <div style={{ marginTop: "15px" }}>
                <label htmlFor="password">
                  <InputField
                    id="password"
                    placeHolder="Password"
                    fullWidth
                    onChangeHandler={(e) => {
                      setPasswordValue(e.target.value);
                    }}
                    inputValue={passwordValue}
                  />
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <CTAButton
              variant={updateButton}
              clickHandler={addNewHash}
              buttonLabel="Save"
              fullWidth
            />
          </Modal.Footer>
        </Modal.Container>
      )}
    </div>
  );
};

export default CategoryDetailTemplate;
