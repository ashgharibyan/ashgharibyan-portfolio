import React, { useContext } from "react";
import { InputContext } from "../contexts/InputContext";

const CircleButton = ({ color, imgURL, altText, actionURL, iconType }) => {
    const { setInput } = useContext(InputContext);

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
                {...(iconType == "clear"
                    ? { onClick: () => setInput("") }
                    : {})}
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
