import React from 'react'

import loginImg from '../assets/login.svg'
import google from '../assets/Google.png'
import facebook from '../assets/facebook.png'
import './login.css'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block overflow-hidden relative'>
        <img className='w-full h-full object-cover absolute' src={loginImg} alt="" />
        <h1 className='absolute text-7xl text-white top-40 left-64 header-text'>Socialify</h1>
      </div>
      <div className='bg-login flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-login p-1 px-8' action=''>
          <h2 className='text-4xl text-yellow-500 font-bold text-center'>Selamat Datang</h2>
          <p className='text-white text-center mt-4'>Belum memiliki akun? <a href="#" className='text-red-500'>Daftar Sekarang</a></p>
          <div className='flex flex-col text-gray-400 mt-8 py-2 coolinput'>
            <label className='text bg-login'>Email</label>
            <input className='bg-transparent input' type="email" placeholder='Masukkan email Anda' />
          </div>
          <div className='flex flex-col text-gray-400 py-2 coolinput'>
            <label className='text bg-login'>Kata sandi</label>
            <input className='bg-transparent input' type="password" placeholder='Masukkan kata sandi Anda' />
          </div>
          <div className='flex justify-end text-gray-400 py-2'>
            <a href="#" className='text-xs'>Lupa kata sandi?</a>
          </div>
          <button className='w-full my-5 py-2 bg-yellow-500 text-black shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Masuk</button>

        </form>

        <div className="flex justify-center mb-5">
          <p className='text-white font-bold relative line'>Atau</p>
        </div>

        <div className="flex flex-col flex-wrap content-center gap-3">
          <button className='bg-white rounded-xl py-2 px-8 btn-auth'><a href="#" className='flex justify-between'> <img className='w-6 mr-4 ml-14' src={google} alt="" /> <span className="mr-auto">Masuk dengan Google</span></a></button>
          <button className='bg-white rounded-xl py-2 px-8 btn-auth'><a href="#" className='flex justify-between'> <img className='w-6 mr-4 ml-14' src={facebook} alt="" /> <span className="mr-auto">Masuk dengan Facebook</span></a></button>
        </div>

        <a href="#" className='text-orange-300 ml-16 mt-16'>Kembali ke beranda</a>
      </div>
    </div>
  )
}