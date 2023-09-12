import CodeLine from "../components/CodeLine";

const Education = () => {
    return (
        <div className="textQuery">
            <CodeLine text={"."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={".."} extraStyles={"text-[#ED695E]"} />
            <CodeLine text={"..."} extraStyles={"text-[#ED695E]"} />
            <CodeLine
                text={"--------------------EDUCATION---------------------"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine text={"Coding Dojo"} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine
                text={
                    "Full-Stack Developer Certificate in Python, Java, and MERN"
                }
            />
            <CodeLine text={"Los Angeles, CA | 2022-2023"} />

            <CodeLine text={""} />
            <CodeLine
                text={"----------------------------"}
                extraStyles={"text-[#ED695E]"}
            />
            <CodeLine text={""} />

            <CodeLine
                text={"Cal State University of Northridge"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine text={"Computer Science Major"} />
            <CodeLine text={"Northridge, CA | 2020-2021"} />
            <CodeLine text={""} />
            <CodeLine
                text={
                    "Relevant Coursework: Data Structures and Program Design and Lab, Computer Organization, Discrete Structures for Computer Science, Advanced Data Structures, Introduction to Operating Systems and System Architecture"
                }
            />
            <CodeLine text={""} />
            <CodeLine
                text={"----------------------------"}
                extraStyles={"text-[#ED695E]"}
            />
            <CodeLine text={""} />
            <CodeLine
                text={"Glendale Community College"}
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine text={"Computer Science Major"} />
            <CodeLine text={"Glendale, CA | 2017-2020"} />
            <CodeLine text={""} />
            <CodeLine
                text={
                    "Transferred to CSUN with 2 Associate Degrees of Math and Physics. Finished following classes: C++, Advanced C++, Computer Architecture and Assembly, Data Structures"
                }
            />
            <CodeLine text={""} />
            <CodeLine text={""} />
        </div>
    );
};

export default Education;
