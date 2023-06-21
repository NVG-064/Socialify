import {
  MicrophoneIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Profile from "../assets/images/usersidebar.png";
import Banner from "../components/bannerKomunitas";
import Navbar from "../components/navbar";
import SidebarKomunitas from "../components/sidebar-komunitas";

export default function ModeratordanAdmin() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse md:grid grid-flow-col bg-komunitas">
        <SidebarKomunitas />
        <div>
          <Banner />
          <div className="col-span-2 row-span-2 mt-10">
            <section className="bg-komunitas col-span-2 row-span-2">
              <div class="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                <div class="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
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
