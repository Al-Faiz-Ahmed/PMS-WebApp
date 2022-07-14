import React, { useState, useEffect } from "react";
import "./style.scss";
import { SkillSetCard } from "Components/UI Components/Atoms";

const SkillDetail = () => {
  const [animationStart, setAnimationStart] = useState(false);
  const [skills, setSkills] = useState([
    {
      experience: "Expert",
      skill: "Web Developer",
    },
    {
      experience: "Expert",
      skill: "MERN Stack Developer",
    },
    {
      experience: "Standard",
      skill: "UI / UX Designer",
    },
    {
      experience: "Standard",
      skill: "React Native Developer",
    },
  ]);
  useEffect(() => {
    const animationDelayTime = setTimeout(() => {
      setSkills([
        {
          experience: "Expert",
          skill: "Web Developer",
          className: "first",
        },
        {
          experience: "Expert",
          skill: "MERN Stack Developer",
          className: "second",
        },
        {
          experience: "Standard",
          skill: "UI / UX Designer",
          className: "first",
        },
        {
          experience: "Standard",
          skill: "React Native Developer",
          className: "second",
        },
      ]);
      setAnimationStart(true);
    }, 1000);
    return () => {
      clearTimeout(animationDelayTime);
    };
  }, []);

  useEffect(() => {
    if (animationStart) {
      var cloneSkills = skills;
      var updateCounting = setInterval(() => {
        setSkills((skillsset) => {
          var sample = cloneSkills[0];
          cloneSkills.shift();
          cloneSkills.push(sample);
          skillsset = [...cloneSkills];
          return skillsset;
        });
      }, 1980);
    }
    return () => {
      clearInterval(updateCounting);
    };
  }, [animationStart]);

  return (
    <div className="skillSection">
      {skills.length > 0 &&
        skills.map((data, index) => (
          <div key={index} className={data.className}>
            <SkillSetCard experience={data.experience} content={data.skill} />
          </div>
        ))}
    </div>
  );
};

export default SkillDetail;
