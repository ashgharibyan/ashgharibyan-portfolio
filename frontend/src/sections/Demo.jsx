import { useEffect, useState } from "react";
import CodeLine from "../components/CodeLine";

const Demo = () => {
    const [show1, setShow1] = useState(false);
    const [showCommands, setShowCommands] = useState(false);
    const [showCommands2, setShowCommands2] = useState(false);
    const [textToType, setTextToType] = useState("");
    const fullTextToType = "conda activate portfolio_env";

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow1(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let index = -1;
        const timer1 = setTimeout(() => {
            const timer = setInterval(() => {
                setTextToType((prevText) => prevText + fullTextToType[index]);
                index++;
                if (index === fullTextToType.length - 1) {
                    clearInterval(timer);
                }
            }, 100); // Speed of typing: 100ms

            return () => clearInterval(timer);
        }, 1000); // Delay before typing: 1000ms
        return () => clearTimeout(timer1);
    }, []);

    //delay commands to type
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCommands(true);
        }, 4100);
        return () => clearTimeout(timer);
    }, []);

    //delay commands
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCommands2(true);
        }, 4300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="flex gap-4">
                {show1 && <CodeLine text="(base) hello@guest ~ % "></CodeLine>}
                {<div className="textQuery py-1.5">{textToType}</div>}
            </div>
            {showCommands && (
                <CodeLine
                    text="commands to type:"
                    extraStyles="text-[#F4BD4F] px-6"
                ></CodeLine>
            )}
            {showCommands2 && (
                <CodeLine
                    text="about, contact, contact info, resume, experience, projects, education, linked-in, github, tools, technologies, clear"
                    extraStyles="text-[#61C454] px-12"
                ></CodeLine>
            )}
        </div>
    );
};

export default Demo;
