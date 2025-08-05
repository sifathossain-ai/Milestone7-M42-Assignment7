import { RiDeleteBin6Line } from "react-icons/ri";
const Select = ({ player, handleDelete }) => {
    const { profile_img, name, hand, id } = player;
    console.log(player);
    return (
        <div className="mb-3">
            <div className="border rounded-lg p-3 flex justify-between">
                <div className="flex gap-3 items-center">
                    <img className="w-14 h-14 object-cover rounded-lg" src={profile_img} alt="" />
                    <div>
                        <h3 className="md:text-lg font-semibold">{name}</h3>
                        <small className="text-gray-500">{hand}</small>
                    </div>
                </div>
                <button onClick={() => handleDelete(id)} className="text-red-400"><RiDeleteBin6Line></RiDeleteBin6Line></button>
            </div>
        </div>
    );
};

export default Select;