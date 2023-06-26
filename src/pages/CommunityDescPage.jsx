import CommunityBanner from "../components/CommunityBanner";
import NavbarComponent1 from "../components/NavbarComponent1";
import CommunitySidebar from "../components/CommunitySidebar";

export default function DescPage() {
    return (
        <>
            <NavbarComponent1 />
            <div className="flex flex-col-reverse lg:grid grid-flow-col bg-komunitas">
                <CommunitySidebar />
                <div>
                    <CommunityBanner />
                    <div className="col-span-2 row-span-2 mt-10">
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-2xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 px-4 py-3 lg:px-8 lg:py-6 mx-1 font-semibold">
                                        Tentang
                                    </h3>
                                    <p className="lg:p-9 p-5 lg:text-base text-justify text-sm leading-relaxed text-white">
                                        Programmer Forum adalah tempat perkumpulan para programmer
                                        veteran maupun pemula untuk saling berbagi ilmu dan info
                                        seputar teknologi. Selain itu, komunitas ini ditunjukkan
                                        bagi pemula yang ingin belajar Programming. Dapatkan bantuan
                                        dari ribuan ahli dan profesional programmer di seluruh
                                        Indonesia. Disini kamu bisa mengajukan berbagai pertanyaan
                                        seputar programmer yang kamu tidak ketahui.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 lg:px-8 lg:py-6 mx-1 px-4 py-3 font-semibold">
                                        Riwayat
                                    </h3>
                                    <p className="p-5 lg:p-9 lg:text-base text-sm leading-relaxed text-white">
                                        Berdiri sejak 31 mei 2023
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 lg:px-8 lg:py-6 px-4 py-3 mx-1 font-semibold">
                                        Lokasi
                                    </h3>
                                    <p className="lg:p-9 p-5 lg:text-base text-sm leading-relaxed text-white">
                                        Komunitas ini berlokasi di Jakarta, Indonesia.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-komunitas col-span-2 row-span-2">
                            <div className="w-full px-4 md:w-4/5 xl:w-[60rem] mx-auto">
                                <div className="mb-3 overflow-hidden rounded-3xl bg-purple-sosialify">
                                    <h3 className="text-yellow-400 border-b-2 lg:px-8 lg:py-6 mx-1 px-4 py-3 font-semibold">
                                        Aturan Grup dari Admin
                                    </h3>
                                    <ol className="lg:p-9 p-5 lg:text-base text-sm leading-relaxed text-white list-decimal">
                                        <li className="ml-3">
                                            Bersikap Baik dan Sopan
                                            <p className="ml-1 mt-3">
                                                Kita semua bersama-sama menciptakan lingkungan yang
                                                ramah. Mari kita perlakukan semua orang dengan rasa
                                                hormat. Perdebatan yang sehat itu hal yang wajar, tapi
                                                lakukan dengan baik
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}
