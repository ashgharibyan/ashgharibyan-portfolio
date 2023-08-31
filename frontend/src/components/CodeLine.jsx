const CodeLine = ({ text, extraStyles }) => {
    return (
        <p className={`textQuery py-1.5 ${extraStyles ? extraStyles : ""}`}>
            {text}
        </p>
    );
};

export default CodeLine;
