import foto from "../assets/images/bgimage.png";
import Navbar1 from "../components/NavbarComponent1";
import Speaker0 from "../components/SpeakerComponent0";
import Speaker1 from "../components/SpeakerComponent1";
import Farhan from "../assets/images/farhan.png";
import { useNavigate } from "react-router-dom";

function Live1() {
    const navigate = useNavigate()

    return (
        <div className="bg-[#20043F] text-white">
            <Navbar1 />
            <img src={foto} alt="" className="w-full h-auto" />
            <button onClick={() => navigate('/live-audio')} className="absolute top-[15%] ml-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <div className="absolute top-[25%] pl-[10%] flex flex-col w-full">
                <div className="flex items-center gap-5 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <h1 className="text-[32px] font-medium">Nongkrong Bersama Bahas Coding</h1>
                </div>
                <h1 className="text-[32px] font-medium mt-[3%] pl-[5%]">10 Pembicara</h1>
                <ul className="flex flex-row gap-5 mt-8">
                    <li><Speaker1 /></li>
                    <li><Speaker1 /></li>
                    <li><Speaker1 /></li>
                    <li><Speaker1 /></li>
                    <li><Speaker1 /></li>
                </ul>
                <ul className="flex flex-row gap-5 mt-8">
                    <li><Speaker0 /></li>
                    <li><Speaker0 /></li>
                    <li><Speaker0 /></li>
                    <li><Speaker0 /></li>
                    <li><Speaker0 /></li>
                </ul>

                <div className="w-full h-auto flex flex-col items-end pr-[150px] gap-[30px]">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </button>
                    <img src={Farhan} alt="Avatar" className="w-[48px] h-auto" />
                    {/* <h1 className="text-[25px] font-bold">Farhan Kebab</h1> */}
                </div>
            </div>
        </div>
    )
}

export default Live1