import CommunityBanner from "../components/CommunityBanner";
import Navbar1 from "../components/NavbarComponent1";
import CommunitySidebar from "../components/CommunitySidebar";
import astronot from "../assets/images/astronot.png";
import { ChatBubbleBottomCenterTextIcon, ClockIcon, EyeIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom'

const CommunityEventPage = () => {
    return (
        <>
            <Navbar1 />
            <div className="flex flex-col-reverse lg:grid grid-flow-col bg-komunitas">
                <CommunitySidebar />
                <div>
                    <CommunityBanner />
                    <div className="col-span-2 row-span-2 mt-10 ">
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
                                    <h2 className="text-[#E3A73D] px-4 my-6 lg:px-8 lg:my-7 mx-1 text-lg font-bold ">
                                        Akan Berlangsung
                                    </h2>
                                    <div className="flex flex-col lg:grid grid-cols-2 gap-4 justify-items-center m-6">
                                        <NavLink to="/live-audio">
                                            <div>
                                                <img src={astronot} alt="" />
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
                                        <div>
                                            <img src={astronot} alt="" />
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
                                        <div>
                                            <img src={astronot} alt="" />
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
                                        <div>
                                            <img src={astronot} alt="" />
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
                                    <p className="text-right font-semibold text-white underline mr-6 mb-6">
                                        <a href="">Liat Event Lainnya</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityEventPage