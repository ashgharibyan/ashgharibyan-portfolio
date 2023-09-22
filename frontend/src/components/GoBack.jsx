import React from "react";
import "../full/css/terminalButton.css";
import { back } from "../assets/images/index";
import { Link } from "react-router-dom";

const GoBack = () => {
    return (
        <Link to="/" className="topRightButton">
            <img src={back} alt="Back Button" />
        </Link>
    );
};

export default GoBack;
