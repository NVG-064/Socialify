import foto from "../assets/images/speaker.png";
import Om from "../assets/images/micoff.png";

function Speaker1() {
    return (
        <div className="flex flex-col items-center justify-center text-white">
            <div className="flex w-full h-auto items-center justify-center flex-row">
                <img src={foto} alt="Avatar" className="rounded-[50%] w-[85px] h-auto" />
                <img src={Om} alt="Offmic" className="rounded-[50%] bg-red-700 absolute mr-[-60px] mt-[-60px]" />
            </div>
            <h1 className="px-[20px] py-[5px] bg-[#757575] rounded-[10px] mt-[-10px]">Pembicara</h1>
            <h1 className="font-medium mt-2">Reza Kecap</h1>
        </div>

    )
}

export default Speaker1