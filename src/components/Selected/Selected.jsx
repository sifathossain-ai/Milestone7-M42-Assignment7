import Select from "../Select/Select";
import ToggleButton from "../ToggleButton/ToggleButton";

const Selected = ({ players }) => {
    // console.log(players);
    const selectedPlayer = players.length;
    return (
        <div className="my-20">
            <div className="flex justify-between items-center">
                <h2 className="md:text-xl font-semibold">Selected Player ({players.length}/6)</h2>
                <ToggleButton selectedPlayer={selectedPlayer}></ToggleButton>
            </div>
            <div className="mt-8">
                {
                    players.map((player, idx) => <Select key={idx} player={player}></Select>)
                }
            </div>
        </div>
    );
};

export default Selected;