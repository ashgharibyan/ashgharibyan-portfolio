import React, { useEffect } from "react";
import { apiofapis, newssavant, rps, tapcount } from "../../assets/images";
const FullProjects = () => {
    return (
        <div className=" grid h-screen w-screen grid-cols-2 gap-4">
            <div className="group relative">
                <img
                    src={apiofapis}
                    alt="TheAPIofAPIsI"
                    className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <h3 className="mb-2 font-bold">TheAPIofAPIsI</h3>
                        <p>
                            API hub and creator with Java, Spring Boot, JSP, and
                            more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="group relative">
                <img
                    src={newssavant}
                    alt="NewsSavant AI"
                    className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <h3 className="mb-2 font-bold">NewsSavant AI</h3>
                        <p>
                            News search by voice using AI bot, React, and Alan
                            AI.
                        </p>
                    </div>
                </div>
            </div>

            <div className="group relative">
                <img
                    src={rps}
                    alt="RPS"
                    className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <h3 className="mb-2 font-bold">RPS</h3>
                        <p>
                            Multiplayer Rock, Paper, Scissors game with Flask
                            and socket.io.
                        </p>
                    </div>
                </div>
            </div>

            <div className="group relative">
                <img
                    src={tapcount}
                    alt="TapCount"
                    className="h-[100%] w-[100%] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                        <h3 className="mb-2 font-bold">TapCount</h3>
                        <p>
                            iOS game to improve concentration, built with Swift.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullProjects;
