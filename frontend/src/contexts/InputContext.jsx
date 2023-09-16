import React, { createContext, useRef, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [command, setCommand] = useState("");
    const inputRef = useRef(null);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const sendRef = useRef(null);
    const [isContact, setIsContact] = useState(false);
    const [sentMessage, setSentMessage] = useState("");
    const [notSentMessage, setNotSentMessage] = useState("");
    return (
        <InputContext.Provider
            value={{
                input,
                setInput,
                command,
                setCommand,
                nameRef,
                emailRef,
                messageRef,
                sendRef,
                inputRef,
                isContact,
                setIsContact,
                sentMessage,
                setSentMessage,
                notSentMessage,
                setNotSentMessage,
            }}
        >
            {children}
        </InputContext.Provider>
    );
};
