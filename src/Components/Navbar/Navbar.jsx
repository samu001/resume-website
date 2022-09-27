import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="side">1</div>
                <div className="navbar">
                    <ul>
                        <li>About Me</li>
                        <li>Skillset</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className="side">2</div>
            </div>
        </>
    );
}

export default Navbar;
