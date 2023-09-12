import CodeLine from "../components/CodeLine";

const About = () => {
    return (
        <div className="textQuery">
            <CodeLine text={"."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={".."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={"..."} extraStyles={"text-[#ED695E]"} />
            <CodeLine
                text={"--------------------ABOUT---------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={"Name: Ashot Gharibyan"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={"Full Stack Developer based in Los Angeles, CA"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={"------------------------------------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={
                    "I am a highly motivated and skilled Full Stack Developer with a passion for creating beautiful, functional and user-friendly websites. With a strong background in Python, Java, JavaScript, HTML5, CSS and various web development frameworks and libraries, I have the technical skills and experience to turn your ideas into reality. I have worked on a wide range of projects, from simple websites to complex web applications and I am always eager to learn new technologies and development methods."
                }
                extraStyles={"text-[#]"}
            />

            <CodeLine
                text={"------------------------------------------------"}
            />
            <CodeLine
                text={
                    "I have keen eye for detail and a commitment to producing high-quality work. Whether working independently or as part of a team, I am always focused on delivering projects that meet or exceed expectations."
                }
                extraStyles={"text-[#]"}
            />
            <CodeLine
                text={"------------------------------------------------"}
            />
            <CodeLine
                text={
                    "Feel free to contact me to discuss how I can bring my skills and experience to your next project."
                }
                extraStyles={"text-[#61C454]"}
            />
        </div>
    );
};

export default About;
