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
    const [inputError, setInputError] = useState("");
    const [contactInputError, setContactInputError] = useState("");
    const [commandBlur, setCommandBlur] = useState(true);
    const [sendBlur, setSendBlur] = useState(false);

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
                inputError,
                setInputError,
                contactInputError,
                setContactInputError,
                commandBlur,
                setCommandBlur,
                sendBlur,
                setSendBlur,
            }}
        >
            {children}
        </InputContext.Provider>
    );
};
