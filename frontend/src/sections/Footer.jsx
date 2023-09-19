import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center gap-2 p-2">
            <Link to="/full">Go to Full Website</Link>
        </footer>
    );
};

export default Footer;
