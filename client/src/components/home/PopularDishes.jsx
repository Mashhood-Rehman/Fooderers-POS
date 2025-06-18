import React from "react";
import { popularDishes } from "../../constants/data";
import { Images } from "../../assets/Images";

const PopularDishes = () => {
    return (
        <div className="mt-6 pr-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Popular Orders</h1>
                <a href="#" className="text-[#025cca] text-sm font-semibold">View All</a>
            </div>

            {/* Dish List */}
            <div className="mt-4 overflow-y-scroll hide-scrollbar h-[700px] flex flex-col gap-4">
                {
                    popularDishes.map((dish, index) => (
                        <div key={dish.id} className="flex items-start gap-4 bg-[#1a1a1a] p-3 rounded-lg">
                            {/* Number */}
                            <div className="w-6 flex justify-center mt-2 items-center">
                                <span className="text-white font-bold text-4xl ">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="w-16 h-16 ml-2 rounded-full overflow-hidden bg-[#333]">
                                <img
                                    src={Images.logo} // Replace with actual dish image later
                                    alt={dish.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-[#f5f5f5] text-md font-semibold">{dish.name}</h2>
                                <p className="text-[#ababab] text-sm">{dish.numberOfOrders} Orders</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularDishes;
