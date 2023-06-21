import BannerProfile from "../components/bannerProfile";
import Navbar from "../components/navbar";
import { HomeModernIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";

export default function ProfileTentang() {
  return (
    <>
      <Navbar />
      <BannerProfile />
      <div className="bg-komunitas ">
        <div className="mx-3 md:mx-auto md:w-3/5 py-2">
          <div className="bg-purple-sosialify p-4 rounded-xl text-white ">
            <div className="flex gap-5">
              <Icon icon="game-icons:self-love" width={61} />
              <p className="text-sm">
                <span className="text-[#FFBE3F] text-lg font-semibold ">Most Liked To</span>
                <br />
                Pets, Astronomy, Memes, Sports
              </p>
            </div>
            <div className="flex gap-5">
              <Icon icon="mingcute:cake-fill" width={61} />
              <p className="text-sm">
                <span className="text-[#FFBE3F] text-lg font-semibold">Tanggal Lahir</span>
                <br />
                16 April 1982
              </p>
            </div>
            <div className="flex gap-5">
              <HomeModernIcon width={61} />
              <p className="text-sm">
                <span className="text-[#FFBE3F] text-lg font-semibold">Tempat Lahir</span>
                <br />
                Jakarta, Indonesia
              </p>
            </div>
            <div className="flex gap-5">
              <MapPinIcon width={61} />
              <p className="text-sm">
                <span className="text-[#FFBE3F] text-lg font-semibold">Tempat Tinggal</span>
                <br />
                Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
