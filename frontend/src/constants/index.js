import {
    home_folder_icon,
    clear,
    contact,
    resume,
    full_terminal,
    full_cv,
    full_linkedin,
    full_github,
} from "../assets/icons/index.js";
import AshotGharibyanResume from "../assets/documents/AshotGharibyanResume.pdf";

export const headerMaterials = [
    {
        name: "Home folder icon",
        home_folder_icon: home_folder_icon,
    },
];

export const headerCircleIcons = [
    {
        name: "Clear icon",
        color: "bg-[#ED695E]",
        image: clear,
        actionURL: "/terminal/#",
        iconType: "clear",
    },
    {
        name: "Resume icon",
        color: "bg-[#F4BD4F]",
        image: resume,
        actionURL: AshotGharibyanResume,
        iconType: "resume",
    },
    {
        name: "Contact icon",
        color: "bg-[#61C454]",
        image: contact,
        actionURL: "/terminal/#",
        iconType: "contact",
    },
];

export const fullLinksMaterials = [
    {
        name: "Terminal icon",
        image: full_terminal,
        actionURL: "/",
        type: "terminal",
    },
    {
        name: "CV icon",
        image: full_cv,
        actionURL: AshotGharibyanResume,
        type: "resume",
    },
    {
        name: "LinkedIn icon",
        image: full_linkedin,
        actionURL: "https://www.linkedin.com/in/ashgharibyan/",
        type: "link",
    },
    {
        name: "Github icon",
        image: full_github,
        actionURL: "https://github.com/ashgharibyan",
        type: "link",
    },
];
