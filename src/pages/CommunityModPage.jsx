// import {
//     MicrophoneIcon,
//     MagnifyingGlassIcon,
//     MapPinIcon,
// } from "@heroicons/react/24/solid";
import Profile from "../assets/images/usersidebar.png";
import CommunityBanner from "../components/CommunityBanner";
import NavbarComponent1 from "../components/NavbarComponent1";
import CommunitySidebar from "../components/CommunitySidebar";

export default function ModeratorPage() {
    return (
        <>
            <NavbarComponent1 />
            <div className="flex flex-col-reverse md:grid grid-flow-col bg-komunitas">
                <CommunitySidebar />
                <div>
                    <CommunityBanner />
                    <div className="col-span-2 row-span-2 mt-10">
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 mb-4 px-8 py-6 mx-1 font-semibold">
                                        Moderator dan Admin. <span className="text-white">4</span>
                                    </h3>
                                    <div>
                                        <div className="p-2 px-1 mx-1">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold mb-1">Reza Kecap</p>
                                                    <p className="text-sm flex items-center gap-1">
                                                        Pemilik
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 px-1 mx-1">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold mb-1">Reza Kecap</p>
                                                    <p className="text-sm flex items-center gap-1">
                                                        Pemilik
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 px-1 mx-1">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold mb-1">Reza Kecap</p>
                                                    <p className="text-sm flex items-center gap-1">
                                                        Pemilik
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 px-1 mx-1">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold mb-1">Reza Kecap</p>
                                                    <p className="text-sm flex items-center gap-1">
                                                        Pemilik
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
