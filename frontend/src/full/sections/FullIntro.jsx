import { useContext } from "react";
import TypewriterText from "../components/TypewriterText";
import { FullContext } from "../../contexts/FullContext";

const FullIntro = () => {
    const { aboutRef } = useContext(FullContext);
    const handleScrollDown = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="textFullIntroTypewriter space-y-4 text-center md:space-y-2 sm:space-y-1">
            <h1 className="text-center ">HI,</h1>

            <div className="flex">
                <h1>I AM A </h1>
                &nbsp;
                <TypewriterText />
                &nbsp;
                <h1> DEVELOPER </h1>
            </div>

            <button
                className="bg-black text-white"
                type="button"
                onClick={handleScrollDown}
            >
                Scroll Down
            </button>
        </div>
    );
};

export default FullIntro;
