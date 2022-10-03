import React from "react";
import "./Skill.css";

function Skill(props) {
    return (
        <div id="skills" className="skill-container">
            <div className="img-wrapper-skill">
                <img src={props.logo} alt="logo of skill" />
            </div>
            <div className="bar-info-container">
                <h4>{props.skillName}</h4>
                <div className="bar_">
                    <div className={`fill ${props.level}`}></div>
                </div>
            </div>
            <div className="level">
                <p>{props.level}</p>
            </div>
        </div>
    );
}

export default Skill;
