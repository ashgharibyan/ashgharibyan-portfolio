import { FullProvider } from "../contexts/FullContext";
import FullContent from "./FullContent";
import TerminalButton from "./components/TerminalButton";

const Full = () => {
    return (
        <FullProvider>
            <TerminalButton />
            <FullContent />
        </FullProvider>
    );
};

export default Full;
