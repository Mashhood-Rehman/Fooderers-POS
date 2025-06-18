import React from "react";
import { Icons } from "../../assets/Icons";

const OrderList = () => {
    return (
        <div className="flex items-center justify-between bg-[#1a1a1a] text-white p-5 rounded-xl shadow-lg w-full">

            {/* Left: Name and Items */}
            <div className=" flex items-center space-x-2">

                <button className="bg-orange-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center">
                    AM
                </button>
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold tracking-wide">Mashhood</h2>
                    <p className="text-sm text-[#ababab]">10 Items</p>
                </div>
            </div>

            {/* Center: Table Number */}
            <div>
                <span className="text-orange-500 font-semibold border border-[#f6b100] rounded-md px-3 py-1 text-sm">
                    Table No. 3
                </span>
            </div>

            {/* Right: Status */}
            <div className="flex flex-col items-end gap-1">
                <p className="text-green-500 text-sm flex items-center gap-1">
                    <Icons.CheckCheck className="text-lg" />
                    Ready
                </p>
                <p className="text-[#ababab] text-sm flex items-center gap-1">
                    <Icons.CircleCheckBig className="text-green-500 text-lg" />
                    Ready to Serve
                </p>
            </div>
        </div>
    );
};

export default OrderList;
