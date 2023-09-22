import React, { useState } from "react";
import emailjs from "emailjs-com";

const FullContact = () => {
    const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const [errors, setErrors] = useState("");
    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", // Clear the error for this field
        }));

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAnotherMessage = (e) => {
        e.preventDefault();
        setMessageSent(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {
            name: "",
            email: "",
            message: "",
        };

        if (!formData.name) {
            newErrors.name = "Name is required.";
        }

        if (!formData.email || !EMAIL_REGEX.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.message) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            emailjs
                .send(
                    "service_cm5zdpj",
                    "template_91ah97u",
                    formData,
                    "mairkk-goJ07o5lk2",
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setMessageSent(true);
                    },
                    (error) => {
                        console.log(error.text);
                        setMessageSent(false);
                        alert("Failed to send message. Please try again.");
                    },
                );

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <div className="flex h-full flex-col items-center justify-center bg-black">
            {messageSent ? (
                <div className="text-center">
                    <h1 className="text-9xl text-[#61C454] md:text-6xl  sm:text-4xl">
                        MESSAGE SENT!
                    </h1>

                    <div onClick={handleAnotherMessage} className="text-white">
                        SEND ANOTHER MESSAGE
                    </div>
                </div>
            ) : null}
            {messageSent === false ? (
                <div className="flex h-full flex-col items-center justify-center bg-black">
                    <h2 className="textFullIntroTypewriter mb-8 text-4xl font-bold text-white">
                        SEND ME A MESSAGE
                    </h2>
                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-xl space-y-6"
                        noValidate
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="NAME"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="EMAIL"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="MESSAGE"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                                rows="6"
                            ></textarea>
                            {errors.message && (
                                <p className="text-sm text-red-600">
                                    {errors.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="mt-8 w-full rounded-md bg-black py-4 text-white hover:bg-white hover:text-black"
                            onSubmit={handleSubmit}
                        >
                            Send
                        </button>
                    </form>{" "}
                </div>
            ) : null}

            {/* {emailError && (
                    <p className="mt-4 text-sm text-red-600">{emailError}</p>
                )} */}
        </div>
    );
};

export default FullContact;
