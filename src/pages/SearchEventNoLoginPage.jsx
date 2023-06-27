import {
    MicrophoneIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Navbar0 from "../components/NavbarComponent0";
import Footer from "../components/FooterComponent";
import Image from "../assets/images/cover.png";
import Icon from "../assets/images/Vector.png";
import astronot from "../assets/images/astronot.png";
import { ChatBubbleBottomCenterTextIcon, ClockIcon, EyeIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom'

const SearchEventNoLogin = () => {
    return (
        <div className="w-full h-auto bg-[#20043F]">
            <Navbar0 />

            <div className="w-full h-auto mt-8 items-center justify-center content-center">

                <div>
                    <img src={Image} alt="Cover" className="flex w-full h-auto" />
                    <div className="flex-1 absolute w-full h-auto top-[40%] text-center items-center justify-center gap-[30px]">
                        <h1 className="text-[40px] font-bold">TEMUKAN EVENT YANG KAMU MINATI DI</h1>
                        <h1 className="text-[40px] font-bold">SOCIALIFY</h1>
                        <h3 className="text-[16px] font-medium"><br />Event belajar, game,  musik, dan event lainnya.</h3>
                    </div>
                </div>

                <div className="w-full h-auto mt-8 mb-8 justify-center items-center flex flex-col content-center">
                    <div className="w-[90%] px-3 pb-2 lg:px-9 lg:pb-5 lg:mx-1">
                        <div className="relative lg:mb-4 flex w-full lg:flex-wrap items-stretch bg-[#D9D9D9] rounded-2xl">
                            <button
                                className="relative z-[2] px-3 py-2 lg:px-6  text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                type="button"
                                id="button-addon3"
                                data-te-ripple-init
                            >
                                <MagnifyingGlassIcon className="w-5 h-5" />
                            </button>
                            <input
                                type="search"
                                className="relative w-full lg:w-auto -mr-0.5 block lg:flex-auto bg-transparent bg-clip-padding py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:outline-none"
                                placeholder="Eksplor Event"
                                aria-label="Search"
                                aria-describedby="button-addon3"
                            />
                            <button
                                className="relative z-[2] lg:px-6 p-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                                type="button"
                                id="button-addon3"
                                data-te-ripple-init
                            >
                                <MicrophoneIcon className="w-6 h-6 opacity-50" />
                            </button>
                        </div>
                    </div>

                    <div className="w-[90%] h-auto gap-5 flex items-center justify-center">
                        <button className="bg-[#FFBE3F] py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Semua Kategori</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Kesehatan</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Hiburan</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Bisnis</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Seni</button>
                    </div>
                    <div className="w-[90%] h-auto gap-5 flex mt-5 items-center justify-center">
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Edukasi</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Olahraga</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Games</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Musik</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Pecinta Hewan</button>
                    </div>
                </div>

                <div className="w-full h-auto items-center justify-center flex flex-col pb-10">
                    <br />
                    <hr className="border-2 w-[95%]" />
                    <br />

                    <div className="pb-5 overflow-hidden bg-purple-sosialify">
                        <h2 className="text-[#E3A73D] my-6 lg:my-7 text-lg font-bold ">
                            Live Sekarang
                        </h2>
                        <div className="flex w-[100%] flex-wrap gap-4 items-center justify-center">
                            <NavLink to="/live-audio" className={"w-[300px] h-auto"}>
                                <div className="w-full h-auto bg-slate-400">
                                    <img src={astronot} alt="" className="w-full h-auto" />
                                    <div className="bg-[#FFBE3F] p-4">
                                        <h3 className="font-semibold mb-3">
                                            Reza Kecap: Nongkrong bersama bahas ngoding
                                        </h3>
                                        <p>
                                            panggilan untuk sahabatku tercinta pelaku komunitas
                                            programmer! Ayo bergabung dalam sesi pelatihan
                                            eksklusif.
                                        </p>
                                    </div>
                                    <div className="flex bg-white p-1 gap-3">
                                        <span className="text-xs flex items-center gap-1">
                                            <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                            2023
                                        </span>
                                        <span className="text-xs flex items-center gap-1">
                                            <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                            345
                                        </span>
                                        <span className="text-xs flex items-center gap-1">
                                            <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                            1045
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <br />
                    <hr className="border-2 w-[95%]" />
                    <br />

                    <div className="pb-5 overflow-hidden bg-purple-sosialify">
                        <h2 className="text-[#E3A73D] my-6 lg:my-7 text-lg font-bold ">
                            Akan Berlangsung
                        </h2>
                        <div className="flex w-[100%] flex-wrap gap-4 items-center justify-center">
                            <NavLink to="/live-audio" className={"w-[300px] h-auto"}>
                                <div className="w-full h-auto bg-slate-400">
                                    <img src={astronot} alt="" className="w-full h-auto" />
                                    <div className="bg-[#FFBE3F] p-4">
                                        <h3 className="font-semibold mb-3">
                                            Reza Kecap: Nongkrong bersama bahas ngoding
                                        </h3>
                                        <p>
                                            panggilan untuk sahabatku tercinta pelaku komunitas
                                            programmer! Ayo bergabung dalam sesi pelatihan
                                            eksklusif.
                                        </p>
                                    </div>
                                    <div className="flex bg-white p-1 gap-3">
                                        <span className="text-xs flex items-center gap-1">
                                            <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                            2023
                                        </span>
                                        <span className="text-xs flex items-center gap-1">
                                            <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                            345
                                        </span>
                                        <span className="text-xs flex items-center gap-1">
                                            <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                            1045
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>
                            <div className="w-[300px] h-auto bg-slate-400">
                                <img src={astronot} alt="" className="w-full h-auto" />
                                <div className="bg-[#FFBE3F] p-4">
                                    <h3 className="font-semibold mb-3">
                                        Reza Kecap: Nongkrong bersama bahas ngoding
                                    </h3>
                                    <p>
                                        panggilan untuk sahabatku tercinta pelaku komunitas
                                        programmer! Ayo bergabung dalam sesi pelatihan
                                        eksklusif.
                                    </p>
                                </div>
                                <div className="flex bg-white p-1 gap-3">
                                    <span className="text-xs flex items-center gap-1">
                                        <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5" /> 2 may,
                                        2023
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4 lg:w-5 lg:h-5" />{" "}
                                        345
                                    </span>
                                    <span className="text-xs flex items-center gap-1">
                                        <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                                        1045
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    )
}

export default SearchEventNoLogin