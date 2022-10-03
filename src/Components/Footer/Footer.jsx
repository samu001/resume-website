import "./Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
    return (
        <div className="footer">
            <p>
                Thank you for vistiing my personal webpage. This webpage was
                made with React, the github repository can be accessed by
                clicking here. If you liked my work do not hesitate in reaching
                out.
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
