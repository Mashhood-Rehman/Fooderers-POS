
import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
const Home = () => {
    return (
        <section className=" flex bg-[#1f1f1f] h-[calc(100vh-8rem)] gap-3 overflow-hidden">
            {/* left div  */}
            <div className=" flex-[3] bg-[#1a1a1a]">
                <Greetings />
            </div>
            {/* Right div  */}
            <div className=" flex-[2] bg-[#1a1a1a]"></div>
            <BottomNav />
        </section>
    );
};

export default Home;