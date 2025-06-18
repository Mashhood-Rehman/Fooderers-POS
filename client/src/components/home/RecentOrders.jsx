import React from "react";
import { Icons } from "../../assets/Icons";
import OrderList from "./OrderList";

const RecentOrders = () => {
    return (
        <div className="px-8 mt-6">
            <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">

                <div className=" flex items-center justify-between">
                    <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">Recent Orders</h1>
                    <a href="" className="text-[#025cca] text-sm font-semibold">View All</a>
                </div>
                <div className="flex items-center mt-3 gap-3 bg-[#2a2a2a] rounded-lg px-4 py-3 w-full max-w-lg">
                    <Icons.Search className="text-[#f5f5f5] w-5 h-5" />
                    <input
                        type="search"
                        placeholder="Search recent orders..."
                        className="bg-transparent outline-none text-[#f5f5f5] placeholder-[#cccccc] w-full text-sm"
                    />
                </div>
                <div className="mt-4 px-6 overflow-y-scroll  hide-scrollbar h-[300px]">

                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                </div>
            </div>

        </div>
    );
};

export default RecentOrders;