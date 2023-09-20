import React from "react";
import { fullLinksMaterials } from "../../constants";

const FullLinks = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-6">
            {fullLinksMaterials.map((icon) => {
                console.log(icon);
                return (
                    <a
                        key={icon.name}
                        href={icon.actionURL}
                        {...(icon.type == "resume"
                            ? { download: "Ashot Gharibyan Resume" }
                            : {})}
                    >
                        <img
                            className="h-auto max-h-16"
                            src={icon.image}
                            alt={icon.name}
                        />
                    </a>
                );
            })}
        </div>
    );
};

export default FullLinks;
