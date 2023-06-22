import foto from "../assets/images/speaker.png";

function Speaker0() {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={foto} alt="speaker picture" className="rounded-[50%] w-[85px] h-auto" />
            <h1 className="px-[20px] py-[5px] bg-[#ffbe3f] rounded-[10px] text-black mt-[-10px]">Pembicara</h1>
            <h1 className="font-medium mt-2">Reza Kecap</h1>
        </div>

    )
}

export default Speaker0