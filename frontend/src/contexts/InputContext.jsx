import React, { createContext, useRef, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [command, setCommand] = useState("");
    const nameRef = useRef(null);

    return (
        <InputContext.Provider
            value={{ input, setInput, command, setCommand, nameRef }}
        >
            {children}
        </InputContext.Provider>
    );
};
