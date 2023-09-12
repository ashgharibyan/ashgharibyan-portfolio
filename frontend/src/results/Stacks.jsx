import CodeLine from "../components/CodeLine";

const Stacks = () => {
    return (
        <div className="textQuery">
            <CodeLine text={"."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={".."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={"..."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine
                text={"--------------------STACKS---------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine
                text={"-----------------------------------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />

            <CodeLine text={""} />
            <CodeLine text={""} />
        </div>
    );
};

export default Stacks;
