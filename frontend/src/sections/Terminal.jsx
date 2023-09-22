import React from "react";
import { useEffect, useState } from "react";
import { InputProvider } from "../contexts/InputContext";
import {
    Header,
    Footer,
    CommandLine,
    Demo,
    Result,
} from "../sections/sections.js";
import { useLocation } from "react-router-dom";
import GoBack from "../components/GoBack";

const Terminal = () => {
    const [showCommandLine, setShowCommandLine] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    //delay Command Line
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCommandLine(true);
        }, 4500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <InputProvider>
            <GoBack />
            <div className="bg-[#1e1e1e]">
                <main>
                    <section className="bg-[#3F3836] px-8 py-4 text-3xl text-[#BAB3B2]">
                        <Header />
                    </section>
                    <section className="max-h-fit min-h-screen bg-[#1e1e1e] px-8 py-10 pt-4 text-3xl text-white">
                        <section className="">
                            <Demo />
                        </section>
                        {showCommandLine && (
                            <section className="">
                                <CommandLine />
                            </section>
                        )}
                    </section>
                </main>

                <section className="rounded-lg backdrop-blur-lg">
                    <Footer />
                </section>
            </div>
        </InputProvider>
    );
};

export default Terminal;
