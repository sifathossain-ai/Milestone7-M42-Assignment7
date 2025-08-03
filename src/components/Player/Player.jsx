import { HiMiniFlag } from "react-icons/hi2";
const Player = ({ player }) => {
    const { name, cover_img, profile_img, player_types, country, rating, hand, price } = player;
    console.log(player);
    return (
        <div className="border rounded-lg p-3 space-y-3">
            <img className="rounded-lg w-full h-auto" src={cover_img} alt="" />
            <div className="flex gap-3 items-center">
                <img className="w-7 h-7 object-cover rounded-full" src={profile_img} alt="" />
                <h3 className="md:text-lg font-semibold">{name}</h3>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                    <HiMiniFlag></HiMiniFlag>
                    <small>{country}</small>
                </div>
                <small className="py-1 px-2 rounded-lg bg-gray-200">{player_types}</small>
            </div>
            <hr />
            <div className="space-y-1 md:space-y-2 text-[13px] md:text-[16px] font-semibold">
                <h4>Rating: {rating}</h4>
                <div className="flex justify-between items-center">
                    <h4>Bating </h4>
                    <p className="text-gray-700 font-normal">{hand}</p>
                </div>
                <div className="flex justify-between items-center">
                    <h4>Price: $ {price} </h4>
                    <button className="border px-2 py-1 md:px-3 rounded-lg font-normal"><small>Chose Player</small></button>
                </div>
            </div>
        </div>
    );
};
export default Player;

/* 

country: "Pakistan"
cover_img: "https://i.ibb.co/4d3L1Xz/cricket-cover-1.jpg"
hand: "Right-hand"
id: 1
name: "Ayaan Haider"
player_types: "All-Rounder"
price: "$950,000"
profile_img: "https://i.ibb.co/W3MP6r6/profile-1.jpg"
rating: 8.6
 */