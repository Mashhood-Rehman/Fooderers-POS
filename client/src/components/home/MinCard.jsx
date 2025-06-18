import React from "react";
const MinCard = ({ icon, title, number, footerNum }) => {
    return (
        <div className="bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]">
            <div className=" flex items-start justify-between">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">{title}</h1>
                <button className={`${title === "Total Earnings" ? 'bg-[#02ca3a]' : 'bg-orange-500'} p-3 rounded-lg text-[#f5f5f5] text-2xl`}>{icon}</button>
            </div>
            <div>
                <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">{number}</h1>
                <h1 className="text-[#f5f5f5]" ><span className="text-[#02ca3a]">
                    {footerNum}</span>% than yesterday</h1>
            </div>
        </div>
    );
};

export default MinCard;