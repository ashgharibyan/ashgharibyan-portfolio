import { useEffect, useState } from "react";
import CodeLine from "../components/CodeLine";

const Demo = () => {
    const [lastVisit, setLastVisit] = useState("");
    useEffect(() => {
        setLastVisit(
            document.cookie.replace(
                /(?:(?:^|.*;\s*)lastVisit\s*\=\s*([^;]*).*$)|^.*$/,
                "$1",
            ),
        );
        //fix this
        if (lastVisit) {
            setLastVisit(
                `You last visited on: ${new Date(lastVisit).toLocaleString()}`,
            );
        } else {
            const now = new Date();

            // Get individual components
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const day = days[now.getDay()];
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            const month = months[now.getMonth()];
            const date = now.getDate();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            // Format the string
            const formattedDateTime = `${day} ${month} ${date} ${hours}:${minutes}:${seconds}`;
            setLastVisit(formattedDateTime);
        }

        document.cookie = `lastVisit=${new Date().toISOString()}; expires=${new Date(
            new Date().getTime() + 31536000000,
        ).toUTCString()}; path=/`;
    }, []);

    return (
        <div>
            <CodeLine text={`Last login: ${lastVisit} on ttys003`}></CodeLine>
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
