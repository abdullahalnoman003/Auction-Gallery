import React from "react";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favourite = ({ favorites, removeFromFavorites }) => {
    const totalPrice = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);

    const handleRemove = (id, title) => {
        removeFromFavorites(id);
        toast.error(`${title} removed from favorites!`);
    };

    return (
        <div className=" bg-white p-4 rounded-xl shadow-xl">
            <h2 className=" text-xl font-semibold pb-4 mb-4  flex items-center justify-center gap-3 border-b-[1px] border-gray-200">
                <FaRegHeart className="text-gray-500 text-xl" />Favorite Items</h2>

            {favorites.length === 0 ? (
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <p className="font-semibold text-lg text-black pt-4 pb-4">No favorite items yet</p>
                    <p className=" text-sm text-gray text-center pb-2  border-b-[1px] border-gray-200">Click the heart icon on any item to add it to your favorites</p>
                    <p className="font-semibold text-lg text-black"> <span className="pr-20">Total bids Amount:</span><span className="text-black">$0000</span></p>
                </div> ) : ( <div className="table">
                    <ul>
                        {favorites.map(item => (
                            <li key={item.id} className="flex justify-between items-center pb-3 hover:bg-gray-50 transition duration-300 border-b-[1px] border-[1px] rounded-2xl p-2 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className=" rounded-2xl w-14 h-14 border-[1px]">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold">{item.title}</span>
                                        <p className="font-semibold">
                                            ${item.currentBidPrice} Bids: {item.bidsCount}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => handleRemove(item.id, item.title)}>
                                        <FaTimes className="cursor-pointer hover:text-red-600" />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="font-semibold text-xl pl-4 pr-4 pt-4 pb-2 border-t-[1px] border-gray-200">
                        <span className="pr-20">Total Bids Amount: </span> ${totalPrice}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Favourite;
