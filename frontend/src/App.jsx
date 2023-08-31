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
            <section className="bg-[#3F3836] px-8 py-4 text-3xl text-[#BAB3B2]">
                <Header />
            </section>
            <section className="h-screen w-screen bg-[#1e1e1e] px-8 pt-4 text-3xl text-white">
                <section className="">
                    <Demo />
                </section>
                <section className="">
                    <CommandLine />
                </section>
                <section className="">
                    <Result />
                </section>
            </section>
            <section className="px-8 ">
                <Footer />
            </section>
        </main>
    );
};

export default App;
