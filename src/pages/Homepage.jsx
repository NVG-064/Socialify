import React from "react";
import NavbarComponent1 from "../components/NavbarComponent1";
import HomepageSidebar from "../components/HomepageSidebar";
import HomepageLeaderboard from "../components/HomepageLeaderboard";
import { Icon } from '@iconify/react';
import Card from "../components/CommunityCard"
import Footer from "../components/FooterComponent"

export default function Homepage() {
    return (
        <>
            <NavbarComponent1 />
            <div className="flex bg-komunitas pt-[15px] px-[15px] w-full justify-between gap-[15px] pb-5">
                <HomepageSidebar />
                <div className="w-[55%] gap-[15px] flex flex-col">
                    <div className="flex flex-col gap-[15px] items-start px-[5%] py-[5%] rounded-[10px] bg-[#20043F] text-white">
                        <h1 className="font-bold text-[35px]">Selamat Datang, Farhan Kebab 👋</h1>
                        <h1 className="font-bold text-[30px]">Mari temukan komunitas kamu</h1>
                        <p className="text-[20px] items-center gap-5 flex flex-row"><Icon icon="mdi:location" width={30} />Batam, Indonesia</p>
                    </div>
                    <div className="flex flex-col gap-[15px] w-full h-auto items-start px-[5%] py-[5%] rounded-[10px] bg-[#20043F]">
                        <Card />
                    </div>
                </div>
                <HomepageLeaderboard />
            </div>
        </>
    )
}