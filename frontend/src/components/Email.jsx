import emailjs from "emailjs-com";
import { useContext, useEffect, useRef, useState } from "react";
import CodeLine from "./CodeLine";
import { InputContext } from "../contexts/InputContext";

const Email = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { nameRef } = useContext(InputContext);
    const [inputError, setInputError] = useState("");
    const [showName, setShowName] = useState(true);
    const [showEmail, setShowEmail] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [sendMessage, setSendMessage] = useState(false);
    const [sendYN, setSendYN] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [notSentMessage, setNotSentMessage] = useState("");
    // const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const sendRef = useRef(null);
    function sendEmail(e) {}

    useEffect(() => {
        // sets the cursor to the input when page loads
        if (showName) {
            nameRef.current.focus();
        }
        if (showEmail) {
            emailRef.current.focus();
        }
        if (showMessage) {
            messageRef.current.focus();
        }
        if (sendMessage) {
            sendRef.current.focus();
        }
    }, [showEmail, showMessage, sendMessage]);

    const handleNameKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (name === "") {
                setInputError("Please enter your name!");
                nameRef.current.focus();
            } else {
                setShowEmail(true);
            }
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

    const handleEmailKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (email === "") {
                setInputError("Please enter your email!");
                emailRef.current.focus();
            } else {
                setShowMessage(true);
            }
        }
    };

    const handleEmailChange = (e) => {
        const maxLen = 30;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Maximum length of the email is 30 characters. Please Try Again!",
            );
        } else {
            setEmail(e.target.value);
            setInputError("");
        }
    };

    const handleMessageKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (message === "") {
                setInputError("Please enter your message!");
                messageRef.current.focus();
            } else {
                setSendMessage(true);
            }
        }
    };

    const handleMessageChange = (e) => {
        const maxLen = 30;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Maximum length of the message is 30 characters. Please Try Again!",
            );
        } else {
            setMessage(e.target.value);
            setInputError("");
        }
    };

    const handleSendKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (sendYN === "") {
                setInputError(
                    "Field cannot be empty! Please enter 'y' or 'n'!",
                );
                sendRef.current.focus();
            } else if (sendYN === "n") {
                setNotSentMessage("Message not sent!");
                setEmail("");
                setMessage("");
                setName("");
                setShowName(false);
                setSendMessage(false);
                setShowMessage(false);
                setShowEmail(false);
            } else if (sendYN === "y") {
                setSuccessMessage("Message sent!");
                const messageParams = {
                    name: name,
                    email: email,
                    message: message,
                };
                setEmail("");
                setMessage("");
                setName("");
                setShowName(false);
                setSendMessage(false);
                setShowMessage(false);
                setShowEmail(false);
            } else {
                setInputError("Please enter 'y' or 'n' to send the message!");
            }
        }
    };

    const handleSendChange = (e) => {
        const maxLen = 1;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setInputError(
                "Please enter 'y' or 'n' to send the message. Please Try Again!",
            );
        } else if (
            e.target.value != "y" &&
            e.target.value != "n" &&
            e.target.value != ""
        ) {
            setInputError(
                "Please enter 'y' or 'n' to send the message. Please Try Again!",
            );
        } else {
            setSendYN(e.target.value);
            setInputError("");
        }
    };

    return (
        <div>
            <CodeLine text={""} />
            {showName && (
                <div className="textQuery flex items-center gap-4">
                    <span className="flex-none">Please enter your name:</span>
                    <input
                        ref={nameRef}
                        type="text"
                        className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                        onKeyDown={handleNameKeyDown}
                        value={name}
                        onChange={handleNameChange}
                        readOnly={showEmail ? true : false}
                    />
                </div>
            )}

            {showEmail && (
                <div className="textQuery flex items-center gap-4">
                    <span className="flex-none">Please enter your email:</span>
                    <input
                        ref={emailRef}
                        type="text"
                        className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                        onKeyDown={handleEmailKeyDown}
                        value={email}
                        onChange={handleEmailChange}
                        readOnly={showMessage ? true : false}
                    />
                </div>
            )}

            {showMessage && (
                <div className="textQuery flex items-center gap-4">
                    <span className="flex-none">
                        Please enter your message:
                    </span>
                    <input
                        ref={messageRef}
                        type="text"
                        className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                        onKeyDown={handleMessageKeyDown}
                        value={message}
                        onChange={handleMessageChange}
                        readOnly={sendMessage ? true : false}
                    />
                </div>
            )}

            {sendMessage && (
                <div className="textQuery flex items-center gap-4">
                    <span className="flex-none">Send the message? (y/n):</span>
                    <input
                        ref={sendRef}
                        type="text"
                        className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                        onKeyDown={handleSendKeyDown}
                        value={sendYN}
                        onChange={handleSendChange}
                    />
                </div>
            )}

            {inputError && (
                <CodeLine text={inputError} extraStyles={"text-red-500"} />
            )}
            {successMessage && (
                <CodeLine
                    text={successMessage}
                    extraStyles={"text-green-500"}
                />
            )}
            {notSentMessage && (
                <CodeLine text={notSentMessage} extraStyles={"text-red-500"} />
            )}
        </div>
    );
};

export default Email;
