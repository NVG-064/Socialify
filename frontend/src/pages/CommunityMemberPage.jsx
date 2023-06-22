import {
    MicrophoneIcon,
    MagnifyingGlassIcon,
    MapPinIcon,
} from "@heroicons/react/24/solid";
import Profile from "../assets/images/usersidebar.png";
import CommunityBanner from "../components/CommunityBanner";
import NavbarComponent1 from "../components/NavbarComponent1";
import CommunitySidebar from "../components/CommunitySidebar";
import { NavLink } from 'react-router-dom'

export default function MemberPage() {
    return (
        <>
            <NavbarComponent1 />
            <div className="flex flex-col-reverse lg:grid grid-flow-col bg-komunitas">
                <CommunitySidebar />
                <div>
                    <CommunityBanner />
                    <div className="col-span-2 row-span-2 mt-10">
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 pb-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 lg:px-8 lg:py-6 lg:mx-1 px-4 py-3  font-semibold">
                                        Anggota. <span className="text-white">230 Orang</span>
                                    </h3>
                                    <div>
                                        <p className="lg:px-11 lg:py-7 px-5 py-3 text-base leading-relaxed text-white">
                                            Orang dan halaman baru yang bergabung dengan grup ini akan
                                            muncul di sini.
                                        </p>
                                        <div className="px-3 pb-2 lg:px-9 lg:pb-5 lg:mx-1 border-b-2">
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
                                                    placeholder="Cari Anggota"
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
                                        <div className="p-2 border-b-2 px-1 mx-1">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Farhan Kebab</p>
                                                    <p className="text-2xl">👋</p>
                                                    <p className="text-xs flex items-center gap-1">
                                                        <MapPinIcon className="w-4 h-4" />
                                                        Batam, Indonesia
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <NavLink to="/about-profile">
                                                    <div className="text-white ml-3">
                                                        <p className="font-semibold">Reza wangsaff</p>
                                                        <p className="text-xs mt-1">
                                                            Bergabung sejak 2 tahun yang lalu
                                                        </p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 ">
                                            <div className="bg-komunitas flex items-center">
                                                <div className="h-24 w-24 p-2.5">
                                                    <img src={Profile} alt="" />
                                                </div>
                                                <div className="text-white ml-3">
                                                    <p className="font-semibold">Reza wangsaff</p>
                                                    <p className="text-xs mt-1">
                                                        Bergabung sejak 2 tahun yang lalu
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
