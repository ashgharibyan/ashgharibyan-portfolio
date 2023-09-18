import { useEffect, useState } from "react";
import CodeLine from "../components/CodeLine";

const Demo = () => {
    return (
        <div>
            <CodeLine text="(base) hello@guest ~ % conda activate portfolio_env"></CodeLine>
            <CodeLine
                text="commands to type:"
                extraStyles="text-[#F4BD4F] px-6"
            ></CodeLine>
            <CodeLine
                text="about, contact, contact info, resume, experience, projects, education, linked-in, github, tools, technologies, clear"
                extraStyles="text-[#61C454] px-12"
            ></CodeLine>
        </div>
    );
};

export default Demo;
