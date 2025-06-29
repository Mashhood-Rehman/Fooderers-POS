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

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {menus.map((menu) => (
                        <div
                            key={menu.id}
                            onClick={() => handleSelect(menu)}
                            className={`${menu.bgColor}     group relative rounded-2xl p-6 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer overflow-hidden`}

                        >
                            {/* Highlight on selection */}
                            {selectedMenu === menu.id && (
                                <div className="absolute top-3 right-3 z-20">
                                    <Icons.CheckCircle className="text-white w-6 h-6 drop-shadow-lg" />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[140px]">
                                <div className="text-5xl mb-3 transform group-hover:scale-110">
                                    {menu.icon}
                                </div>

                                <div className="relative mb-3">
                                    <span className="text-4xl font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg group-hover:bg-orange-500/30 transition-all duration-300">
                                        {menu.items.length}
                                    </span>
                                </div>

                                <h2 className="text-lg font-bold tracking-wide uppercase group-hover:text-orange-100 transition-colors duration-300 drop-shadow-md">
                                    {menu.name}
                                </h2>

                                <p className="text-xs opacity-80 mt-1 group-hover:opacity-100 transition-opacity duration-300">
                                    {menu.items.length === 1 ? "1 Item" : `${menu.items.length} Items`} Available
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <hr className="border border-[#2a2a2a] border-t-2 mt-6 mb-4" />
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6     ">
                    {selectedMenu?.items?.map((item) => (
                        <div key={item.id}>
                            <div className="bg-[#1a1a1a] rounded h-32 p-4 flex       justify-between  text-white">

                                <div className=" flex flex-col justify-between">

                                    <p className=" text-md  whitespace-nowrap">{item.name}</p>
                                    <div className="mt-2 flex items-center justify-between w-full">
                                        <span className="text-orange-500 font-semibold">${item.price}</span>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => decrement(item.id)}>
                                                <Icons.Minus size={18} className="text-orange-500" />
                                            </button>
                                            <span className="text-sm w-12 text-center">
                                                {itemCounts[item.id] || 0} {itemCounts[item.id] === 1 ? "item" : "items"}
                                            </span>
                                            <button onClick={() => increment(item.id)}>
                                                <Icons.Plus size={18} className="text-orange-500" />
                                            </button>
                                        </div>
                                    </div>


                                </div>
                                <div>




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