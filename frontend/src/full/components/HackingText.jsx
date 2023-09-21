import React, { useEffect } from "react";
import "../css/HackingText.css";

const HackingText = () => {
    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;

        const titleElement = document.querySelector(".title");
        const originalText = titleElement.innerText; // Store the original text

        const animateText = (event, targetText, reverse = false) => {
            let iteration = reverse ? targetText.length : 0;

            clearInterval(interval);

            interval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (reverse ? index >= iteration : index < iteration) {
                            return targetText[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (reverse ? iteration <= 0 : iteration >= targetText.length) {
                    clearInterval(interval);
                }

                iteration += reverse ? -1 / 3 : 1 / 3;
            }, 50);
        };

        titleElement.onmouseover = (event) => {
            animateText(event, event.target.getAttribute("data-value"));
        };

        titleElement.onmouseout = (event) => {
            animateText(event, originalText, true);
        };
    }, []);

    return (
        <div className=" w-auto text-6xl">
            <h1 data-value="CREATIVE DEVELOPER" className="title">
                ASHOT GHARIBYAN
            </h1>
        </div>
    );
};

export default HackingText;
