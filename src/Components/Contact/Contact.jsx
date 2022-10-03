import React, { useState } from "react";
import "./Contact.css";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineSms } from "react-icons/md";
import ClipboardCopy from "../Util/ClipboardCopy";

export default function Contact() {
    function handleClick() {
        window.open("https://www.linkedin.com/in/samuel-perez-0a146b24a");
    }

    return (
        <div id="contact" className="contact-section">
            <h2>Get in touch</h2>
            <div class="wave-3">
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

            <div className="contact-container">
                <div className="contact email-contact">
                    <AiOutlineMail className="icon" />
                    <ClipboardCopy copyText="fdzsamuel01@gmail.com" />
                </div>

                <div className="contact phone-contact">
                    <AiOutlineLinkedin className="icon" />
                    <p>@samuel-perez-0a146b24a</p>
                    <button className="btn-sec" onClick={handleClick}>
                        Go to site
                    </button>
                </div>

                <div className="contact phone-contact">
                    <MdOutlineSms className="icon" />
                    <ClipboardCopy copyText="+1 786 312 0650" />
                </div>
            </div>
        </div>
    );
}
