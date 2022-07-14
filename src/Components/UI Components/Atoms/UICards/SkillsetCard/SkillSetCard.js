import React from "react";
import DetailChip from "../../DetailChip/DetailChip";
import "./style.scss";
const SkillSetCard = (props) => {
  const { experience = "fresher", content = "Label" } = props;
  return (
    <div className="skillSetCard">
      <h5>{content}</h5>
      <DetailChip
        value={experience}
        state="absolute"
        top="-13px"
        right="13px"
      />
    </div>
  );
};

export default SkillSetCard;
