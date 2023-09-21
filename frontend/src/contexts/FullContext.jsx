import React, { createContext, useRef } from "react";

export const FullContext = createContext();

export const FullProvider = ({ children }) => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const expAndEdRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <FullContext.Provider
            value={{ aboutRef, projectsRef, expAndEdRef, contactRef }}
        >
            {children}
        </FullContext.Provider>
    );
};
