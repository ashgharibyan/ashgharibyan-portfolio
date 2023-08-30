import {
    Header,
    Footer,
    CommandLine,
    Demo,
    Result,
} from "./sections/sections.js";

const App = () => {
    return (
        <main>
            <section className="bg-[#3F3836] py-2 text-3xl text-[#BAB3B2]">
                <Header />
            </section>
            <section className="px-8 py-1 sm:px-16 sm:py-2">
                <Demo />
            </section>
            <section className="px-8 py-1 sm:px-16 sm:py-2">
                <CommandLine />
            </section>
            <section className="px-8 py-1 sm:px-16 sm:py-2">
                <Result />
            </section>
            <section className="px-8 py-1 sm:px-16 sm:py-2">
                <Footer />
            </section>
        </main>
    );
};

export default App;
