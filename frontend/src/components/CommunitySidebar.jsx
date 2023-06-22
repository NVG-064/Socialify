import gambar from "../assets/images/usersidebar.png"
import bulb from "../assets/icons/bulb.svg"
import komunitas from "../assets/icons/Community.svg"
import doll from "../assets/icons/doll.svg"
import key from "../assets/icons/key.svg"
import logout from "../assets/icons/Logout.svg"
import party from "../assets/icons/party.svg"
import check from "../assets/icons/check.svg"
import { useNavigate } from 'react-router-dom'

export default function CommunitySidebar() {
    const navigate = useNavigate()

    return (
        <>
            <aside className="bg-purple-sosialify w-full lg:w-80 h-max shadow-md shadow-purple-950 row-span-3 md:sticky top-0">
                <div className="grid place-content-center py-8">
                    <img className="border-4 rounded-full p-1 " src={gambar} alt="" />
                </div>
                <div className="flex flex-col px-8 pb-10">
                    <button onClick={() => navigate('/description-page')} className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Deskripsi Komunitas <img src={bulb} alt="" />
                    </button>
                    <button onClick={() => navigate('/discussion-page')} className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Forum Diskusi <img src={komunitas} alt="" />
                    </button>
                    <button onClick={() => navigate('/member-page')} className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Anggota <img src={doll} alt="" />
                    </button>
                    <button onClick={() => navigate('/moderator-page')} className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Moderator dan Admin <img src={key} alt="" />
                    </button>
                    <button onClick={() => navigate('/event-page')} className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Event <img src={party} alt="" />
                    </button>
                    <button className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Review Komunitas <img src={check} alt="" />
                    </button>
                    <button className="flex justify-between px-3 items-center btn-purple-gradient py-2 my-2 rounded-2xl text-white">
                        Keluar Komunitas <img src={logout} alt="" />
                    </button>
                </div>
            </aside>
        </>
    );
}