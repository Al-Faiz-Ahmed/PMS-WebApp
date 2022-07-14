import { InputField, SearchIcon } from "Components/UI Components/Atoms";
import React, { useContext } from "react";
import "./style.scss";
import { SEARCHING_START } from "Context/types";
import { GlobalContext } from "Context/context";

const SearchBar = (props) => {
  const {
    onClickHandler = null,
    inputStyle = null,
    SearchBTNcolor = "#fff",
  } = props;

  let { state, dispatch } = useContext(GlobalContext);

  return (
    <div className="searchBar" type="text">
      <InputField
        onChangeHandler={(e) => {
          dispatch({
            type: SEARCHING_START,
            payload: e.target.value.toLowerCase(),
          });
        }}
        value={state.ComponentControl.searchedValue}
        variant="search-field"
        fullWidth
        style={inputStyle}
      />
      <button onClick={onClickHandler}>
        <SearchIcon color={SearchBTNcolor} />
      </button>
    </div>
  );
};

export default SearchBar;
