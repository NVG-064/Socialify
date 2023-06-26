import bgLogReg from "../assets/images/login.svg";

export default function BackgroundComponent() {
    return (
        <>
            <section className="hidden sm:block overflow-hidden relative">
                <img src={bgLogReg} alt="Background Cover" className="w-full h-full object-cover absolute" />
                <h1 className="absolute text-7xl text-white top-40 left-64 header-text">Socialify</h1>
            </section>
        </>
    );
}
