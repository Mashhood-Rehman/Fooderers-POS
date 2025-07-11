import React, { useState } from "react";
import { menus } from "../../constants/data";
import { Icons } from "../../assets/Icons";
const MenuContainer = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [itemCounts, setItemCounts] = useState({});

    const handleSelect = (menu) => {
        setSelectedMenu(menu?.id === selectedMenu?.id ? null : menu);
    };


    const increment = (id) => {
        setItemCounts(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const decrement = (id) => {
        setItemCounts(prev => ({
            ...prev,
            [id]: prev[id] > 0 ? prev[id] - 1 : 0
        }));
    };

    return (
        <>
            <div className="p-6">

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {menus.map((menu) => (
                        <div
                            key={menu.id}
                            onClick={() => handleSelect(menu)}
                            className={`${menu.bgColor} relative rounded-2xl p-6 text-white shadow-lg cursor-pointer overflow-hidden`}
                        >
                            {/* Highlight on selection */}
                            {selectedMenu === menu.id && (
                                <div className="absolute top-3 right-3 z-20">
                                    <Icons.CheckCircle className="text-white w-6 h-6 drop-shadow-lg" />
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[140px]">
                                <div className="text-5xl mb-4">
                                    {menu.icon}
                                </div>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        {menu.items.length}
                                    </span>
                                </div>

                                <h2 className="text-lg font-bold tracking-wide uppercase drop-shadow-md mb-2">
                                    {menu.name}
                                </h2>

                                <p className="text-xs opacity-90">
                                    {menu.items.length === 1 ? "1 Item" : `${menu.items.length} Items`} Available
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="border border-[#2a2a2a] border-t-2 mt-6 mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6     ">
                    {selectedMenu?.items?.map((item) => (
                        <div key={item.id} className="bg-[#1a1a1a] rounded-2xl p-6 text-white shadow-lg">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white leading-tight">{item.name}</h3>
                                    <Icons.ShoppingCart className="size-10 bg-orange-500/30 p-2 rounded-full text-orange-500 " />
                                </div>

                                <div className="mt-auto">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-orange-500">${item.price}</span>
                                    </div>

                                    <div className="flex items-center justify-center bg-[#2a2a2a] rounded-lg px-4 py-2">
                                        <button
                                            onClick={() => decrement(item.id)}
                                            className="p-2 rounded-full bg-orange-500/20 mr-5    text-orange-500"
                                        >
                                            <Icons.Minus size={16} className="cursor-pointer" />
                                        </button>
                                        <div className="mx-4 text-center min-w-[80px]">
                                            <span className="text-lg font-semibold text-white">
                                                {itemCounts[item.id] || 0}
                                            </span>
                                            <p className="text-xs text-gray-400">
                                                {itemCounts[item.id] === 1 ? "item" : "items"}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => increment(item.id)}
                                            className="p-2 rounded-full cursor-pointer bg-orange-500/20 text-orange-500"
                                        >
                                            <Icons.Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
};

export default MenuContainer;