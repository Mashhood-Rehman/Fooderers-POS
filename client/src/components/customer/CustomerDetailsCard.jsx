import React from "react";
import { Trash2, Copy, User, Calendar, MapPin } from "lucide-react";

const CustomerDetailsCard = () => {
    return (
        <div className="h-[calc(100vh-2rem)] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-600/30 p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-xl font-semibold">Customer Name</h1>
                        <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">Table No. 5</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-400 text-sm">Dec 15, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-orange-500/20 px-4 py-2 rounded-lg">
                    <span className="text-orange-500 font-bold text-sm">Active</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white text-lg font-semibold">Order Details</h2>
                    <span className="text-gray-400 text-sm">3 items</span>
                </div>

                <div className="space-y-3">
                    <div className="bg-[#2a2a2a] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-white font-medium">Chicken Tikka</h3>
                            <span className="text-orange-500 font-semibold">x2</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <button className="p-2 bg-red-500/20 rounded-lg cursor-pointer">
                                    <Trash2 className="w-4 h-4 text-red-400" />
                                </button>
                                <button className="p-2 bg-blue-500/20 rounded-lg cursor-pointer">
                                    <Copy className="w-4 h-4 text-blue-400" />
                                </button>
                            </div>
                            <span className="text-white font-semibold text-lg">$24.00</span>
                        </div>
                    </div>

                    {/* Another Order Item */}
                    <div className="bg-[#2a2a2a] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-white font-medium">Biryani Special</h3>
                            <span className="text-orange-500 font-semibold">x1</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <button className="p-2 bg-red-500/20 rounded-lg cursor-pointer">
                                    <Trash2 className="w-4 h-4 text-red-400" />
                                </button>
                                <button className="p-2 bg-blue-500/20 rounded-lg cursor-pointer">
                                    <Copy className="w-4 h-4 text-blue-400" />
                                </button>
                            </div>
                            <span className="text-white font-semibold text-lg">$18.50</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-600/30 pt-4 mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Subtotal</span>
                            <span className="text-white">$42.50</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-400">Tax (10%)</span>
                            <span className="text-white">$4.25</span>
                        </div>
                        <div className="flex items-center justify-between text-lg font-semibold">
                            <span className="text-white">Total</span>
                            <span className="text-orange-500">$46.75</span>
                        </div>

                        <div className=" space-y-3">
                            <div className=" flex items-center space-x-2 w-full ">

                                <button className="text-white cursor-pointer w-1/2 bg-[#02ca3a] px-5 py-2 rounded-md">Cash</button>
                                <button className="text-white cursor-pointer w-1/2 bg-transparent hover:bg-white transition-all border border-white hover:text-black px-5 py-2 rounded-md">Online</button>
                            </div>
                            <div className=" flex items-center space-x-2 w-full ">

                                <button className="text-white cursor-pointer w-1/2 bg-transparent hover:bg-white transition-all border border-white hover:text-black px-5 py-2 rounded-md">Place Order</button>
                                <button className="text-white cursor-pointer w-1/2 bg-[#02ca3a] px-5 py-2 rounded-md">Print Receipt </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetailsCard;