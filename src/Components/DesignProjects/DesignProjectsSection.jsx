import React, { useState } from "react";
import DesignProject from "./DesignProject";
import "./DesignProjectsSection.css";
import projectData from "../Data/DesignProjectsData";

export default function DesignProjectsSection() {
    const [projectsArr, setProjectsArr] = useState(projectData);

    const projectEl = projectsArr.map((item) => {
        return (
            <DesignProject
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                url={item.url}
                key={item.url}
            />
        );
    });

    return (
        <div className="design-projects-section">
            <div className="design-projects-container">{projectEl}</div>

            <a href="https://www.behance.net/samuelperez01" target="_blank">
                <button className="btn-sec">See All</button>
            </a>
        </div>
    );
}
