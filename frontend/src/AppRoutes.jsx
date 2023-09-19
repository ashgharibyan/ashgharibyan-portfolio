import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Full from "./full/Full";
import Terminal from "./sections/Terminal";
import NotFound from "./components/NotFound";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Terminal />} />
                <Route path="/full" element={<Full />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
