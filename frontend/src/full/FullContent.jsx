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
            {/* <section className=" px-2 py-6">
                <FullNavBar />
                </section> */}

            <section className="flex h-screen items-center justify-center px-2 py-6">
                <FullIntro />
            </section>
            <section
                ref={aboutRef}
                className="flex h-screen items-center justify-center bg-black px-2 py-6 text-white sm:h-fit"
            >
                <FullAbout />
            </section>

            <section ref={projectsRef} className="">
                <FullProjects />
            </section>

            <div
                ref={expAndEdRef}
                className="flex h-screen items-center justify-between sm:h-fit sm:flex-col"
            >
                <section className="flex h-full  w-[50%] items-center justify-center  sm:w-[100%]">
                    <FullExperience />
                </section>
                <section className="flex h-full w-[50%] items-center justify-center bg-black text-white  sm:w-[100%]">
                    <FullEducation />
                </section>
            </div>

            <section ref={contactRef} className="h-screen md:h-fit ">
                <FullContact />
            </section>
            <section className="">
                <FullFooter />
            </section>
        </main>
    );
};

export default FullContent;
