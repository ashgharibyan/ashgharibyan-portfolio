import React, { useRef, useEffect, useState, useContext } from "react";
import Result from "./Result";
import { headerCircleIcons } from "../constants";
import { InputContext } from "../contexts/InputContext";

const CommandLine = () => {
    const inputRef = useRef(null);
    const { input, setInput } = useContext(InputContext);
    const [inputError, setInputError] = useState("");
    const [command, setCommand] = useState("");

    useEffect(() => {
        // sets the cursor to the input when page loads
        inputRef.current.focus();
    }, []);

    // sets the cursor to the input when clicked somewhere else
    const handleBlur = () => {
        inputRef.current.focus();
    };

    // handles the downloading of the resume when command : resume is entered
    const downloadFile = () => {
        // Create a new anchor element
        const a = document.createElement("a");

        // Set the href and download attributes for the anchor element
        a.href = headerCircleIcons[1].actionURL;
        a.download = "Ashot Gharibyan Resume.pdf";

        // Append anchor to the DOM (not visible to the user)
        document.body.appendChild(a);

        // Programmatically trigger a click event on the anchor element
        a.click();

        // Remove the anchor element from the DOM
        document.body.removeChild(a);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            // ----------------- CLEAR -----------------
            setInput(e.target.innerText);
            if (e.target.innerText === "clear") {
                setInput("");
                setCommand("");
                e.target.innerText = "";
            } else if (e.target.innerText === "resume") {
                // ----------------- RESUME -----------------
                setCommand("Thank you for downloading my resume! 🎉🎉🎉");
                downloadFile();
                e.target.innerText = "";
            }

            setCommand(e.target.innerText);
            // setting the div's text to empty string
            e.target.innerText = "";
            setInput("");

            // Clear the input error
            setInputError("");
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
        setInput(e.target.innerText);
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
            <Result command={command} />
        </div>
    );
};

export default CommandLine;
