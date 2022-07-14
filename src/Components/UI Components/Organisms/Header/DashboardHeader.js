import React, { useState, useEffect, useContext } from "react";
import "./style.scss";
import {
  BackArrowIcon,
  HamBurgerIcon,
  PMSHeading,
  SearchIcon,
} from "Components/UI Components/Atoms";
import { SearchBar } from "Components/UI Components/Molecules";
import {
  MOBILE_DEVICE_SEARCHING_START,
  MOBILE_DEVICE_SEARCHING_STOP,
  MOBILE_SIDEBAR_SLIDE_ON,
} from "Context/types";
import { GlobalContext } from "Context/context";
import { useNavigate } from "react-router-dom";
const DashboardHeader = () => {
  const naviagte = useNavigate();
  let { state, dispatch } = useContext(GlobalContext);
  const {
    ComponentControl: { mobileSearchButtonDefault, searchedValue },
  } = state;
  let searchWords = state.AppData?.searchWords;
  const [hamBurgerMenu, setHamBurgerMenu] = useState(true);
  const [filterSearchResult, setFilterSearchResult] = useState([]);

  useEffect(() => {
    if (searchWords) {
      let filterSearch = searchWords.filter((data) => {
        if (data.indexOf(searchedValue) !== -1) {
          return data;
        }
      });
      setFilterSearchResult(filterSearch);
    }
  }, [searchedValue]);

  useEffect(() => {
    if (mobileSearchButtonDefault === false) {
      setHamBurgerMenu(true);
    } else {
      setHamBurgerMenu(false);
    }
  }, [mobileSearchButtonDefault]);

  const mobileSearchingHandler = (search) => {
    if (search === "on") {
      dispatch({ type: MOBILE_DEVICE_SEARCHING_START });
    } else {
      dispatch({ type: MOBILE_DEVICE_SEARCHING_STOP });
    }
  };

  return (
    <div className="dashboardHeader">
      <div className="headingSection laptopHeading">
        <PMSHeading color="#006B5E" variant="dashboard" fontSize="32px" />
      </div>
      <div className="headingSection mobileHeading">
        {hamBurgerMenu ? (
          <PMSHeading color="#006B5E" variant="dashboard" fontSize="32px" />
        ) : (
          <button className="backButton" onClick={mobileSearchingHandler}>
            <BackArrowIcon color="#006B5E" />
          </button>
        )}
      </div>
      <div className="searchBox">
        <div className="laptopSearchBar">
          <SearchBar />
        </div>
        <div
          className={`mobileSearchBar ${
            mobileSearchButtonDefault ? "active" : "default"
          }`}
        >
          <SearchBar
            onClickHandler={() => {
              mobileSearchingHandler("on");
            }}
          />
        </div>

        {searchedValue[1] !== undefined && (
          <div className="searchResult">
            <ul>
              <li style={{ display: "flex" }}>
                <SearchIcon color="#00362F" size="20px" />{" "}
                <span style={{ marginLeft: "10px" }}>
                  {searchedValue.length > 11
                    ? `"${searchedValue.slice(0, 12)}..." `
                    : `"${searchedValue}" `}
                  searching
                </span>
              </li>
              {filterSearchResult.map((word, index) => {
                return (
                  <li
                  style={{cursor:"pointer"}}
                    key={index}
                    onClick={() => {
                      let cloneWord = word.split("");
                      cloneWord[0] = cloneWord[0].toUpperCase();
                      cloneWord = cloneWord.join("");
                      naviagte("/category/" + cloneWord);
                      dispatch({ type: MOBILE_DEVICE_SEARCHING_STOP });
                    }}
                  >
                    <span style={{ marginLeft: "10px" }}>{word}</span>
                  </li>
                );
              })}
              {searchedValue[1] !== undefined &&
                filterSearchResult == false && (
                  <li>No search Result {searchedValue.slice(0, 4)}...</li>
                )}
            </ul>
          </div>
        )}
      </div>
      {hamBurgerMenu && (
        <button
          className="HamBurger"
          onClick={() => {
            dispatch({ type: MOBILE_SIDEBAR_SLIDE_ON });
          }}
        >
          <HamBurgerIcon color="#006B5E" />
        </button>
      )}
    </div>
  );
};

export default DashboardHeader;
