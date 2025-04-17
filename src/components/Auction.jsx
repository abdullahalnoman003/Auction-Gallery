import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Auction = ({ addToFavorites, favorites }) => {
    const [auction, setAuction] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAuction(data));
    }, []);
    const isFavorited = (id) => favorites.some(item => item.id === id);
    const handleFavoriteClick = (item) => {
        if (!isFavorited(item.id)) {
            addToFavorites(item);
            toast.success(`${item.title} added to favorites!`);
        }
    };
    return (
        <div>
            <div className="overflow-x-auto mb-8 shadow-xl rounded-xl">
                <table className="table bg-white rounded-xl">
                    <thead className="text-black text-base">
                        <tr>
                            <th className="font-semibold">Items</th>
                            <th className="font-semibold">Current Bid</th>
                            <th className="font-semibold">Time Left</th>
                            <th className="font-semibold text-center">Bid Now</th>
                        </tr>
                    </thead>
                    <tbody >
                        {auction.map(item => (
                            <tr key={item.id} className="hover:bg-gray-50 transition duration-300">
                                <td className='border-t-[1px]'>
                                    <div className="flex items-center gap-3 ">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium">{item.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold text-[#0E2954] border-t-[1px]">${item.currentBidPrice}</td>
                                <td className="font-bold text-[#0E2954] border-t-[1px]">{item.timeLeft} left</td>
                                <td className="text-center border-t-[1px]">
                                    <button
                                        onClick={() => handleFavoriteClick(item)} 
                                        disabled={isFavorited(item.id)}
                                        className={`transition duration-300 ${isFavorited(item.id) ? 'text-red-500' : 'text-gray-500'} ${isFavorited(item.id) ? 'cursor-not-allowed' : ''}`}>
                                        {isFavorited(item.id) ? (
                                            <FaHeart className=" text-xl" />
                                        ) : (
                                            <FaRegHeart className="text-gray-500 hover:text-red-500 text-xl cursor-pointer" />
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Auction;
