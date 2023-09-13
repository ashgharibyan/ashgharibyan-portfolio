import emailjs from "emailjs-com";
import { useContext, useEffect, useState } from "react";
import CodeLine from "./CodeLine";
import { InputContext } from "../contexts/InputContext";

const Email = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { nameRef } = useContext(InputContext);
    const [inputError, setInputError] = useState("");

    function sendEmail(e) {}

    useEffect(() => {
        // sets the cursor to the input when page loads
        nameRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
        }
    };

    const handleNameChange = (e) => {
        const maxLen = 15;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Maximum length of the name is 15 characters. Please Try Again!",
            );
        } else {
            setName(e.target.value);
            setInputError("");
        }
    };

    return (
        <div>
            <CodeLine text={""} />
            <div className="textQuery flex items-center gap-4">
                <span className="flex-none">Please enter your name:</span>
                <input
                    ref={nameRef}
                    type="text"
                    className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                    onKeyDown={handleKeyDown}
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <CodeLine text={inputError} extraStyles={"text-red-500"} />
        </div>
    );
};

export default Email;
