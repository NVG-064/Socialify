// import Upload from "../assets/icons/UploadFhoto.svg";
import Profile from "../assets/images/usersidebar.png";
// import astronot from "../assets/images/astronot.png";
import NavbarComponent1 from "../components/NavbarComponent1";
import {
    AtSymbolIcon,
    BookmarkIcon,
    ChatBubbleOvalLeftIcon,
    EllipsisHorizontalIcon,
    HeartIcon,
} from "@heroicons/react/24/solid";
import { Disclosure } from "@headlessui/react";
import ProfileBanner from "../components/ProfileBanner";

export default function TimelineProfile() {
    return (
        <>
            <NavbarComponent1 />
            <ProfileBanner />
            <section className="bg-komunitas p-4">
                <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                    <div className="flex items-center mb-3 overflow-hidden rounded-3xl bg-purple-sosialify p-3 gap-5">
                        <div className="rounded-2xl bg-white w-full">
                            <div className="bg-[#FFBE3F] rounded-2xl py-3 px-4 lg:px-8 w-full flex gap-7">
                                <img width={70} src={Profile} className="aspect-square object-contain" alt="" />
                                <div className="flex flex-col gap-3">
                                    <span className="bg-komunitas text-white text-base lg:text-xl font-bold py-1 px-5 rounded-2xl">
                                        Programmer Forum
                                    </span>
                                    <span className="text-sm">
                                        <b>Asus Syamsudin</b> . 7 menit yang lalu
                                    </span>
                                </div>
                                <button style={{ alignSelf: "flex-start", marginLeft: "auto" }}>
                                    <EllipsisHorizontalIcon className="w-8" />
                                </button>
                            </div>
                            <h3 className="font-bold text-xl my-4 mx-7">
                                Hai mas bro sekalian, mohon bantuannya ya! Baru join nih..
                            </h3>
                            <div className="mt-4 px-7">
                                <button type="button" className="flex items-center gap-3 mb-2">
                                    <HeartIcon className="w-8 text-pink-400 bg-komunitas rounded-full p-1" />
                                    <span className="text-[#AF40F1] text-xl">4.8 K</span>
                                </button>
                                <p className="mb-8">Tidak ada subjek untuk ditampilkan</p>
                            </div>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const CommentSection = () => {
    return (
        <Disclosure>
            <div className="flex justify-end mb-5 gap-2 pr-7">
                <AtSymbolIcon className="w-8 text-white bg-komunitas rounded-full p-1" />
                <Disclosure.Button>
                    <ChatBubbleOvalLeftIcon className="w-8 text-white bg-komunitas rounded-full p-1 comment-button" />
                </Disclosure.Button>
                <BookmarkIcon className="w-8 text-white bg-komunitas rounded-full p-1" />
            </div>
            <Disclosure.Panel>
                <div className="bg-[#BA4AFB] text-white py-1 shadow-[#8716CA] shadow-sm">
                    <span className="text-sm ml-7">
                        <b>250 Komentar</b> . Urutan berdasarkan paling relevan
                    </span>
                </div>
                <div className="w-full comment-card">
                    <div className="py-5 px-4 flex gap-4">
                        <picture>
                            <img className="ml-6" width={70} src={Profile} alt="" />
                        </picture>
                        <div className="flex flex-col gap-2">
                            <p className="font-extrabold">Asus Syamsudin</p>
                            <p className="w-3/4">
                                Welcome member baru! Harap patuhi rotg yang berlaku ya. Link{" "}
                                <a href="#" className="text-[#6E3CBC]">
                                    s.id/rotgProgForum
                                </a>
                            </p>
                            <span className="text-xs text-gray-500">
                                2 menit yang lalu .{" "}
                                <span className="text-[#6E3CBC]">Balas</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full comment-card">
                    <div className="py-5 px-4 flex gap-4">
                        <picture>
                            <img className="ml-6" width={70} src={Profile} alt="" />
                        </picture>
                        <div className="flex flex-col gap-2">
                            <p className="font-extrabold">Anya Geraldine</p>
                            <p className="w-3/4">Ashiaapppp!</p>
                            <span className="text-xs text-gray-500">
                                1 menit yang lalu .{" "}
                                <span className="text-[#6E3CBC]">Balas</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full comment-card">
                    <div className="py-5 px-4 flex gap-4">
                        <picture>
                            <img className="ml-6" width={70} src={Profile} alt="" />
                        </picture>
                        <div className="flex flex-col gap-2">
                            <p className="font-extrabold">Farhan Kebab</p>
                            <p className="w-3/4">Okee mas @Asus Syamsudin, terimakasih ya!</p>
                            <span className="text-xs text-gray-500">
                                1 menit yang lalu .{" "}
                                <span className="text-[#6E3CBC]">Balas</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full comment-card">
                    <div className="py-5 px-4 flex gap-4">
                        <picture>
                            <img className="ml-6" width={70} src={Profile} alt="" />
                        </picture>
                        <div className="flex flex-col gap-2">
                            <p className="font-extrabold">Mas Bro</p>
                            <p className="w-3/4">
                                Santuyy aja mas bro... @Abdul Hamid Salam tempel yakk :^
                            </p>
                            <span className="text-xs text-gray-500">
                                7 menit yang lalu .{" "}
                                <span className="text-[#6E3CBC]">Balas</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full comment-card">
                    <div className="py-5 px-4 flex gap-4">
                        <picture>
                            <img className="ml-6" width={70} src={Profile} alt="" />
                        </picture>
                        <div className="flex flex-col gap-2">
                            <p className="font-extrabold">Peria Berbibir Tebal</p>
                            <p className="w-3/4">
                                Selamat datang yaa...Terimakasih sudah memberi tahu @Abdul Hamid
                            </p>
                            <span className="text-xs text-gray-500">
                                Kemarin 21.07 . <span className="text-[#6E3CBC]">Balas</span>
                            </span>
                        </div>
                    </div>
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
};
