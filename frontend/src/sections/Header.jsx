import { useEffect, useState } from "react";
import CircleButton from "../components/CircleButton";
import { headerMaterials, headerCircleIcons } from "../constants";

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
    // }, [currentWindowWidth, currentWindowHeight]);

    const handleWindowSizeChange = () => {
        setcurrentWindowHeight(window.innerHeight);
        setcurrentWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <header className="px-3 py-1">
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-x-6 sm:gap-x-1 lg:gap-x-2">
                    {headerCircleIcons.map((icon, idx) => (
                        <CircleButton
                            key={idx}
                            color={icon.color}
                            imgURL={icon.image}
                            altText={icon.name}
                        ></CircleButton>
                    ))}
                </div>
                <div className="flex flex-1 items-center justify-center gap-3">
                    <img
                        src={headerMaterials[0].home_folder_icon}
                        alt={headerMaterials[0].name}
                        className="h-12 sm:h-5 lg:h-8"
                    />
                    <h1 className="text-inherit sm:text-sm lg:text-xl">
                        ashotgharibyan -- -zsh -- {currentWindowWidth}x
                        {currentWindowHeight}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
