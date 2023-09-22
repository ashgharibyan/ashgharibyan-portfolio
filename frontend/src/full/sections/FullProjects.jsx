import React, { useEffect } from "react";
import { apiofapis, newssavant, rps, tapcount } from "../../assets/images";
const FullProjects = () => {
    return (
        <div className="text-center">
            <h1 className="textFullIntroTypewriter py-8 md:py-6 sm:py-4">
                PROJECTS
            </h1>
            <div className=" grid  grid-cols-2">
                <div className="group relative">
                    <img
                        src={apiofapis}
                        alt="TheAPIofAPIsI"
                        className=" object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                            <h3 className="mb-2 font-bold">TheAPIofAPIsI</h3>
                            &nbsp;
                            <p>
                                API hub and creator with Java, Spring Boot, JSP,
                                and more.
                            </p>
                            &nbsp;
                            <div className="flex justify-around">
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="https://github.com/ashgharibyan/theapiofapis"
                                >
                                    Github
                                </a>
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="https://youtu.be/MFgXnbdvR-E?si=J2tKgL7HwyuAkjdb"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img
                        src={newssavant}
                        alt="NewsSavant AI"
                        className=" object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black  p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                            <h3 className="mb-2 font-bold">NewsSavant AI</h3>{" "}
                            &nbsp;
                            <p>
                                News search by voice using AI bot, React, and
                                Alan AI.
                            </p>{" "}
                            &nbsp;
                            <div className="flex justify-around">
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="https://github.com/ashgharibyan/news-savant"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img src={rps} alt="RPS" className=" object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black  p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                            <h3 className="mb-2 font-bold">RPS</h3>
                            &nbsp;
                            <p>
                                Multiplayer Rock, Paper, Scissors game with
                                Flask and socket.io.
                            </p>
                            &nbsp;
                            <div className="flex justify-around">
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="https://github.com/ashgharibyan/rps"
                                >
                                    Github
                                </a>
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="http://54.202.75.153/"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group relative">
                    <img
                        src={tapcount}
                        alt="TapCount"
                        className=" object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black  p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="text-center text-white">
                            <h3 className="mb-2 font-bold">TapCount</h3>
                            <p>
                                iOS game to improve concentration, built with
                                Swift.
                            </p>
                            &nbsp;
                            <div className="flex justify-around">
                                <a
                                    className="rounded-md bg-white p-1 text-black"
                                    href="https://github.com/ashgharibyan/tapCounts"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullProjects;
