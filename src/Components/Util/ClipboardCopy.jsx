import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import "./ClipboardCopy.css";

export default function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
        return await navigator.clipboard.writeText(text);
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="clipboard-wrapper">
            <input type="text" value={copyText} readOnly />
            <button className="clip-btn" onClick={handleCopyClick}>
                <MdContentCopy className="clip-icon" />
                <span>{isCopied ? "Copied!" : "Copy to clipboard"}</span>
            </button>
        </div>
    );
}
