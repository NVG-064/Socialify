import Tag from "../assets/images/Socialify.png";
import CR from "../assets/images/Copyright.png";
import Conn from "../assets/images/Connect.png";
import Mail from "../assets/images/Letter.png";
import FB from "../assets/images/Facebook.png";
import LI from "../assets/images/LinkedIn.png";
import IG from "../assets/images/Instagram.png";
import TW from "../assets/images/Twitter.png";
import GP from "../assets/images/gplay.png";

function Footer() {
    return (
        <div className="w-full h-auto bg-[#222227] flex-1 flex-col items-center justify-center text-[#F5F1FB] text-center py-14">
            <div className="flex flex-row w-[80%] h-auto ">
                <div className="flex flex-col text-left border-r-2 px-[52px]">
                    <img src={Tag} alt="Socialify" className="w-[150px] h-auto mb-5" />
                    <p className="float-left w-[483px] text-justify text-[20px]">Membantu menemukan tempat terbaik dan ternyamanmu, dimana hobi dan  minat berada disatu tempat yang sama yang terstruktur dengan baik sehingga dapat membentuk interaksi yang  saling membangun  satu sama lain dengan baik. </p>
                </div>
                <div className="flex flex-row text-left border-r-2 px-[52px] gap-[70px] text-[20px] items-center justify-center">
                    <ul>
                        <li className="mb-[20px]">Privacy Policy</li>
                        <li className="mb-[20px]">Contact Us</li>
                        <li >Socialify.club</li>
                    </ul>
                    <ul>
                        <li className="mb-[20px]">Terms of Service</li>
                        <li className="mb-[20px]">Cookie Settings</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="flex flex-col text-left px-[52px]">
                    <img src={Conn} alt="" className="w-[280px] h-auto" />
                    <div className="flex flex-row gap-[20px] items-center justify-left mt-9">
                        <a href="#"><img src={Mail} alt="Email" className="w-[40px] h-auto" /></a>
                        <a href="#"><img src={LI} alt="Email" className="w-[40px] h-auto" /></a>
                        <a href="#"><img src={FB} alt="Email" className="w-[40px] h-auto" /></a>
                        <a href="#"><img src={IG} alt="Email" className="w-[40px] h-auto" /></a>
                        <a href="#"><img src={TW} alt="Email" className="w-[40px] h-auto" /></a>
                    </div>
                    <a href="#" className="w-[200px] h-auto mt-9"><img src={GP} alt="" className="w-full h-auto" /></a>
                </div>

            </div>
            <img src={CR} alt="" className="pl-12 w-[450px] h-auto mt-[60px]" />
        </div>
    )
}

export default Footer;