import React, { useState, useEffect } from "react";
const Greetings = () => {
    const [DateTime, setDateTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])
    const formatDate = (date) => {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, '0')} , ${date.getFullYear()}`
    }

    const formatTime = (date) => {
        return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
    }
    return (
        <div className=" flex items-center justify-between px-8 mt-5">
            <div >
                <h1 className="text-[#f5f5f5] text-3xl font-semibold tracking-wide" >Good Morning, Mashhood</h1>
                <span className="text-[#ababab] text-sm">Give your best services for customers</span>
            </div>
            <div>

                <h1 className=" text-[#f5f5f5] text-4xl font-bold tracking-wide w-[130px]">{formatTime(DateTime)}</h1>
                <p className="text-[#ababab] text-sm">{formatDate(DateTime)}</p>
            </div>
        </div>
    );
};

export default Greetings;