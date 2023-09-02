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
        <header>
            <div className="flex items-center">
                <div className="flex items-center justify-center gap-x-3 lg:gap-x-2 sm:gap-x-1">
                    {headerCircleIcons.map((icon, idx) => (
                        <CircleButton
                            key={idx}
                            color={icon.color}
                            imgURL={icon.image}
                            altText={icon.name}
                            actionURL={icon.actionURL}
                            iconType={icon.iconType}
                        ></CircleButton>
                    ))}
                </div>
                <div className="flex flex-1 items-center justify-center gap-3">
                    <img
                        src={headerMaterials[0].home_folder_icon}
                        alt={headerMaterials[0].name}
                        className="h-12 lg:h-8 sm:h-5"
                    />
                    <h1 className="textQuery">
                        ashotgharibyan -- -zsh -- {currentWindowWidth}x
                        {currentWindowHeight}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
