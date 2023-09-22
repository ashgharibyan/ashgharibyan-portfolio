import { useLocation } from "react-router-dom";
import { FullProvider } from "../contexts/FullContext";
import FullContent from "./FullContent";
import TerminalButton from "./components/TerminalButton";
import { useEffect } from "react";

const Full = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <FullProvider>
            <TerminalButton />
            <FullContent />
        </FullProvider>
    );
};

export default Full;
