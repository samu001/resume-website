import "./Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <div className="footer">
            <p>
                Thank you for visiting my personal portafolio/resume website.
                This webpage was created with React, the github repository can
                be accessed by{" "}
                <a
                    className="resume-git"
                    href="https://github.com/samu001/resume-website"
                    target="_blank"
                >
                    clicking here
                </a>
                . If you liked my work, please do not hesitate in reaching out.
            </p>
            <button className="btn-sec footer-btn">
                <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    Back to the Top
                </Link>
            </button>
        </div>
    );
}
