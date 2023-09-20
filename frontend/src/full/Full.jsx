import {
    FullContact,
    FullEducation,
    FullExperience,
    FullFooter,
    FullProjects,
    FullIntro,
    FullNavBar,
    FullLinks,
} from "./sections/index";
const Full = () => {
    return (
        <main className="textFull bg-[#0b0b0b] px-6 py-6 text-white">
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullNavBar />
            </section>
            <div className="flex h-screen gap-4 border-2 border-solid border-green-600 md:gap-2 sm:gap-1">
                <section className="w-[10%] border-2  border-solid border-red-600 px-2 py-6">
                    <FullLinks />
                </section>
                <section className="w-screen border-2 border-solid border-red-600 px-2 py-6">
                    <FullIntro />
                </section>
            </div>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullProjects />
            </section>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullExperience />
            </section>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullEducation />
            </section>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullContact />
            </section>
            <section className="border-2 border-solid border-red-600 px-2 py-6">
                <FullFooter />
            </section>
        </main>
    );
};

export default Full;
