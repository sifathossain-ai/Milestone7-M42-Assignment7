import { useEffect, useState } from "react";
import Player from "../Player/Player";
import ToggleButton from "../ToggleButton/ToggleButton";

const Players = ({handleChosePlayers}) => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="mt-8 mb-20">
            <div className="flex justify-between items-center">
                <h3 className="md:text-xl font-bold">Available Players</h3>
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    players.map(player => <Player 
                        key={player.id} 
                        player={player}
                        handleChosePlayers={handleChosePlayers}
                        ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;