import React, { useContext } from "react";
import { InputContext } from "../contexts/InputContext";

const CircleButton = ({ color, imgURL, altText, actionURL, iconType }) => {
    const {
        setInput,
        setCommand,
        setSentMessage,
        setNotSentMessage,
        setInputError,
        setContactInputError,
    } = useContext(InputContext);

    const handleClear = () => {
        setInput("");
        setCommand("");
        setNotSentMessage("");
        setSentMessage("");
        setInputError("");
        setContactInputError("");
    };

    const handleContact = () => {
        setCommand("contact");
        setInput("contact");
        setNotSentMessage("");
        setSentMessage("");
        setInputError("");
        setContactInputError("");
    };

    return (
        <div
            className={`group box-border flex h-16 w-16 items-center justify-center rounded-full lg:h-8 lg:w-8 sm:h-6 sm:w-6 ${color}`}
        >
            <a
                href={actionURL}
                className="invisible group-hover:visible"
                {...(iconType == "resume"
                    ? { download: "Ashot Gharibyan Resume" }
                    : {})}
                {...(iconType == "clear" ? { onClick: handleClear } : {})}
                {...(iconType == "contact" ? { onClick: handleContact } : {})}
            >
                <img
                    className=" h-10 w-10 object-scale-down lg:h-6 lg:w-6 sm:h-4 sm:w-4"
                    src={imgURL}
                    alt={altText}
                />
            </a>
        </div>
    );
};

export default CircleButton;
