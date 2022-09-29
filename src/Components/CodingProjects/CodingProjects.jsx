import React, { useState } from "react";
import "./CodingProjects.css";
import CodProject from "./CodProject";
import CodingProjectsData from "../Data/CodingProjectsData";

export default function CodingProjects() {
    const [codProjArr, setCodProjArr] = useState(CodingProjectsData);

    const codProjEl = codProjArr.map((item) => {
        return (
            <CodProject
                title={item.title}
                img={item.img}
                description={item.description}
                technologies={item.technologies}
                url={item.url}
                gitUrl={item.gitUrl}
            />
        );
    });

    return (
        <div className="coding-projects-section">
            <div class="wave-2">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        class="shape-fill"
                    ></path>
                </svg>
            </div>
            <div className="cod-title">
                <h2>Coding Projects</h2>
            </div>
            <div className="cod-projects-container">{codProjEl}</div>
        </div>
    );
}
