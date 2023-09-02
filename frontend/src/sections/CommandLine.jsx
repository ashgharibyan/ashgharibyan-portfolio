import React, { useRef, useEffect, useState } from "react";
import Result from "./Result";

const CommandLine = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState("");
    const [inputError, setInputError] = useState("");

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleBlur = () => {
        inputRef.current.focus();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            setInput(e.target.innerText);
            if (e.target.innerText === "clear") {
                setInput("");
                e.target.innerText = "";
            }

            if (e.target.innerText === "home") {
                setInput("home");
                e.target.innerText = "";
            }

            // setting the div's text to empty string
            e.target.innerText = "";
            // Your logic here
            console.log("Enter pressed, current input:", input);
        }
    };

    const handleInput = (e) => {
        const maxLength = 10;
        const target = e.target;
        const currentLength = target.innerText.length;

        if (currentLength > maxLength) {
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);

            // Truncate the text
            target.innerText = target.innerText.substring(0, maxLength);

            // Clear previous ranges
            selection.removeAllRanges();

            // Restore the range, setting cursor at the end
            range.setStart(target.childNodes[0], maxLength);
            range.setEnd(target.childNodes[0], maxLength);
            selection.addRange(range);

            setInputError("Max length is 10 characters");
        } else {
            setInputError("");
        }
    };

    return (
        <div className="flex flex-col items-start justify-start ">
            <div className="textQuery flex items-center gap-4">
                <span className="flex-none">
                    (ashot_gharibyan_env) hello@Macbook-Pro ~ %
                </span>
                <div
                    ref={inputRef}
                    contentEditable={true}
                    className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none p-2 text-[#ffffff] outline-none"
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    onInput={handleInput}
                ></div>
            </div>
            <div className="text-red-500">{inputError}</div>
            <Result input={input} />
        </div>
    );
};

export default CommandLine;
