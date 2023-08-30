import { useEffect, useState } from "react";
import CircleButton from "../components/CircleButton";
import { headerMaterials } from "../constants";

const Header = () => {
    const [currentWindowWidth, setcurrentWindowWidth] = useState(
        window.innerWidth,
    );
    const [currentWindowHeight, setcurrentWindowHeight] = useState(
        window.innerHeight,
    );

    // useEffect(() => {
    //     setcurrentWindowHeight(window.innerHeight);
    //     setcurrentWindowWidth(window.innerWidth);
    // }, [window.innerHeight, window.innerWidth]);

    const handleWindowSizeChange = () => {
        setcurrentWindowHeight(window.innerHeight);
        setcurrentWindowWidth(window.innerWidth);
    };

    // call your useEffect
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <header className="px-3 py-1">
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-x-6">
                    <CircleButton color={"bg-[#ED695E]"}></CircleButton>
                    <CircleButton color={"bg-[#F4BD4F]"}></CircleButton>
                    <CircleButton color={"bg-[#61C454]"}></CircleButton>
                </div>
                <div className="flex flex-1 items-center justify-center gap-3">
                    <img
                        src={headerMaterials[0].home_folder_icon}
                        alt={headerMaterials[0].name}
                        className="h-12"
                    />
                    <h1>
                        ashotgharibyan -- -zsh -- {currentWindowWidth}x
                        {currentWindowHeight}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
