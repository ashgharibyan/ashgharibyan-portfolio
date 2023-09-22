import React, { useEffect, useState } from "react";
import "../css/typewriterText.css";

const TypewriterText = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const dataText = ["FRONT-END", "BACK-END", "FULL-STACK"];

    useEffect(() => {
        if (charIndex < dataText[textIndex].length) {
            const timer = setTimeout(() => {
                setCurrentText((prev) => prev + dataText[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [textIndex, charIndex, dataText]);

    useEffect(() => {
        if (charIndex === dataText[textIndex].length) {
            const timer = setTimeout(() => {
                setCurrentText("");
                setCharIndex(0);
                setTextIndex((prev) => (prev + 1) % dataText.length);
            }, 700);

            return () => clearTimeout(timer);
        }
    }, [textIndex, charIndex, dataText]);

    return (
        <h1 id="typewriter" className="text-red-500">
            {currentText}
            <span aria-hidden="true"></span>
        </h1>
    );
};

export default TypewriterText;
