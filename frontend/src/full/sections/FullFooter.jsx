import React from "react";
import { fullLinksMaterials } from "../../constants";

const FullFooter = () => {
    return (
        <footer className="bg-black py-6 text-white">
            <div className="flex items-center justify-between gap-2 px-10 text-lg md:flex-col md:text-base sm:text-sm">
                <div className="text-center">
                    <h2 className=" font-bold">Ashot Gharibyan</h2>
                    <p className="">Full Stack Developer</p>
                </div>
                <div className="flex items-center justify-center gap-6">
                    {fullLinksMaterials.map((icon) => {
                        return (
                            <a
                                key={icon.name}
                                href={icon.actionURL}
                                {...(icon.type == "resume"
                                    ? { download: "Ashot Gharibyan Resume" }
                                    : {})}
                            >
                                <img
                                    className="h-auto max-h-16 md:max-h-10 "
                                    src={icon.image}
                                    alt={icon.name}
                                />
                            </a>
                        );
                    })}
                </div>
                <div className="text-center">
                    <p>Los Angeles, CA</p>
                    <p>+1 (818) 849-1298</p>
                    <p>ashghcode@gmail.com</p>
                </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center pt-8">
                <p>&copy; 2023 Ashot Gharibyan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FullFooter;
