import CodeLine from "../components/CodeLine";

const CommandLine = () => {
    return (
        <div className="flex items-center justify-start gap-4">
            <CodeLine
                text="(ashot_gharibyan_env) hello@Macbook-Pro ~ % "
                extraStyles="flex-none"
            ></CodeLine>
            <input type="text" className="textQuery grow text-[#1e1e1e]" />
        </div>
    );
};

export default CommandLine;
