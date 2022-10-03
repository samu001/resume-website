import React from "react";
import "./DesignProject.css";

export default function DesignProjectEl(props) {
    function goToSite() {
        window.open(props.url, "_blank", "noopener,noreferrer");
    }

    return (
        <div id="design projects" className="project-container_">
            <div className="project-img_">
                <img src={props.imgUrl} alt="" />
            </div>

            <div className="info-wrapper">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <button className="btn-cta" onClick={goToSite}>
                    Visit
                </button>
            </div>
        </div>
    );
}
