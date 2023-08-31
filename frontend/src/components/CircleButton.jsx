const CircleButton = ({ color, imgURL, altText }) => {
    return (
        <div
            className={`group box-border flex h-16 w-16 items-center justify-center rounded-full sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${color}`}
        >
            <a href="#" className="invisible group-hover:visible">
                <img
                    className=" h-10 w-10 object-scale-down sm:h-4 sm:w-4 lg:h-6 lg:w-6"
                    src={imgURL}
                    alt={altText}
                />
            </a>
        </div>
    );
};

export default CircleButton;
