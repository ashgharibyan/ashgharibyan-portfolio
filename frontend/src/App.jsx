import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Terminal from "./sections/Terminal";

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
