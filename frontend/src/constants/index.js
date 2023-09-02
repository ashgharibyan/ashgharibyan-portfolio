import { home_folder_icon, clear, contact, resume } from "../assets/icons";
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
        actionURL: "/#",
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
        actionURL: "/#",
        iconType: "contact",
    },
];
