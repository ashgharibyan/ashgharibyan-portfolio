import React from "react";
import "../full/css/notFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <p>Oops! Page not found.</p>
                <a href="/">Go Home</a>
            </div>
        </div>
    );
};

export default NotFound;
