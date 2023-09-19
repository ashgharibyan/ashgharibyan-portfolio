import React from "react";
import { Link } from "react-router-dom";
const FullNavBar = () => {
    return (
        <div className="flex justify-between">
            <Link>ASHOT GHARIBYAN</Link>
            <div className="flex gap-16 md:gap-8 sm:gap-4">
                <Link>ABOUT</Link>
                <Link>RESUME</Link>
                <Link>CONTACT</Link>
            </div>
        </div>
    );
};

export default FullNavBar;
