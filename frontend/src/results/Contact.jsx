import CodeLine from "../components/CodeLine";

const Contact = () => {
    return (
        <div>
            <CodeLine text={"."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={".."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={"..."} extraStyles={"text-[#ED695E]"} />
            <CodeLine
                text={"--------------------CONTACT---------------------"}
                extraStyles={"text-[#ED695E]"}
            />
            <CodeLine
                text={"FEEL FREE TO REACH OUT TO ME!"}
                extraStyles={"text-[#ED695E]"}
            />
            <CodeLine
                text={"------------------------------------------------"}
                extraStyles={"text-[#73CEFB]"}
            />
            <CodeLine
                text={
                    <a href="tel:8188491298" target="_blank">
                        Phone: +1 (818)-849-1298
                    </a>
                }
                extraStyles={"text-[#73CEFB]"}
            />
            <CodeLine
                text={
                    <a href="mailto:ashghcode@gmail.com" target="_blank">
                        Email: ashghcode@gmail.com
                    </a>
                }
                extraStyles={"text-[#73CEFB]"}
            />
            <CodeLine
                text={"Location: Los Angeles, CA, USA"}
                extraStyles={"text-[#73CEFB]"}
            />
            <CodeLine
                text={"------------------------------------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={
                    <a
                        href="https://www.linkedin.com/in/ashgharibyan/"
                        target="_blank"
                    >
                        LinkedIn: www.linkedin.com/in/ashgharibyan/
                    </a>
                }
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={
                    <a href="https://github.com/ashgharibyan" target="_blank">
                        GitHub: www.github.com/ashgharibyan
                    </a>
                }
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={"------------------------------------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine text={"..."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={".."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={"."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={""} />
            <CodeLine text={""} />
        </div>
    );
};

export default Contact;
