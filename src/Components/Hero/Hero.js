import React from "react";
import "./Hero.css";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
import pdf from "../../Files/ResumeSP.pdf";

export default function Hero() {
    return (
        <>
            <div id="hero" className="hero-container">
                <div className="hero-grid">
                    <div className="top-nav">
                        <ul>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                >
                                    Skillset
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="coding projects"
                                    spy={true}
                                    smooth={true}
                                    offset={140}
                                    duration={500}
                                >
                                    Coding Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="design projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                >
                                    Design Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-link"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-5}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hero-left">
                        <div className="bar"></div>
                        <div className="icons-container">
                            <a
                                href="https://www.behance.net/samuelperez01"
                                target="_blank"
                            >
                                <AiFillBehanceCircle className="icon" />
                            </a>

                            <a
                                href="https://github.com/samu001"
                                target="_blank"
                            >
                                <AiFillGithub className="icon" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/samuel-perez-0a146b24a/"
                                target="_blank"
                            >
                                <AiFillLinkedin className="icon" />
                            </a>
                        </div>
                        <div className="bar"></div>
                    </div>
                    <div className="hero-center">
                        <div className="main-info">
                            <span>Hello, I'm</span>
                            <h1>Samuel Perez</h1>
                            <h3>
                                Front-End Software Engineer | UI/UX Designer
                            </h3>
                            <div className="btn-wrapper">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                >
                                    <button className="btn-cta">
                                        Get in Touch
                                    </button>
                                </Link>

                                <a href={pdf} target="_blank">
                                    <button className="btn-sec">
                                        Download CV
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-img-wrapper">
                            <img
                                src={require("../../Images/profile.png")}
                                alt="profile of person"
                            />
                            <div className="img-outline"></div>
                        </div>
                    </div>
                </div>
                <div className="wave">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
}
