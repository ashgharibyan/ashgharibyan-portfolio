import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [command, setCommand] = useState("");

    return (
        <InputContext.Provider value={{ input, setInput, command, setCommand }}>
            {children}
        </InputContext.Provider>
    );
};
