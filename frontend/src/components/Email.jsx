import emailjs from "emailjs-com";
import { useContext, useEffect, useState } from "react";
import CodeLine from "./CodeLine";
import { InputContext } from "../contexts/InputContext";

const Email = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { nameRef } = useContext(InputContext);
    function sendEmail(e) {}

    useEffect(() => {
        // sets the cursor to the input when page loads
        nameRef.current.focus();
    }, []);

    return (
        <div>
            <CodeLine text={""} />
            <div className="textQuery flex items-center gap-4">
                <span className="flex-none">Please enter your name:</span>
                <input
                    ref={nameRef}
                    type="text"
                    className="textQuery min-w-0 flex-grow whitespace-pre-wrap  break-words rounded border-none bg-[#1e1e1e] p-2 text-[white] outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Email;
