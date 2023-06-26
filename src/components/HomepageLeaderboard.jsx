import { useNavigate } from "react-router-dom"
import Urutkan from "./DropdownLeaderboard"
import { Icon } from '@iconify/react';
import Lead1 from "../assets/images/1.png"
import Lead2 from "../assets/images/2.png"
import Lead3 from "../assets/images/3.png"

export default function HomepageLeaderboard() {
    const navigate = useNavigate()

    return (
        <>
            <aside className="bg-purple-sosialify flex flex-col items-center justify-center w-full lg:w-80 h-max shadow-md shadow-purple-950 row-span-3 sticky top-16 rounded-[10px] text-white">
                <div className="flex flex-col gap-5 w-[95%] h-auto items-center justify-center text-center py-[50px] border-b-2">
                    <h1 className="font-bold text-[24px]">Papan Peringkat Komunitas</h1>
                </div>
                <div className="flex flex-col items-end gap-[30px] w-[95%] pb-[50px] border-b-2 mt-[10px]">
                    <Urutkan />
                    <div className="flex flex-col items-center py-[5%] justify-center" style={{ width: '100%', height: '100%', background: 'linear-gradient(132deg, rgba(135, 22, 202, 0.96) 2%, #33125E 37%, #591C89 66%, #C036FF 99%)', borderRadius: 32, border: '3px #F5F1FB solid' }}>
                        <h1>Aktivitas</h1>

                        <div className="flex flex-col mt-[20px] gap-5">

                            <div className="flex flex-row items-center gap-[10px] bg-[#6E3CBC] px-[20px] py-[5px] rounded-[50px]">
                                <div className="flex justify-center items-center">
                                    <Icon icon="fa-solid:crown" color="#ffbe3f" width="50" height="50" />
                                    <h1 className="absolute font-black text-[30px] stroke-black">1</h1>
                                </div>
                                <img src={Lead1} alt="" width={40} />
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-[12px]">Programmer Forum</h1>
                                    <p className="flex flex-row gap-[5px] items-center text-[10px]">7.3k anggota <button className="bg-[#FFBE3F] text-black font-bold rounded-[10px] px-[10px] py-[5px]">Gabung</button></p>
                                    <p className="text-[10px]">4.6</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-[10px] bg-[#6E3CBC] px-[20px] py-[5px] rounded-[50px]">
                                <div className="flex justify-center items-center">
                                    <Icon icon="fa-solid:crown" color="#afafaf" width="50" height="50" />
                                    <h1 className="absolute font-black text-[30px] stroke-black">2</h1>
                                </div>
                                <img src={Lead2} alt="" width={40} />
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-[12px]">Programming is Fun</h1>
                                    <p className="flex flex-row gap-[5px] items-center text-[10px]">9.6k anggota <button className="bg-[#FFBE3F] text-black font-bold rounded-[10px] px-[10px] py-[5px]">Gabung</button></p>
                                    <p className="text-[10px]">4.8</p>
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-[10px] bg-[#6E3CBC] px-[20px] py-[5px] rounded-[50px]">
                                <div className="flex justify-center items-center">
                                    <Icon icon="fa-solid:crown" color="#bc6e35" width="50" height="50" />
                                    <h1 className="absolute font-black text-[30px] stroke-black">3</h1>
                                </div>
                                <img src={Lead3} alt="" width={40} />
                                <div className="flex flex-col">
                                    <h1 className="font-semibold text-[12px]">Geek And Program</h1>
                                    <p className="flex flex-row gap-[5px] items-center text-[10px]">1k anggota <button className="bg-[#FFBE3F] text-black font-bold rounded-[10px] px-[10px] py-[5px]">Gabung</button></p>
                                    <p className="text-[10px]">4.1</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </aside>
        </>
    )
}