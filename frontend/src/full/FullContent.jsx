import {
    FullContact,
    FullEducation,
    FullExperience,
    FullFooter,
    FullProjects,
    FullIntro,
    FullNavBar,
    FullLinks,
    FullAbout,
} from "./sections/index";
import { FullContext } from "../contexts/FullContext";
import { useContext } from "react";

const FullContent = () => {
    const { aboutRef, projectsRef, expAndEdRef, contactRef } =
        useContext(FullContext);

    return (
        <main className="textFull bg-[#ffffff] text-black">
            {/* <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullNavBar />
                </section> */}

            <section className="flex h-screen items-center justify-center border-2 border-solid border-red-600 px-2 py-6">
                <FullIntro />
            </section>
            <section
                ref={aboutRef}
                className="flex h-screen items-center justify-center border-2 border-solid border-red-600 px-2 py-6"
            >
                <FullAbout />
            </section>

            <section ref={projectsRef} className="h-screen w-screen">
                <FullProjects />
            </section>
            <div
                ref={expAndEdRef}
                className="flex h-screen justify-between border-2 border-solid border-blue-600 px-2 py-6"
            >
                <section className="w-[50%] border-2 border-solid border-red-600 ">
                    <FullExperience />
                </section>
                <section className="w-[50%] border-2 border-solid border-red-600">
                    <FullEducation />
                </section>
            </div>
            <section
                ref={contactRef}
                className="h-screen border-2 border-solid border-red-600 px-2 py-6"
            >
                <FullContact />
            </section>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullFooter />
            </section>
        </main>
    );
};

export default FullContent;
