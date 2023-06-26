import { useNavigate } from "react-router-dom"
import Farhan from "../assets/images/farhan.png"
import { Icon } from '@iconify/react';
import { HomeModernIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function HomepageSidebar() {
    const navigate = useNavigate()

    return (
        <>
            <aside className="bg-purple-sosialify flex flex-col items-center justify-center w-full lg:w-80 h-max shadow-md shadow-purple-950 row-span-3 sticky top-16 rounded-[10px] text-white">
                <div className="bg-[#FFBE3C] w-full h-[100px] rounded-t-[10px] flex justify-center items-center">
                    <img src={Farhan} alt="" className="w-[100px] h-auto mb-[-100px]" />
                </div>
                <div className="flex flex-col gap-5 w-[80%] h-auto items-center justify-center text-center mt-[100px] border-b-2">
                    <h1 className="font-bold text-[24px]">Farhan Kebab</h1>
                    <p className="mb-[50px]">Aku adalah seorang pria yang menyukai kegelapan.</p>
                </div>
                <div className="flex flex-col gap-[30px] w-[80%] pb-[50px] border-b-2 mt-[50px]">
                    <div className="flex gap-5 items-center ">
                        <Icon icon="game-icons:self-love" width={40} />
                        <p className="text-sm">
                            <span className="text-[#FFBE3F] font-semibold ">Most Liked To</span>
                            <br />
                            Pets, Astronomy, Memes, Sports
                        </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Icon icon="mingcute:cake-fill" width={40} />
                        <p className="text-sm">
                            <span className="text-[#FFBE3F] font-semibold">Tanggal Lahir</span>
                            <br />
                            16 April 1982
                        </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <HomeModernIcon width={40} />
                        <p className="text-sm">
                            <span className="text-[#FFBE3F] font-semibold">Tempat Lahir</span>
                            <br />
                            Jakarta, Indonesia
                        </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <MapPinIcon width={40} />
                        <p className="text-sm">
                            <span className="text-[#FFBE3F] font-semibold">Tempat Tinggal</span>
                            <br />
                            Jakarta, Indonesia
                        </p>
                    </div>
                </div>
            </aside>
        </>
    )
}