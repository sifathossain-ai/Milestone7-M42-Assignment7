
const ToggleButton = ({selectedPlayer = 0}) => {
    return (
        <div className="font-semibold">
            <button className="border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg mr-2 md:mr-3">Available</button>
            <button className="border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg">Selected ({selectedPlayer})</button>
        </div>
    );
};

export default ToggleButton;