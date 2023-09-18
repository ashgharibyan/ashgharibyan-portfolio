import emailjs from "emailjs-com";
import { useContext, useEffect, useRef, useState } from "react";
import CodeLine from "./CodeLine";
import { InputContext } from "../contexts/InputContext";

const Email = () => {
    const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const {
        nameRef,
        inputRef,
        setCommand,
        setInput,
        setSentMessage,
        setNotSentMessage,
        contactInputError,
        setContactInputError,
    } = useContext(InputContext);
    const [showName, setShowName] = useState(true);
    const [showEmail, setShowEmail] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [sendMessage, setSendMessage] = useState(false);
    const [sendYN, setSendYN] = useState("");

    const [nameBlur, setNameBlur] = useState(true);
    const [emailBlur, setEmailBlur] = useState(true);
    const [messageBlur, setMessageBlur] = useState(true);
    const [ynBlur, setYNBlur] = useState(true);

    const [goBack, setGoBack] = useState(false);
    // const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const sendRef = useRef(null);

    // Sending email
    function sendEmail(name, email, message) {
        const params = {
            user_name: name,
            user_email: email,
            user_message: message,
        };
        3;
        emailjs
            .send(
                "service_cm5zdpj",
                "template_91ah97u",
                params,
                "mairkk-goJ07o5lk2",
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSentMessage("Message sent!");
                },
                (error) => {
                    console.log("Error sending the message!");
                    console.log(error.text);
                    setContactInputError(
                        "Error sending the message! Please try again or send directly to ashghcode@gmail.com.",
                    );
                },
            );
    }

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

    const goBackToInput = () => {
        inputRef.current.focus();
    };

    const handleNameKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (name === "") {
                setContactInputError("Please enter your name!");
                nameRef.current.focus();
            } else {
                setShowEmail(true);
                setNameBlur(false);
                setContactInputError("");
            }
        }
    };

    const handleNameChange = (e) => {
        const maxLen = 15;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setContactInputError(
                "Maximum length of the name is 15 characters. Please Try Again!",
            );
        } else {
            setName(e.target.value);
            setContactInputError("");
        }
    };

    const handleEmailKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (email === "") {
                setContactInputError("Please enter your email!");
                emailRef.current.focus();
            } else if (!EMAIL_REGEX.test(email)) {
                setContactInputError("Please enter a valid email address!");
            } else {
                setContactInputError("");
                setShowMessage(true);
                setEmailBlur(false);
            }
        }
    };

    const handleEmailChange = (e) => {
        const maxLen = 30;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setContactInputError(
                "Maximum length of the email is 30 characters. Please Try Again!",
            );
        } else {
            setEmail(e.target.value);
            setContactInputError("");
        }
    };

    const handleMessageKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (message === "") {
                setContactInputError("Please enter your message!");
                messageRef.current.focus();
            } else {
                setSendMessage(true);
                setContactInputError("");
            }
        }
    };

    const handleMessageChange = (e) => {
        const maxLen = 120;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setContactInputError(
                "Maximum length of the message is 120 characters. Please Try Again!",
            );
        } else {
            setMessage(e.target.value);
            setMessageBlur(false);
            setContactInputError("");
        }
    };

    const handleSendKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents a new line from being added
            if (sendYN === "") {
                setContactInputError(
                    "Field cannot be empty! Please enter 'y' or 'n'!",
                );
                sendRef.current.focus();
            } else if (sendYN === "n") {
                setNotSentMessage("Message not sent!");
                // Resetting everything
                setContactInputError("");
                setEmail("");
                setMessage("");
                setName("");
                setShowName(false);
                setSendMessage(false);
                setShowMessage(false);
                setShowEmail(false);
                setYNBlur(false);

                setInput("");
                setCommand("");
                goBackToInput();
                setContactInputError("");
            } else if (sendYN === "y") {
                // Sending the email
                setContactInputError("");
                sendEmail(name, email, message);

                // Resetting everything
                setEmail("");
                setMessage("");
                setName("");
                setShowName(false);
                setSendMessage(false);
                setShowMessage(false);
                setShowEmail(false);
                setYNBlur(false);

                setInput("");
                setCommand("");
                setContactInputError("");
                goBackToInput();
            } else {
                setContactInputError(
                    "Please enter 'y' or 'n' to send the message!",
                );
            }
        }
    };

    const handleSendChange = (e) => {
        const maxLen = 1;
        const currentLength = e.target.value.length;

        if (currentLength > maxLen) {
            e.target.value = e.target.value.substring(0, maxLen);
            setContactInputError(
                "Please enter 'y' or 'n' to send the message. Please Try Again!",
            );
        } else if (
            e.target.value != "y" &&
            e.target.value != "n" &&
            e.target.value != ""
        ) {
            setContactInputError(
                "Please enter 'y' or 'n' to send the message. Please Try Again!",
            );
        } else {
            setSendYN(e.target.value);
            setContactInputError("");
        }
    };

    const handleContactBlur = (currentBlur) => {
        if (currentBlur === "name") {
            nameRef.current.focus();
        } else if (currentBlur === "email") {
            emailRef.current.focus();
        } else if (currentBlur === "message") {
            messageRef.current.focus();
        } else if (currentBlur === "yn") {
            sendRef.current.focus();
        }
    };

    return (
        <div>
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
                        onBlur={
                            nameBlur ? () => handleContactBlur("name") : null
                        }
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
                        onBlur={
                            emailBlur ? () => handleContactBlur("email") : null
                        }
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
                        onBlur={
                            messageBlur
                                ? () => handleContactBlur("message")
                                : null
                        }
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
                        onBlur={ynBlur ? () => handleContactBlur("yn") : null}
                    />
                </div>
            )}

            {contactInputError && (
                <CodeLine
                    text={contactInputError}
                    extraStyles={"text-red-500"}
                />
            )}
        </div>
    );
};

export default Email;
