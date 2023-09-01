import React, { useRef, useEffect, useState } from "react";

const CommandLine = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState("");

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

            // setting the div's text to empty string
            e.target.innerText = "";
            // Your logic here
            console.log("Enter pressed, current input:", input);
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
                ></div>
            </div>
        </div>
    );
};

export default CommandLine;
