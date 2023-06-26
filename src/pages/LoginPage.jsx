import { NavLink } from 'react-router-dom'
import BackgroundComponent from '../components/BackgroundComponent'
import InputComponent from '../components/InputComponent'
import google from '../assets/icons/Google.png'
import facebook from '../assets/icons/facebook.png'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <BackgroundComponent />
            <div className='bg-purple-sosialify flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-purple-sosialify p-1 px-8' action=''>
                    <h2 className='text-4xl text-yellow-500 font-bold text-center'>Selamat Datang</h2>
                    <p className='text-white text-center mt-4'>Belum memiliki akun? <NavLink to="/register" className='text-red-500'>Daftar Sekarang</NavLink></p>
                    <InputComponent text='Email' type='email' placeholder='Masukkan email Anda' />
                    <InputComponent text='Password' type='password' placeholder='Masukkan password Anda' />

                    <div className='flex justify-end text-gray-400 py-2'>
                        <NavLink to="/forgot-password" className='text-xs'>Lupa kata sandi?</NavLink>
                    </div>
                    <button onClick={() => navigate('/search-community')} className='w-full my-5 py-2 bg-yellow-500 text-black shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 font-semibold rounded-lg'>Masuk</button>

                </form>

                <div className="flex justify-center mb-5">
                    <p className='text-white font-bold relative line'>Atau</p>
                </div>

                <div className="flex flex-col flex-wrap content-center gap-3">
                    <button className='bg-white rounded-xl py-2 px-8 btn-auth'><NavLink to="#" className='flex justify-between'> <img className='w-6 aspect-square object-contain mr-4 xl:ml-14' src={google} alt="" /> <span className="mr-auto">Masuk dengan Google</span></NavLink></button>
                    <button className='bg-white rounded-xl py-2 px-8 btn-auth'><NavLink to="#" className='flex justify-between'> <img className='w-6 aspect-square object-contain mr-4 xl:ml-14' src={facebook} alt="" /> <span className="mr-auto">Masuk dengan Facebook</span></NavLink></button>
                </div>

                <NavLink to="#" className='text-orange-300 ml-16 mt-16'>Kembali ke beranda</NavLink>
            </div>
        </div>
    )
}