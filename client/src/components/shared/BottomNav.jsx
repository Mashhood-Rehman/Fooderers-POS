import React, { useState } from "react";

import { Icons } from "../../assets/Icons";
import { Link } from "react-router-dom";

const BottomNav = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <Link to="/" className="text-[#f5f5f5] bg-[#343434] flex items-center justify-center rounded-4xl w-full max-w-[200px]">
                <Icons.House className="inline mr-3 " size={25} /><p>Home</p >
            </Link>
            <Link to="/Orders" className="text-[#ababab] flex items-center justify-center"><Icons.ClockArrowUp className="inline mr-3 " size={25} /><p>Orders</p></Link>
            <Link to="/Tables" className="text-[#ababab] flex items-center justify-center"><Icons.HandPlatter className="inline mr-3 " size={25} /><p>Tables</p></Link>
            <Link to="/More" className="text-[#ababab] flex items-center justify-center"><Icons.CircleEllipsis className="inline mr-3 " size={25} /><p>More</p></Link>

            <button className="bg-orange-500 text-[#f5f5f5] rounded-full p-3 items-center justify-center absolute bottom-8"><Icons.ConciergeBell size={30} /></button>

        </div>

    );
};

export default BottomNav;