
const Player = ({ player }) => {
    const { name, cover_img } = player;
    console.log(player);
    return (
        <div className="border rounded-lg p-3 space-y-3">
            <img className="rounded-lg" src={cover_img} alt="" />
            <h3>{name}</h3>
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