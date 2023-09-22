import React from "react";
import "../css/terminalButton.css";
import { terminalButton } from "../../assets/images/index";
import { Link } from "react-router-dom";

const TerminalButton = () => {
    return (
        <Link to="/terminal" className="topRightButton">
            <img src={terminalButton} alt="Terminal Button" />
        </Link>
    );
};

export default TerminalButton;
