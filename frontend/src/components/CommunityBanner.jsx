import banner from "../assets/images/banner.png";
import bagikan from "../assets/icons/bagikan.svg";

export default function CommunityBanner() {
    return (
        <>
            <div className="col-span-2">
                <img width="1206" src={banner} alt="" />
                <div className="flex flex-col gap-4 sm:flex-row justify-between bg-purple-sosialify lg:p-11 p-6">
                    <h2 className="text-white lg:text-3xl text-2xl font-bold">Mahir Programming</h2>
                    <div className="flex gap-3">
                        <button className="flex items-center bg-yellow-400 rounded-xl text-xs font-semibold py-1.5 px-4 gap-3 lg:text-base ">
                            + Gabung
                        </button>
                        <button className="flex items-center bg-yellow-400 rounded-xl text-xs font-semibold py-1.5 px-4 gap-3 lg:text-base">
                            Bagikan <img src={bagikan} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}