import React, { useState } from "react";
import "./Skills.scss";
import { skill, skills, skillsDataList } from "./skillsData";

const Skills = () => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((item) => item !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const skills = (skillsData: skill[]): JSX.Element[] => {
    return skillsData.map((skillData: skill) => (
      <div>
        <p>{skillData.skill}</p>
        <p>{skillData.level}</p>
      </div>
    ));
  };

  const skillsList = (skillsDataList: skills[]): JSX.Element[] => {
    return skillsDataList.map((skillsData: skills, index: number) => (
      <div
        className={`skills__accordion__skill-type ${
          expandedIndices.includes(index) ? "expanded" : ""
        }`}
        key={index}
      >
        <div
          className="skills__accordion__skill-type__name"
          onClick={() => toggleAccordion(index)}
        >
          <h3>{skillsData.skillType}</h3>
          <span>{expandedIndices.includes(index) ? "-" : "+"}</span>
        </div>
        <div
          className={`skills__accordion__skill-type__content ${
            expandedIndices.includes(index) ? "expanded" : ""
          }`}
        >
          {skills(skillsData.skills)}
        </div>
      </div>
    ));
  };

  return (
    <div className="skills">
      <h1 className="skills__subtitle">スキル</h1>
      <div className="skills__accordion">{skillsList(skillsDataList)}</div>
    </div>
  );
};
export default Skills;
