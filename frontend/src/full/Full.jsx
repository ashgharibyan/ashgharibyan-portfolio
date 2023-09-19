import {
    FullContact,
    FullEducation,
    FullExperience,
    FullFooter,
    FullProjects,
    FullIntro,
    FullNavBar,
} from "./sections/index";

const Full = () => {
    return (
        <main>
            <section>
                <FullNavBar />
            </section>
            <section>
                <FullIntro />
            </section>
            <section>
                <FullProjects />
            </section>
            <section>
                <FullExperience />
            </section>
            <section>
                <FullEducation />
            </section>
            <section>
                <FullContact />
            </section>
            <section>
                <FullFooter />
            </section>
        </main>
    );
};

export default Full;
