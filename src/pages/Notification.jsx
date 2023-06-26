import NavbarComponent1 from "../components/NavbarComponent1"
import { Icon } from '@iconify/react';
import Farhan from "../assets/images/farhankebab.png"
import Mas from "../assets/images/mas.png"
import Bro from "../assets/images/bro.png"
import Sams from "../assets/images/samsudin.png"
import Rehan from "../assets/images/rehan.png"

export default function Notifikasi() {
    return (
        <div className="bg-[#20043F] w-full h-auto">
            <NavbarComponent1 />
            <div className="flex flex-col items-center justify-center w-full py-[10px]">
                <div className="w-[100%] flex bg-[#3B2257] justify-between px-[24px] py-[16px] sticky top-[62px] text-[#FFBE3C] items-center">
                    <div className="flex items-center gap-5">
                        <Icon icon="mdi:bell-notification-outline" color="#ffbe3c" width="50" height="50" />
                        <h1 className="font-bold text-[25px]">Notifikasi</h1>
                    </div>
                    <button>Tandai sebagai sudah dibaca</button>
                </div>
                
                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Sams} alt="" className="w-[50px]" />
                            <Icon icon="ps:lovedsgn" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Asus Syamsudin menyukai  postingan anda:</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">Baru saja</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Farhan} alt="" className="w-[50px]" />
                            <Icon icon="iconamoon:comment-fill" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Farhan Kebab mengomentari postingan anda:</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">5 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Bro} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">10 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Rehan} alt="" className="w-[50px]" />
                            <Icon icon="ps:lovedsgn" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Rehan Wangsaff menyukai  postingan anda:</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">30 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Mas} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">1 jam yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Bro} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">10 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Bro} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">10 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Bro} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">10 menit yang lalu</p>
                </div>

                {/*Cards*/}
                <div className="w-[80%] justify-between flex bg-[#3B2257] mt-[20px] px-[24px] py-[16px] text-white items-center">
                    <div className="flex gap-[30px]">
                        <div className="flex items-center justify-center gap-5">
                            <img src={Bro} alt="" className="w-[50px]" />
                            <Icon icon="fontisto:at" color="#d6aeed" width="20" height="20" className="ml-[-30px] mt-[35px] bg-[#7B02C0] p-[4px] rounded-[50%]" />
                        </div>
                        <div className="flex flex-col w-[80%] gap-[15px]">
                            <h1 className="font-semibold">Mas bro menyebut anda dalam suatu postingan</h1>
                            <p>“Hai mas bro sekalian, postingan anda bener sekali. Saya sangat sangattt setuju dengan anda"</p>
                        </div>
                    </div>
                    <p className="text-[#FFBE3C] text-[12px]">10 menit yang lalu</p>
                </div>

            </div>
        </div>
    )
}