import React from "react";

const FullExperience = () => {
    return (
        <div className="transform space-y-6 bg-white p-6 text-center transition-transform duration-500 ease-in-out ">
            <h2 className="textFullIntroTypewriter mb-4 text-2xl font-bold text-black">
                PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4">
                <div className="rounded-md bg-black p-4 text-white">
                    <h3 className="font-semibold">
                        Web Designer <br /> Independent Contractor - Los
                        Angeles, CA (2015-Present)
                    </h3>{" "}
                    &nbsp;
                    <p>
                        Designed and built 30+ websites for local businesses
                        using platforms like Wix, Shopify, and Wordpress.
                        Managed hosting and domain connections.
                    </p>
                </div>

                <div className="rounded-md bg-black p-4 text-white">
                    <h3 className="font-semibold">
                        Operational Director <br /> AB Media USA - Glendale, CA
                        (2019-2022)
                    </h3>
                    &nbsp;
                    <p>
                        Led a team managing 50+ social media pages, boosting
                        brand awareness by 30-40% yearly. Enhanced team
                        productivity by 50% with tools like ClickUp and Slack.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FullExperience;
