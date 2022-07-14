import React, { useContext } from "react";
import { TopSavedUiCard } from "Components/UI Components/Atoms";
import "./style.scss";
import { GlobalContext } from "Context/context";

const TopUsedService = () => {
  let { state } = useContext(GlobalContext);
  const filterData = state.AppData?.filterData;
  return (
    <>
      <h3
        className="topUsedServiceHeading"
        style={{ marginTop: "40px", wordBreak: "break-all" }}
      >
        Top Used Services
      </h3>

      <div className="topSavedPassword">
        {filterData &&
          filterData.slice(0, 3).map((data, index) => (
            <TopSavedUiCard
              lastUpdated={data.UpdatedAt}
              key={index}
              percentage={data.percentage + ''}
              icon={data.image}
              numberOfPassword={data.hashes.length}
            />
          ))}
        <div className="helpingInAlignment topSavedUiCard"></div>
      </div>
    </>
  );
};

export default TopUsedService;
