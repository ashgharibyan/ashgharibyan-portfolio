import React from "react";

const FullEducation = () => {
    return (
        <div className="transform space-y-6 bg-black p-6 text-center text-white transition-transform duration-500 ease-in-out ">
            <h2 className="textFullIntroTypewriter mb-4 font-bold">
                EDUCATION
            </h2>

            <div className="space-y-4">
                <div className="rounded-md bg-white p-4 text-black">
                    <h3 className="font-semibold">
                        Coding Dojo - Los Angeles, CA (2022-2023)
                    </h3>
                    &nbsp;
                    <p>
                        Received a Full-Stack Developer Certificate,
                        specializing in Python, Java, and MERN stack.
                    </p>
                </div>

                <div className="rounded-md bg-white p-4 text-black">
                    <h3 className="font-semibold">
                        Cal State University of Northridge - Northridge, CA
                        (2020-2021)
                    </h3>
                    &nbsp;
                    <p>
                        Studied Computer Science with a focus on advanced data
                        structures, OS, and system architecture.
                    </p>
                </div>

                <div className="rounded-md bg-white p-4 text-black">
                    <h3 className="font-semibold">
                        Glendale Community College - Glendale, CA (2017-2020)
                    </h3>
                    &nbsp;
                    <p>
                        Transferred to CSUN with degrees in Math and Physics
                        after completing courses in C++ and Data Structures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FullEducation;
