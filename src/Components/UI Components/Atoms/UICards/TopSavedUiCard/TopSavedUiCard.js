import React from "react";
import DetailChip from "../../DetailChip/DetailChip";
import "./style.scss";

const TopSavedUiCard = (props) => {
  let {
    icon = null,
    percentage = 0,
    numberOfPassword = 0,
    lastUpdated = "12/12/2012",
  } = props;
  function daysCalcultor() {
    let today = new Date().getTime();
    let LastUpdatedDate = new Date(lastUpdated).getTime();
    LastUpdatedDate = today - LastUpdatedDate;
    LastUpdatedDate  = Math.floor(LastUpdatedDate / 1000 / 60 /60 / 24);
    return LastUpdatedDate;
  }
  lastUpdated = daysCalcultor();

  return (
    <div className="topSavedUiCard">
      <div className="serviceInformation">
        <div className="iconImage">
          <img src={process.env.PUBLIC_URL + icon} alt="Google Logo" />
        </div>
        <DetailChip
          value={
            Number(lastUpdated) > 1
              ? `${lastUpdated} days`
              : `${lastUpdated} day`
          }
        />
      </div>

      <h4 className="totalSaved">Total Saved</h4>
      <h5 className="passwordQunatity">{numberOfPassword} HASH</h5>
      <div className="progress">
        <h6 className="rangeInPercentage">{percentage}%</h6>
        <div className="range" style={{ width: percentage + "%" }}></div>
      </div>
    </div>
  );
};

export default TopSavedUiCard;
