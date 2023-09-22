import React, { useContext } from "react";
import "../css/aboutChangingText.css";
import { FullContext } from "../../contexts/FullContext";
import "../css/scroll.css";
const FullAbout = () => {
    const { projectsRef } = useContext(FullContext);
    const handleScrollDown = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className=" text-center ">
            <div className="textFullIntroTypewriter flex items-center justify-center ">
                <h1 className="text-white">MY NAME IS</h1>&nbsp;
                <h1
                    className="text-9xl lg:text-6xl md:text-4xl sm:text-2xl"
                    id="aboutChangingText"
                >
                    <span></span>
                </h1>
            </div>
            <section
                id="about"
                className="text-whtie m-2 rounded-lg bg-black p-8 text-center shadow-lg"
            >
                <div className="space-y-4 text-lg md:text-base sm:text-sm">
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Origin:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            Armenian, now in Los Angeles, CA.
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            What I Do:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            I'm a Full Stack Developer who loves crafting
                            user-friendly websites.
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Skills:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            Proficient in Python, Java, JavaScript, HTML5, and
                            CSS.
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Experience:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            From simple websites to complex apps, I've done it
                            all.
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Traits:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            Self-starter, fast learner, and detail-oriented.
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Languages:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            English, Armenian, Russian
                        </span>
                    </p>
                    <p className="mb-2 flex items-center justify-center gap-4">
                        <span className="textFullIntroTypewriter font-bold text-[#F4BD4F]">
                            Let's Connect:
                        </span>
                        <span className="rounded-lg bg-white p-2 text-black">
                            Reach out to discuss your next project!
                        </span>
                    </p>
                </div>
            </section>
            <div
                id="scrollOrange"
                className="container_mouse white-orange"
                onClick={handleScrollDown}
            >
                <span className="mouse-btn">
                    <span className="mouse-scroll"></span>
                </span>
            </div>
        </div>
    );
};

export default FullAbout;
