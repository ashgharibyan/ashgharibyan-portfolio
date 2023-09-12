import CodeLine from "../components/CodeLine";

const Demo = () => {
    return (
        <div>
            <CodeLine text="Last login: Thu Aug 24 17:36:47 on ttys003"></CodeLine>
            <CodeLine text="(base) hello@guest ~ % conda activate portfolio_env"></CodeLine>
            <CodeLine
                text="commands to type:"
                extraStyles="text-[#F4BD4F] px-6"
            ></CodeLine>
            <CodeLine
                text="about, contact, resume, experience, projects, education, linked-in, github, tools, technologies, clear"
                extraStyles="text-[#61C454] px-12"
            ></CodeLine>
        </div>
    );
};

export default Demo;
