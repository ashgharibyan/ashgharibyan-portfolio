import React, { useContext } from "react";
import "../css/aboutChangingText.css";
import { FullContext } from "../../contexts/FullContext";
const FullAbout = () => {
    const { projectsRef } = useContext(FullContext);
    const handleScrollDown = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="text-center">
            <div className="textFullIntroTypewriter flex items-center justify-center ">
                <h1>MY NAME IS</h1>&nbsp;
                <h1
                    className="text-9xl lg:text-6xl md:text-4xl sm:text-2xl"
                    id="aboutChangingText"
                >
                    <span></span>
                </h1>
            </div>
            <section
                id="about"
                class="m-2 rounded-lg bg-white p-8 text-center shadow-lg"
            >
                <div class="space-y-4 text-lg md:text-base sm:text-sm">
                    <p class="mb-2">
                        <span class="font-semibold">Origin:</span> Armenian, now
                        in Los Angeles, CA.
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">What I Do:</span> I'm a Full
                        Stack Developer who loves crafting user-friendly
                        websites.
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Skills:</span> Proficient in
                        Python, Java, JavaScript, HTML5, and CSS.
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Experience:</span> From
                        simple websites to complex apps, I've done it all.
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Traits:</span> Self-starter,
                        fast learner, and detail-oriented.
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Languages:</span> English,
                        Armenian, Russian
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Let's Connect:</span> Reach
                        out to discuss your next project!
                    </p>
                </div>
            </section>
            <button
                className=" bg-black text-white"
                type="button"
                onClick={handleScrollDown}
            >
                Scroll Down
            </button>
        </div>
    );
};

export default FullAbout;
