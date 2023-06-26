import ProfileBanner from "../components/ProfileBanner";
import NavbarComponent1 from "../components/NavbarComponent1";
import gambar from "../assets/images/gambar.png";
import categoryImage from "../assets/images/category-image.png";
import { StarIcon } from "@heroicons/react/24/solid";

export default function CommunityProfile() {
    return (
        <>
            <NavbarComponent1 />
            <ProfileBanner />
            <div className="bg-komunitas">
                <div className="w-4/5 mx-auto py-2">
                    <div className="bg-purple-sosialify my-3 p-5 rounded-xl">
                        <div className="rounded-2xl bg-white w-full flex flex-col md:flex-row gap-3">
                            <div className="p-2.5 flex-none">
                                <img src={gambar} className="rounded-lg w-full aspect-video lg:aspect-auto object-cover" alt="" />
                            </div>
                            <div className="flex flex-col gap-3 justify-center my-3 p-2.5">
                                <div className="flex items-center gap-5">
                                    <img
                                        src={categoryImage}
                                        className="w-11 rounded-2xl"
                                        alt=""
                                    />
                                    <h3 className="font-bold text-lg">Mahir Programming</h3>
                                </div>
                                <p className="text-sm mr-9">
                                    Dapatkan bantuan dari ribuan ahli dan profesional programmer
                                    di seluruh Indonesia. Disini kamu bisa mengajukan berbagai
                                    pertanyaan seputar programmer yang kamu tidak ketahui.
                                </p>
                                <div className="flex items-center">
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon width={25} className="stroke-black fill-white" />
                                    <span className="text-sm text-gray-400 ml-3">
                                        10 Online . 52 Anggota
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-sosialify my-3 p-5 rounded-xl">
                        <div className="rounded-2xl bg-white w-full flex flex-col md:flex-row gap-3">
                            <div className="p-2.5 flex-none">
                                <img src={gambar} className="rounded-lg w-full aspect-video lg:aspect-auto object-cover" alt="" />
                            </div>
                            <div className="flex flex-col gap-3 justify-center my-3 p-2.5">
                                <div className="flex items-center gap-5">
                                    <img
                                        src={categoryImage}
                                        className="w-11 rounded-2xl"
                                        alt=""
                                    />
                                    <h3 className="font-bold text-lg">Mahir Programming</h3>
                                </div>
                                <p className="text-sm mr-9">
                                    Dapatkan bantuan dari ribuan ahli dan profesional programmer
                                    di seluruh Indonesia. Disini kamu bisa mengajukan berbagai
                                    pertanyaan seputar programmer yang kamu tidak ketahui.
                                </p>
                                <div className="flex items-center">
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon width={25} className="stroke-black fill-white" />
                                    <span className="text-sm text-gray-400 ml-3">
                                        10 Online . 52 Anggota
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-purple-sosialify my-3 p-5 rounded-xl">
                        <div className="rounded-2xl bg-white w-full flex flex-col md:flex-row gap-3">
                            <div className="p-2.5 flex-none">
                                <img src={gambar} className="rounded-lg w-full aspect-video lg:aspect-auto object-cover" alt="" />
                            </div>
                            <div className="flex flex-col gap-3 justify-center my-3 p-2.5">
                                <div className="flex items-center gap-5">
                                    <img
                                        src={categoryImage}
                                        className="w-11 rounded-2xl"
                                        alt=""
                                    />
                                    <h3 className="font-bold text-lg">Mahir Programming</h3>
                                </div>
                                <p className="text-sm mr-9">
                                    Dapatkan bantuan dari ribuan ahli dan profesional programmer
                                    di seluruh Indonesia. Disini kamu bisa mengajukan berbagai
                                    pertanyaan seputar programmer yang kamu tidak ketahui.
                                </p>
                                <div className="flex items-center">
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon
                                        width={25}
                                        className="stroke-black fill-yellow-500"
                                    />
                                    <StarIcon width={25} className="stroke-black fill-white" />
                                    <span className="text-sm text-gray-400 ml-3">
                                        10 Online . 52 Anggota
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
