import React, { useState } from "react";
import SkillsArr from "../Data/SkillsData";
import "./SkillSection.css";
import Skill from "./Skill";

function SkillSection() {
    const [skillsArr, setSkillsArr] = useState(SkillsArr);

    const skillEl = skillsArr.map((item) => {
        return (
            <Skill
                key={item.skillName}
                skillName={item.skillName}
                level={item.level}
                logo={item.logo}
            />
        );
    });

    return (
        <div className="skills-section">
            <div className="section-title">
                <h2>Skillset</h2>
            </div>
            <div className="skillsEl-wrapper">{skillEl}</div>
        </div>
    );
}

export default SkillSection;
