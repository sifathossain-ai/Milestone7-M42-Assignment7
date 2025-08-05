import Select from "../Select/Select";
import ToggleButton from "../ToggleButton/ToggleButton";

const Selected = ({ players, handleDelete }) => {
    // console.log(players);
    return (
        <div className="mt-8 mb-20">
            <div className="flex justify-between items-center">
                <h2 className="md:text-xl font-semibold">Selected Player ({players.length}/6)</h2>
            </div>
            <div className="mt-8">
                {
                    players.map((player, idx) => <Select 
                    key={idx} 
                    player={player}
                    handleDelete = {handleDelete}
                    ></Select>)
                }
            </div>
        </div>
    );
};

export default Selected;