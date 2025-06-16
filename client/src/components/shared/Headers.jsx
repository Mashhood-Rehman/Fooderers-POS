import React from "react";
import { Images } from "../../assets/Images";
import { Icons } from "../../assets/Icons";

const Headers = () => {
    return (
        <header className="flex items-center justify-between py-4 px-6 bg-[#1a1a1a] shadow-md w-full font-sans">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
                <img src={Images.logo} className="w-24 h-24" alt="Fooderers logo" />
                <h1 className="text-xl font-semibold text-[#f5f5f5]">Fooderers</h1>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-[#2a2a2a] rounded-full px-4 py-3 w-full max-w-md">
                <Icons.Search className="text-[#f5f5f5] w-5 h-5" />
                <input
                    type="search"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-[#f5f5f5] placeholder-[#cccccc] w-full text-sm"
                />
            </div>
            <div className=" flex items-center gap-4">
                <div className=" rounded-[15px] bg-[#1f1f1f] p-3 cursor-pointer">
                    <Icons.BellDot className="text-[#f5f5f5] text-2xl" />
                </div>
                <div className=" flex items-center gap-3 cursor-pointer">
                    <Icons.CircleUserRound className="text-[#f5f5f5] size-10" />
                    <div className=" flex flex-col items-start"> <h1 className="text-md text-[#f5f5f5]">Mashhood</h1>
                        <p className="text-xs text-[#ababab]">Admin</p></div>
                </div>
            </div>
        </header>
    );
};

export default Headers;
