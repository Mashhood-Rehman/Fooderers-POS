
import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import MinCard from "../components/home/MinCard";
import { Icons } from "../assets/Icons";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";
const Home = () => {
    return (
        <section className=" flex bg-[#1f1f1f]  gap-3 overflow-hidden">
            {/* left div  */}
            <div className=" flex-[3] bg-[#1a1a1a]">
                <Greetings />
                <div className="flex  gap-4 mt-4 px-4">
                    <MinCard title="Total Earnings" icon={<Icons.DollarSign />} number={512} footerNum={1.6} />
                    <MinCard title="In Progress" icon={<Icons.Ellipsis />} number={16} footerNum={3.6} />
                </div>
                <RecentOrders />

            </div>
            {/* Right div  */}
            <div className=" flex-[2] bg-[#1a1a1a]"><PopularDishes /></div>
            <BottomNav />
        </section>
    );
};

export default Home;