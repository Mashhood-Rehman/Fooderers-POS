import React, { useState } from "react";
import { Icons } from "../assets/Icons";
import { Link } from "react-router-dom";
import TableCard from "../components/Tables/TableCard";
const Tables = () => {
    const [activeTab, setActiveTab] = useState("All")
    return (
        <div className="bg-[#1a1a1a] text-white p-5  h-screen  w-full">

            <div className="flex items-center justify-between ">

                {/* Left: Name and Items */}
                <Link to="/" className=" cursor-pointer flex items-center space-x-2">

                    <button className="bg-orange-500 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
                        <Icons.ArrowLeft size={30} />
                    </button>
                    <div className="flex flex-col">
                        Tables
                    </div>
                </Link>



                {/* Right: Status */}
                <div >
                    <ul className="flex  flex-row items-center  space-x-4" >
                        <li onClick={() => setActiveTab("All")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'All' && 'bg-[#343434]'} `}>All</li>
                        <li onClick={() => setActiveTab("Booked")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'Booked' && 'bg-[#343434]'} `}>Booked</li>
                    </ul>
                </div>
            </div>
            <div>
                <TableCard activeTab={activeTab} />
            </div>
        </div>

    );
};

export default Tables;