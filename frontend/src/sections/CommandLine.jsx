import React, { useRef, useEffect, useState, useContext } from "react";
import { headerCircleIcons } from "../constants";
import { InputContext } from "../contexts/InputContext";
import CodeLine from "../components/CodeLine";
import {
    About,
    Contact,
    Education,
    Experience,
    Projects,
    Stacks,
} from "../results/index";
import Email from "../components/Email";

const CommandLine = () => {
    const {
        input,
        setInput,
        command,
        setCommand,
        inputRef,
        sentMessage,
        notSentMessage,
        setSentMessage,
        setNotSentMessage,
        inputError,
        setInputError,
        commandBlur,
        setCommandBlur,
        sendBlur,
    } = useContext(InputContext);
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        // sets the cursor to the input when page loads
        inputRef.current.focus();
    }, []);

    // setting the cursor and blur back to the inputRef
    useEffect(() => {
        if (sendBlur === false) {
            inputRef.current.focus();
            setCommandBlur(true);
        }
    }, [sendBlur]);

    useEffect(() => {
        if (commandBlur === true) {
            inputRef.current.focus();
        }
    }, [commandBlur]);
    // sets the cursor to the input when clicked somewhere else
    const handleBlur = (e) => {
        const exemptDivs = [
            "api-git",
            "news-git",
            "rps-git",
            "rps-demo",
            "tap-git",
        ];
        if (e.relatedTarget && exemptDivs.includes(e.relatedTarget.id)) {
            return; // Do nothing, let the focus move to the div
        }
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

            setInput("");
            setSentMessage("");
            setNotSentMessage("");
            // ----------------- CLEAR -----------------
            if (e.target.value.toLowerCase() === "clear") {
                setInput("");
                setCommand("");
            } else if (e.target.value.toLowerCase() === "resume") {
                // ----------------- RESUME -----------------
                setSuccessMessage(
                    "Thank you for downloading my resume! 🎉🎉🎉",
                );
                downloadFile();
            } else if (e.target.value.toLowerCase() === "github") {
                // ----------------- Github -----------------
                window.open(
                    "https://github.com/ashgharibyan",
                    "_blank",
                    "noreferrer",
                );
            } else if (e.target.value.toLowerCase() === "linked-in") {
                // ----------------- Linked-in -----------------
                window.open(
                    "https://www.linkedin.com/in/ashgharibyan/",
                    "_blank",
                    "noreferrer",
                );
            } else if (e.target.value.toLowerCase() === "contact") {
                // ----------------- Contact -----------------
                setCommandBlur(false);
                setInput(e.target.value);
            }

            setCommand(e.target.value);
            // setting the div's text to empty string
            e.target.value = "";

            // Clear the input error
            setInputError("");
            console.log("Enter pressed, current input:", input);
        }
    };

    const handleChange = (e) => {
        const maxLen = 12;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Maximum length of the command is 12 characters. Please Try Again!",
            );
        } else {
            setInput(e.target.value);
            setInputError("");
        }
    };

    return (
        <div className="flex flex-col items-start justify-start ">
            <div className="textQuery flex items-center gap-4">
                <span className="flex-none">
                    (portfolio_env) hello@guest ~ %
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                    onKeyDown={handleKeyDown}
                    onBlur={commandBlur ? handleBlur : null}
                    value={input}
                    onChange={handleChange}
                    readOnly={command === "contact" ? true : false}
                />
            </div>
            {command ? (
                command.toLowerCase() === "clear" ? (
                    ""
                ) : command.toLowerCase() === "about" ? (
                    <About />
                ) : command.toLowerCase() === "contact" ? (
                    <Email />
                ) : command.toLowerCase() === "contact info" ? (
                    <Contact />
                ) : command.toLowerCase() === "education" ? (
                    <Education />
                ) : command.toLowerCase() === "experience" ? (
                    <Experience />
                ) : command.toLowerCase() === "projects" ? (
                    <Projects />
                ) : command.toLowerCase() === "tools" ? (
                    <Stacks />
                ) : command.toLowerCase() === "technologies" ? (
                    <Stacks />
                ) : command.toLowerCase() === "resume" ? (
                    <CodeLine
                        text={successMessage}
                        extraStyles={"text-[#61C454]"}
                    />
                ) : command.toLowerCase() === "github" ? (
                    <CodeLine
                        text={
                            <a
                                href="https://github.com/ashgharibyan"
                                target="_blank"
                            >
                                Github: www.github.com/ashgharibyan
                            </a>
                        }
                        extraStyles={"text-[#61C454]"}
                    />
                ) : command.toLowerCase() === "linked-in" ? (
                    <CodeLine
                        text={
                            <a
                                href="https://www.linkedin.com/in/ashgharibyan/"
                                target="_blank"
                            >
                                Linked-in: www.linkedin.com/in/ashgharibyan/
                            </a>
                        }
                        extraStyles={"text-[#61C454]"}
                    />
                ) : (
                    <CodeLine
                        text={"Command not found"}
                        extraStyles={"text-red-500"}
                    />
                )
            ) : (
                ""
            )}
            {inputError && (
                <CodeLine text={inputError} extraStyles={"text-red-500"} />
            )}

            {sentMessage && (
                <CodeLine text={sentMessage} extraStyles={"text-green-500"} />
            )}
            {notSentMessage && (
                <CodeLine text={notSentMessage} extraStyles={"text-red-500"} />
            )}
        </div>
    );
};

export default CommandLine;
