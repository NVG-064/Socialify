import Navbar1 from "../components/NavbarComponent1";
import Footer from "../components/FooterComponent";
import Sampul from "../assets/images/sampul.png";
import Prof from "../assets/images/liveprof.jpg";
import Speaker0 from "../components/SpeakerComponent0";
import { useNavigate } from "react-router-dom";

function Live0() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#20043F] text-white">
            <Navbar1 />
            <div>
                <img src={Sampul} alt="" className="w-full h-auto" />
                <button onClick={() => navigate('/event-page')} className="absolute top-[15%] ml-16">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <div className="w-full h-auto absolute top-[23%] flex flex-col items-center justify-center text-white">
                    <img src={Prof} alt="" className=" w-[120px] h-auto rounded-[50%] mb-3" />
                    <h1 className="font-bold text-white text-[20px] mb-3">Nongkrong Bersama Bahas Ngoding</h1>
                    <div className="flex flex-row gap-5 items-center justify-center mb-3">
                        <p>@reza.kecap.com</p>
                        <p className="bg-white px-[10px] py-[5px] text-black rounded-[10px] font-bold">Host</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center mb-3">
                        <h3 className="flex flex-row bg-[#222227] px-[10px] py-[5px] rounded-[10px] font-medium gap-[10px] items-center justify-center">LIVE
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FFBE3F]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg></h3>
                        <h3 className="flex flex-row bg-[#222227] px-[10px] py-[5px] rounded-[10px] font-medium gap-[10px] items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="fill-[#ffbe3f]"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                        </h3>
                    </div>
                    <h1 className="font-bold text-[20px]">Mahir Programming</h1>
                    <div className="mt-[32px] w-[30%] flex flex-row items-center justify-center gap-3">
                        <button onClick={() => navigate('/live-audio/gabung')} className="w-full h-auto bg-[#ffbe3f] font-medium py-2 rounded-[10px] text-black">Gabung</button>
                        <button className="py-2 px-5 rounded-[10px] bg-[#ffbe3f]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="font-bold text-[32px] ml-[10%] mt-8 mb-5">Deskripsi</h1>
            <p className="px-[10%] mb-8">Panggilan untuk sahabatku tercinta pelaku komunitas Mahir Programmer!!!  Ayo bergabung dalam  sesi pelatihan eksklusif. Membahas dasar-dasar percodingan untuk permula yang ingin masuk ke dunia percodingan. Diskusi bareng  para pembicara handal di bidangnya.
            </p><hr className="w-[90%] ml-[5%]" />
            <h1 className="font-bold text-[32px] ml-[10%] mt-8 mb-5">Pembicara</h1>
            <div className="flex flex-col items-start px-[10%] gap-5 mb-[32px]">
                <div className="flex flex-row gap-5">
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                </div>
                <div className="flex flex-row gap-5">
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                    <Speaker0 />
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Live0