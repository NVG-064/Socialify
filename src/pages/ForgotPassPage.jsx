import InputElement from "../components/InputComponent";

export default function ForgotPass() {
    return (
        <>
            <section className="bg-purple-sosialify grid place-content-center h-screen">
                <form action="" className="max-w-96 h-96 p-9 rounded-md box-forgot-password">
                    <h1 className="text-yellow-500 text-2xl font-semibold">Lupa kata sandi?</h1>
                    <p className="text-xs text-white">Pilih kontak untuk mengatur ulang kata sandi</p>

                    <InputElement
                        classNameInput="bg-purple-500 rounded-md"
                        text="email"
                        type="email"
                        placeholder="Masukkan E-Mail Anda"
                    />
                    <InputElement
                        classNameInput="bg-purple-500 rounded-md"
                        text="Nomor Telepon"
                        type="tel"
                        placeholder="Masukkan nomor telepon Anda"
                    />

                    <div className="flex justify-end">
                        <button className="bg-yellow-500 rounded-lg px-10 my-5 py-2 font-semibold">Lanjutkan</button>
                    </div>
                </form>
            </section>
        </>
    );
}
