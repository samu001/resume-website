import React from "react";
import "./CodProject.css";

export default function CodProject(props) {
    return (
        <div className="cod-project-container">
            <h3>{props.title}</h3>
            <div className="top-wrapper">
                <div className="img-wrapper__">
                    <img src={props.img} alt="" />
                </div>
                <div className="right-wrapper">
                    <p className="cod-proj-desc">{props.description}</p>
                    <p className="techs">{props.technologies}</p>
                    <button className="proj-btn btn-cta">Visit</button>
                    <button className="proj-btn btn-sec">Github</button>
                </div>
            </div>
        </div>
    );
}
