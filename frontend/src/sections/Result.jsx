import CodeLine from "../components/CodeLine";

const Result = ({ command }) => {
    return (
        <div>
            <CodeLine text={command}></CodeLine>
        </div>
    );
};

export default Result;
