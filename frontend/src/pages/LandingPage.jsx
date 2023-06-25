// import { useNavigate } from "react-router-dom"
import Footer from "../components/FooterComponent"
import Navbar0 from "../components/NavbarComponent0"
import Hero from "../assets/images/hero.png"
import Gplay from "../assets/images/gplay.png"

const LandingPage = () => {
    // const navigate = useNavigate()

    return (
        <>
            <Navbar0 />
            <div className="lg:px-6 xl:px-0">
                <div className="mx-auto container z-0 px-8 xl:px-10 bg-purple-sosialify opacity-90">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-32">
                            <h1 className="pl-16 text-2xl lg:text-3xl xl:text-3xl font-black text-white text-center tracking-tighter md:w-7/12 leading-tight">Temukan berbagai komunitas bersama Socialify</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:py-8 text-white text-lg lg:text-1xl">Terhubung bersama melalui hobi dan minat yang sama yang tergabung dalam satu komunitas. Membangun komunitas yang nyaman dan struktural bersama-sama.</h2>
                            <div className="pl-16 w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-[#FFBE3F] py-3 px-8 lg:py-3 lg:px-20 rounded-lg text-[#20043F] text-sm md:text-lg f-f-p">Gabung Socialify</button>
                            </div>
                            <div>
                                <h1 className="pl-14 py-8 text-2xl lg:text-2xl xl:text-2xl font-medium text-white text-center tracking-tighter md:w-7/12 leading-tight">Tersedia juga di</h1>
                                <img className="px-32 h-16" src={Gplay} alt="Google Play Store" />
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center">
                            <img src={Hero} alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage