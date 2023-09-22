import React, { useState } from "react";
import emailjs from "emailjs-com";

const FullContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                e.target,
                "YOUR_USER_ID",
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message. Please try again.");
                },
            );

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="flex h-full flex-col items-center justify-center bg-black">
            <h2 className="textFullIntroTypewriter mb-8 text-4xl font-bold">
                SEND ME A MESSAGE
            </h2>
            <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
                <div>
                    <label
                        className="mb-2 block text-xl font-medium"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="NAME"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label
                        className="mb-2 block text-xl font-medium"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="EMAIL"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                        required
                    />
                </div>
                <div>
                    <label
                        className="mb-2 block text-xl font-medium"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="MESSAGE"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-b-2 border-black p-4 focus:border-red-600 focus:outline-none"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="mt-8 w-full rounded-md bg-black py-4 text-white hover:bg-gray-800"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default FullContact;
