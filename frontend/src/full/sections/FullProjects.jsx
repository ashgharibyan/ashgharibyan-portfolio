import React, { useEffect } from "react";

const FullProjects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        // <section class="bg-white p-8">
        //     <h2 class="mb-6 text-center text-3xl font-bold">My Projects</h2>
        //     <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        //         <div class="rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        //             <h3 class="mb-3 text-xl font-semibold">TheAPIofAPIsI</h3>
        //             <p class="mb-2 text-sm">
        //                 <span class="font-medium">Role:</span> Full Stack
        //                 Developer
        //             </p>
        //             <p class="mb-2 text-sm">
        //                 API hub and creator using Java, Spring Boot, JSP, MySQL,
        //                 and more.
        //             </p>
        //             <a href="github" class="text-blue-500 hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>

        //         <div class="rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        //             <h3 class="mb-3 text-xl font-semibold">NewsSavant AI</h3>
        //             <p class="mb-2 text-sm">
        //                 <span class="font-medium">Role:</span> Full Stack
        //                 Developer
        //             </p>
        //             <p class="mb-2 text-sm">
        //                 News search by voice using AI bot, React, Alan AI,
        //                 Material UI, and News API.
        //             </p>
        //             <a href="github" class="text-blue-500 hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>

        //         <div class="rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        //             <h3 class="mb-3 text-xl font-semibold">RPS</h3>
        //             <p class="mb-2 text-sm">
        //                 <span class="font-medium">Role:</span> Full Stack
        //                 Developer
        //             </p>
        //             <p class="mb-2 text-sm">
        //                 Multiplayer Rock, Paper, Scissors game using Flask,
        //                 Python, and socket.io.
        //             </p>
        //             <a href="github" class="text-blue-500 hover:underline">
        //                 View on GitHub
        //             </a>{" "}
        //             |{" "}
        //             <a href="live" class="text-blue-500 hover:underline">
        //                 Live Demo
        //             </a>
        //         </div>

        //         <div class="rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
        //             <h3 class="mb-3 text-xl font-semibold">TapCount</h3>
        //             <p class="mb-2 text-sm">
        //                 <span class="font-medium">Role:</span> Swift Developer
        //             </p>
        //             <p class="mb-2 text-sm">
        //                 iOS game to improve concentration using Swift.
        //             </p>
        //             <a href="github" class="text-blue-500 hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>
        //     </div>
        // </section>
        // <section class="h-full overflow-y-auto bg-black p-4 text-white">
        //     <h2
        //         class="mb-6 text-center text-3xl font-bold"
        //         data-aos="fade-down"
        //     >
        //         My Projects
        //     </h2>
        //     <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        //         <div
        //             class="flex flex-col items-center rounded-lg border-2 border-white p-4"
        //             data-aos="fade-up"
        //             data-aos-delay="100"
        //         >
        //             <img
        //                 src="path_to_image1.jpg"
        //                 alt="Project Image"
        //                 class="mb-4 h-32 w-32 rounded object-cover md:h-48 md:w-48"
        //             />
        //             <h3 class="mb-2 text-xl font-semibold">TheAPIofAPIsI</h3>
        //             <p class="mb-2 text-sm">
        //                 API hub and creator using Java, Spring Boot, JSP, MySQL,
        //                 and more.
        //             </p>
        //             <a href="github" class="text-white hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>

        //         <div
        //             class="flex flex-col items-center rounded-lg border-2 border-white p-4"
        //             data-aos="fade-up"
        //             data-aos-delay="200"
        //         >
        //             <img
        //                 src="path_to_image2.jpg"
        //                 alt="Project Image"
        //                 class="mb-4 h-32 w-32 rounded object-cover md:h-48 md:w-48"
        //             />
        //             <h3 class="mb-2 text-xl font-semibold">NewsSavant AI</h3>
        //             <p class="mb-2 text-sm">
        //                 News search by voice using AI bot, React, Javascript,
        //                 and more.
        //             </p>
        //             <a href="github" class="text-white hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>

        //         <div
        //             class="flex flex-col items-center rounded-lg border-2 border-white p-4"
        //             data-aos="fade-up"
        //             data-aos-delay="300"
        //         >
        //             <img
        //                 src="path_to_image3.jpg"
        //                 alt="Project Image"
        //                 class="mb-4 h-32 w-32 rounded object-cover md:h-48 md:w-48"
        //             />
        //             <h3 class="mb-2 text-xl font-semibold">RPS</h3>
        //             <p class="mb-2 text-sm">
        //                 Multiplayer Rock, Paper, Scissors game using Flask,
        //                 python, and socket.io.
        //             </p>
        //             <a href="github" class="text-white hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>

        //         <div
        //             class="flex flex-col items-center rounded-lg border-2 border-white p-4"
        //             data-aos="fade-up"
        //             data-aos-delay="400"
        //         >
        //             <img
        //                 src="path_to_image4.jpg"
        //                 alt="Project Image"
        //                 class="mb-4 h-32 w-32 rounded object-cover md:h-48 md:w-48"
        //             />
        //             <h3 class="mb-2 text-xl font-semibold">TapCount</h3>
        //             <p class="mb-2 text-sm">
        //                 iOS game that challenges the user to tap on a designated
        //                 area.
        //             </p>
        //             <a href="github" class="text-white hover:underline">
        //                 View on GitHub
        //             </a>
        //         </div>
        //     </div>
        // </section>
        <div class="grid grid-cols-2 gap-4">
            <div class="group relative">
                <img
                    src="path_to_image1.jpg"
                    alt="Project 1"
                    class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div class="text-center text-white">
                        <h3 class="mb-2 font-bold">Project 1</h3>
                        <p>Short description for Project 1.</p>
                    </div>
                </div>
            </div>

            <div class="group relative">
                <img
                    src="path_to_image2.jpg"
                    alt="Project 2"
                    class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div class="text-center text-white">
                        <h3 class="mb-2 font-bold">Project 2</h3>
                        <p>Short description for Project 2.</p>
                    </div>
                </div>
            </div>

            <div class="group relative">
                <img
                    src="path_to_image3.jpg"
                    alt="Project 3"
                    class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div class="text-center text-white">
                        <h3 class="mb-2 font-bold">Project 3</h3>
                        <p>Short description for Project 3.</p>
                    </div>
                </div>
            </div>

            <div class="group relative">
                <img
                    src="path_to_image4.jpg"
                    alt="Project 4"
                    class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div class="text-center text-white">
                        <h3 class="mb-2 font-bold">Project 4</h3>
                        <p>Short description for Project 4.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullProjects;
