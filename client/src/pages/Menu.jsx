import React from "react";
import BottomNav from "../components/shared/BottomNav";
import { Link } from "react-router-dom";
import { Icons } from "../assets/Icons";
import MenuContainer from "../components/menu/MenuContainer";
const Menu = () => {

    return (
        <section className=" flex bg-[#1f1f1f]  p-4  gap-3 overflow-hidden">
            <div className="flex-[3] ">
                <div className="flex items-center justify-between ">

                    <Link to="/" className=" cursor-pointer flex items-center space-x-2">

                        <button className="bg-orange-500 text-white text-xl font-bold rounded-full h-10 w-10 flex items-center justify-center">
                            <Icons.ArrowLeft size={30} />
                        </button>
                        <div className="flex flex-col text-white">
                            Menu
                        </div>
                    </Link>



                    <div >
                        <div className=" flex items-center gap-3 cursor-pointer">
                            <Icons.UtensilsCrossed className="text-[#f5f5f5] size-8" />
                            <div className=" flex flex-col items-start"> <h1 className="text-md text-[#f5f5f5]">Customer Name</h1>
                                <p className="text-xs text-[#ababab]">Table No.</p></div>
                        </div>
                    </div>
                </div>
                <MenuContainer />
            </div>
            <div className=" flex-[2] "></div>
            {/*  */}
            <BottomNav />

        </section>
    );
};

export default Menu;