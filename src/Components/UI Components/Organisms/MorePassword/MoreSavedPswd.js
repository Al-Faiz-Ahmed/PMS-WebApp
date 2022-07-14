import React, { useContext } from "react";
import "./style.scss";
import { SkillDetail } from "Components/UI Components/Molecules";
import { MoreSavedCard } from "Components/UI Components/Atoms";
import { GlobalContext } from "Context/context";

const MoreSavedPassword = () => {
  let { state } = useContext(GlobalContext);
  const initialData = state.AppData?.initialData;
  return (
    <div className="baseSection">
      <div className="moreSavedSection">
        <h3>More Saved Passwords</h3>
        <div className="MoreSavedrow">
          {initialData &&
            initialData
              .slice(0, 7)
              .map((data, index) => (
                <MoreSavedCard
                  source={data.image}
                  pageLink={`/category/${data.categoryName}`}
                  key={index}
                />
              ))}

          <MoreSavedCard variant="text" pageLink="/category" />
        </div>
      </div>
      <div className="aboutDesigner">
        <h3>About Developer</h3>
        <SkillDetail />
      </div>
    </div>
  );
};

export default MoreSavedPassword;
