import CodeLine from "../components/CodeLine";

const Stacks = () => {
    return (
        <div className="textQuery">
            <CodeLine text={"."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={".."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine text={"..."} extraStyles={"text-[#F4BD4F]"} />
            <CodeLine
                text={
                    "--------------------TOOLS & TECHNOLOGIES---------------------"
                }
                extraStyles={"text-[#F4BD4F]"}
            />
            <CodeLine text={""} />
            <CodeLine
                text={
                    "Languages: Python, Java, JavaScript(ES6, Node.js), HTML5, CSS, SQL, Swift, C++"
                }
            />
            <CodeLine text={""} />
            <CodeLine
                text={
                    "Frameworks/Libraries: Django, Flask, Jinja2, Spring MVC, jQuery, React, Express, Tailwind, Bootstrap, JUnit"
                }
            />
            <CodeLine text={""} />
            <CodeLine text={"Databases: MySQL, MongoDB"} />
            <CodeLine text={""} />
            <CodeLine
                text={
                    "Tools: AJAX, JSON, JSP, JPA Hibernate, Socket.io, AWS(EC2), MySQL Workbench, Git, Github, Thymeleaf, Tomcat, JVM"
                }
            />
            <CodeLine text={""} />

            <CodeLine text={""} />
        </div>
    );
};

export default Stacks;
