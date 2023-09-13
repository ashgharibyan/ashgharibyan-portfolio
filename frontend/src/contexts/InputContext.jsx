import React, { createContext, useRef, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [command, setCommand] = useState("");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const sendRef = useRef(null);

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
            }}
        >
            {children}
        </InputContext.Provider>
    );
};
