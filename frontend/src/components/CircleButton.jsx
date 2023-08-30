const CircleButton = ({ color }) => {
    return (
        <div
            className={`box-border flex h-16 w-16 items-center justify-center rounded-full ${color}`}
        ></div>
    );
};

export default CircleButton;
