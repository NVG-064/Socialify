import { NavLink } from "react-router-dom";
import imgProfile from "../assets/images/bele.png";
import fotoProfile from "../assets/images/fotoProfile.png";

export default function ProfileBanner() {
    return (
        <>
            <div className="bg-purple-sosialify drop-shadow-xl pt-4">
                <div className="w-4/5 md:w-4/6 mx-auto">
                    <div className="flex justify-center">
                        <img src={imgProfile} className="rounded-2xl" alt="" />
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center -mt-6 xl:-ml-72">
                        <img src={fotoProfile} alt="" />
                        <div className=" text-white ml-6 md:w-96 ">
                            <h3 className="font-semibold text-2xl">Reza Wangsaff</h3>
                            <p>Aku adalah seorang pria yang menyukai cahaya bulan</p>
                        </div>
                    </div>
                    <hr className="border-b-4 border-white max-w-[855px] mx-auto mt-3" />
                    <div className="flex flex-col md:flex-row justify-start gap-3 mt-2.5 pb-5 xl:ml-28 text-center">
                        <NavLink role="button" to={"/about-profile"} className="bg-white rounded-lg py-0.5 px-5">Tentang</NavLink>
                        <NavLink role="button" to={"/community-profile"} className="bg-white rounded-lg py-0.5 px-5">Komunitas</NavLink>
                        <NavLink role="button" to={"/timeline-profile"} className="bg-white rounded-lg py-0.5 px-5">Linimasa</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}