import { useEffect, useState } from "react";
import { InputProvider } from "./contexts/InputContext.jsx";
import {
    Header,
    Footer,
    CommandLine,
    Demo,
    Result,
} from "./sections/sections.js";

const App = () => {
    const [showCommandLine, setShowCommandLine] = useState(false);

    //delay Command Line
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCommandLine(true);
        }, 4500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <InputProvider>
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

                {/* TODO 
                <section className="rounded-lg backdrop-blur-lg">
                    <Footer />
                </section> */}
            </div>
        </InputProvider>
    );
};

export default App;
