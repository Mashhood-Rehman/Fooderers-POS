import React from "react";
import { ordersData } from "../../constants/data";

const OrderCard = ({ activeTab }) => {
    const filteredOrders =
        activeTab === "All"
            ? ordersData
            : ordersData.filter((order) => order.category === activeTab);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredOrders.map((order, index) => (
                <div
                    key={index}
                    className="bg-[#262626] rounded-lg p-4 flex flex-col space-y-2"
                >
                    {/* Top: Customer + Status */}
                    <div className="flex items-center justify-between">
                        {/* Left: Avatar + Name + Table */}
                        <div className="flex items-center space-x-3">
                            <img
                                src={order.image}
                                alt="avatar"
                                className="rounded-md w-12 h-12 object-cover"
                            />
                            <div>
                                <p className="font-semibold">{order.customerName}</p>
                                <p className="text-sm text-gray-400">#T{order.tableNo}</p>
                            </div>
                        </div>

                        {/* Right: Status Tag */}
                        <span className="text-sm  text-green-700 px-2 py-1 rounded">
                            Ready to serve
                        </span>
                    </div>

                    {/* Middle: Date and Items */}
                    <div className="flex justify-between text-sm text-gray-400">
                        <span>{order.date}</span>
                        <span>{order.items} items</span>
                    </div>

                    {/* Bottom: Price */}
                    <div className="flex justify-between font-semibold text-white">
                        <span>Total</span>
                        <span>₹{order.price.toFixed(2)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderCard;
