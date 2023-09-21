import { FullProvider } from "../contexts/FullContext";
import FullContent from "./FullContent";

const Full = () => {
    return (
        <FullProvider>
            <FullContent />
        </FullProvider>
    );
};

export default Full;
