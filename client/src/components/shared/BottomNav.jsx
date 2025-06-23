import React, { useState } from "react";

import { Icons } from "../../assets/Icons";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
    const [openModal, setOpenModal] = useState(false)
    const [guestCount, setGuestCount] = useState(0);
    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const increment = () => setGuestCount(prev => prev + 1);
    const decrement = () => setGuestCount(prev => (prev > 0 ? prev - 1 : 0));
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
            <Link to="/" className="text-[#f5f5f5] bg-[#343434] flex items-center justify-center rounded-4xl w-full max-w-[200px]">
                <Icons.House className="inline mr-3 " size={25} /><p>Home</p >
            </Link>
            <Link to="/Orders" className="text-[#ababab] flex items-center justify-center"><Icons.ClockArrowUp className="inline mr-3 " size={25} /><p>Orders</p></Link>
            <Link to="/Tables" className="text-[#ababab] flex items-center justify-center"><Icons.HandPlatter className="inline mr-3 " size={25} /><p>Tables</p></Link>
            <Link to="/More" className="text-[#ababab] flex items-center justify-center"><Icons.CircleEllipsis className="inline mr-3 " size={25} /><p>More</p></Link>

            <button
                onClick={handleOpenModal}
                className="bg-orange-500 text-white rounded-full p-3 flex items-center justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <Icons.ConciergeBell size={30} />
            </button>            <Modal handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} openModal={openModal} title={"Create Order"}>
                <div className="space-y-4">
                    {/* Customer Name */}
                    <div>
                        <label className="block mb-1">Customer Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full p-2 rounded bg-[#2a2a2a] text-white"
                        />
                    </div>

                    {/* Customer Phone */}
                    <div>
                        <label className="block mb-1">Customer Phone</label>
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            className="w-full p-2 rounded bg-[#2a2a2a] text-white"
                        />
                    </div>

                    {/* Guest Field */}
                    <div>
                        <label className="block mb-1">Guests</label>
                        <div className="relative flex items-center justify-between bg-[#2a2a2a] rounded p-2 text-center">
                            <button onClick={decrement} className="absolute left-2">
                                <Icons.Minus size={20} className="text-orange-500" />
                            </button>

                            <span className="w-full text-center">
                                {guestCount} {guestCount === 1 ? "Person" : "Persons"}
                            </span>

                            <button onClick={increment} className="absolute right-2">
                                <Icons.Plus size={20} className="text-orange-500" />
                            </button>
                        </div>
                        <button className="text-white bg-orange-500 w-full flex items-center justify-center mt-2 rounded-xl py-3">Create Order</button>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default BottomNav;