import React, { useRef, useEffect, useState, useContext } from "react";
import Result from "./Result";
import { headerCircleIcons } from "../constants";
import { InputContext } from "../contexts/InputContext";
import About from "../results/About";
import Contact from "../results/Contact";
import CodeLine from "../components/CodeLine";

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
            setInput(e.target.value);
            if (e.target.value === "clear") {
                setInput("");
                setCommand("");
                e.target.value = "";
            } else if (e.target.value === "resume") {
                // ----------------- RESUME -----------------
                setCommand("Thank you for downloading my resume! 🎉🎉🎉");
                downloadFile();
                e.target.value = "";
            }

            setCommand(e.target.value);
            // setting the div's text to empty string
            e.target.value = "";
            setInput("");

            // Clear the input error
            setInputError("");
            console.log("Enter pressed, current input:", input);
        }
    };

    const handleChange = (e) => {
        const maxLen = 10;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Maximum length of the command is 10 characters. Please Try Again!",
            );
        } else {
            setInput(e.target.value);
            setInputError("");
        }
    };

    const handleCommandError = () => {
        setInputError("Command not found");
        setCommand("");
    };

    return (
        <div className="flex flex-col items-start justify-start ">
            <div className="textQuery flex items-center gap-4">
                <span className="flex-none">
                    (ashot_gharibyan_env) hello@Macbook-Pro ~ %
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                    onKeyDown={handleKeyDown}
                    onBlur={handleBlur}
                    value={input}
                    onChange={handleChange}
                />
            </div>
            {command ? (
                command === "help" ? (
                    <p>help</p>
                ) : command.toLowerCase() === "about" ? (
                    <About />
                ) : command.toLowerCase() === "contact" ? (
                    <Contact />
                ) : (
                    handleCommandError()
                )
            ) : (
                ""
            )}
            <CodeLine text={inputError} extraStyles={"text-red-500"} />
        </div>
    );
};

export default CommandLine;
