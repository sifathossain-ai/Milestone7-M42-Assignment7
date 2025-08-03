import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className="my-20">
            <div className="flex justify-between items-center">
                <h3 className="md:text-xl font-bold">Available Players</h3>
                <div>
                    <button className="border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg mr-2 md:mr-3">Available</button>
                    <button className="border text-[12px] py-1 px-2 md:py-2 md:px-3 rounded-lg">Selected</button>
                </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;