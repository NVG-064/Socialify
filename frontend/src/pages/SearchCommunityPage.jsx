import Navbar1 from "../components/NavbarComponent1";
import Footer from "../components/FooterComponent";
import Image from "../assets/images/cover.png";
import Sider from "../assets/images/sider.png";
import Icon from "../assets/images/Vector.png";
import Card from "../components/CommunityCard";

const SearchCommunityPage = () => {
    return (
        <div className="w-full h-auto bg-[#20043F]">
            <Navbar1 />
            <div className="w-full h-auto mt-8 items-center justify-center content-center">

                <div>
                    <img src={Image} alt="Cover" className="flex w-full h-auto" />
                    <div className="flex-1 absolute w-full h-auto top-[40%] text-center items-center justify-center gap-[30px]">
                        <h1 className="text-[40px] font-bold">TEMUKAN KOMUNITAS KAMU DI</h1>
                        <h1 className="text-[40px] font-bold">SOCIALIFY</h1>
                        <h3 className="text-[16px] font-medium"><br />Komunitas belajar, game,  musik, dan komunitas lainnya.</h3>
                    </div>
                </div>

                <div className="w-full h-auto mt-8 mb-8 justify-center items-center flex flex-col content-center">
                    <div className="w-[90%] h-auto gap-5 flex items-center justify-center">
                        <button className="bg-[#FFBE3F] py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Semua Kategori</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Kesehatan</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Hiburan</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Bisnis</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Seni</button>
                    </div>
                    <div className="w-[90%] h-auto gap-5 flex mt-5 items-center justify-center">
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Edukasi</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Olahraga</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Games</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Musik</button>
                        <button className="bg-white py-3 px-5 flex flex-row gap-[15px] rounded-[20px] text-[20px] items-center w-[250px]"><img src={Icon} alt="" className="w-[50px] h-auto" /> Pecinta Hewan</button>
                    </div>
                </div>

                <div className="w-full h-auto items-center justify-center flex">
                    <div className="w-[75%] h-auto items-start mb-10">
                        <h1 className="text-[32px] font-bold text-[#FFBE3F] mb-8">Hasil Pencarian</h1>
                        <Card />
                    </div>
                </div>

                <div className="w-full h-auto bg-[#FFBE3C] items-center justify-center flex flex-col font-bold text-[32px] py-16">
                    <h1>Tidak menemukan Komunitas yang Kamu cari ?</h1>
                    <h1>Ayo buat komunitasmu sendiri !</h1>
                    <a href="#">
                        <div className="mt-5 px-[40px] py-[15px] rounded-[16px] bg-[#6E3CBC] text-[#FFBE3F] text-[24px] font-semibold">Buat Komunitas Kamu</div>
                    </a>
                </div>

                <div className="w-full h-auto flex flex-row px-[100px] py-[72px] items-center justify-center gap-10">
                    <div className="flex flex-col w-[40%]">
                        <h1 className="font-bold text-[50px] text-[#FFBE3F]">Temukan tempat terbaik dan ternyamanmu</h1>
                        <p className="text-[20px] font-medium text-white mt-5 text-justify" >Sosialify membantu kamu untuk menemukan tempat terbaik dan ternyamanmu, dimana hobi dan  minat berada disatu tempat yang sama dan terstruktur dengan baik sehingga membentuk interaksi yang  saling membangun  satu sama lain dengan baik. </p>
                        <a href="#" className="w-[300px]">
                            <div className="mt-5 px-[40px] w-[280px] h-[60px] flex items-center rounded-[10px] justify-center bg-[#6E3CBC] text-[#FFBE3F] text-[20px] font-semibold">Gabung Socialify</div>
                        </a>
                    </div>
                    <img src={Sider} alt="" className="w-[642px] h-auto" />
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default SearchCommunityPage