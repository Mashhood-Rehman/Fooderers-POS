import React, { useState } from "react";
import { Icons } from "../assets/Icons";
import { Link } from "react-router-dom";
import OrderCard from "../components/orders/OrderCard";
import BottomNav from "../components/shared/BottomNav";
const Orders = () => {
    const [activeTab, setActiveTab] = useState("All")
    return (
        <div className="bg-[#1a1a1a] text-white p-5    w-full">

            <div className="flex items-center justify-between ">

                {/* Left: Name and Items */}
                <Link to="/" className=" cursor-pointer flex items-center space-x-2">

                    <button className="bg-orange-500 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
                        <Icons.ArrowLeft size={30} />
                    </button>
                    <div className="flex flex-col">
                        Orders
                    </div>
                </Link>



                {/* Right: Status */}
                <div >
                    <ul className="flex  flex-row items-center  space-x-4" >
                        <li onClick={() => setActiveTab("All")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'All' && 'bg-[#343434]'} `}>All</li>
                        <li onClick={() => setActiveTab("In Progress")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'In Progress' && 'bg-[#343434]'} `}>In Progress</li>
                        <li onClick={() => setActiveTab("Completed")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'Completed' && 'bg-[#343434]'} `}>Completed</li>
                        <li onClick={() => setActiveTab("Ready")} className={` text-white  px-6 py-1 rounded-xl ${activeTab === 'Ready' && 'bg-[#343434]'} `}>Ready</li>
                    </ul>
                </div>
            </div>
            <div>
                <OrderCard activeTab={activeTab} />
            </div>
            <BottomNav />

        </div>

    );
};

export default Orders;