import React from "react";
import BgSection from "../components/bgComponent";
import InputRegister from "../components/inputComponent";
import "../assets/css/style.css";

export default function Register() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <section className="bg-purple-sosialify flex flex-col justify-center">
          <form action="" className="w-full mx-auto rounded-lg bg-login p-1 px-8">
            <h2 className="text-4xl text-yellow-500 font-bold">Daftar Sekarang</h2>
            <p className="text-white w-64 my-4 text-sm">Temukan berbagai komunitas dengan hobi dan minat yang sama</p>

            <div className="flex gap-x-5">
              <InputRegister
                className="flex-initial w-full"
                text="Nama Pertama"
                type="text"
                placeholder="Masukkan nama pertama Anda"
              />

              <InputRegister
                className="flex-initial w-full"
                text="Nama Akhir"
                type="text"
                placeholder="Masukkan nama akhir Anda"
              />
            </div>

            <InputRegister text="Nomor Telepon" type="tel" placeholder="Masukkan nomor telepon Anda" />

            <InputRegister text="Alamat Email" type="email" placeholder="Masukkan email Anda" />

            <InputRegister text="Kata Sandi" type="password" placeholder="Masukkan kata sandi Anda" />

            <InputRegister text="Konfirmasi Kata Sandi" type="password" placeholder="Konfirmasi kata sandi Anda" />

            <div className="flex justify-end">
              <button className='my-5 px-10 py-2 bg-yellow-500 rounded-lg font-semibold'>Lanjutkan</button>
            </div>
          </form>
        </section>

        <BgSection />
      </div>
    </>
  );
}
