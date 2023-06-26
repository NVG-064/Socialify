import "../dist/css/eksplor.css";
import { Icon } from '@iconify/react';

export default function Eksplor() {
    return (
        <>
            <div className="w-full flex gap-[20px] flex-col pb-16">
                <button className="mt-[20px] ml-[20px]">
                    <Icon icon="ph:arrow-up-bold" color="white" width="50" height="50" rotate={3} />
                </button>
                <div className="w-full flex flex-col items-center gap-[10x] justify-center">
                    <h1 className="font-bold text-[#FFBE3C] text-[40px]">Jelajahi</h1>
                    <h1 className="font-medium text-white text-[25px]">Pilih Hobi dan minat sesuai dengan keinginan kamu</h1>
                </div>
                <section className="items-center justify-center px-[10%]">
                    <div class="tile">
                        <input type="checkbox" name="gaming" id="game" />
                        <label for="game">
                            <Icon icon="fluent-emoji:joystick" color="white" width="100px" />
                            <h1>Gaming</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="sospol" id="sp" />
                        <label for="sp">
                            <Icon icon="map:political" color="#ffbe3c" width="100" />
                            <h1>Sosial dan Politik</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="photo" id="pg" />
                        <label for="pg">
                            <Icon icon="fluent-emoji:camera-with-flash" color="#ffbe3c" width="100" height="100" />
                            <h1>Photography</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="programming" id="coding" />
                        <label for="coding">
                            <Icon icon="solar:programming-bold" color="#2bbb07" width="100" height="100" />
                            <h1>Programming</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="horror" id="hor" />
                        <label for="hor">
                        <Icon icon="fluent-emoji:ghost" color="#ff5c00" width="100" height="100" />
                            <h1>Horor dan Misteri</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="hewan" id="hp" />
                        <label for="hp">
                            <Icon icon="fluent-emoji:cat" width="100" height="100" />
                            <h1>Hewan Peliharaan</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="alam" id="pa" />
                        <label for="pa">
                            <Icon icon="fluent-emoji:camping" width="100" height="100" />
                            <h1>Pecinta Alam</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="kuliner" id="makan" />
                        <label for="makan">
                            <Icon icon="noto:pot-of-food" width="100" height="100" />
                            <h1>Kuliner</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="health" id="sehat" />
                        <label for="sehat">
                            <Icon icon="ic:twotone-health-and-safety" color="#0085ff" width="100" height="100" />
                            <h1>Kesehatan</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="olahraga" id="sport" />
                        <label for="sport">
                            <Icon icon="mdi:youtube-sports" color="#ff5c00" width="100" height="100" />
                            <h1>Olahraga</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="film" id="fb" />
                        <label for="fb">
                            <Icon icon="fluent-emoji:movie-camera" color="#ff5c00" width="100" height="100" />
                            <h1>Film dan Buku</h1>
                        </label>
                    </div>
                    <div class="tile">
                        <input type="checkbox" name="belajar" id="learn" />
                        <label for="learn">
                            <Icon icon="noto:books" color="#ff5c00" width="100" height="100" />
                            <h1>Belajar</h1>
                        </label>
                    </div>
                </section>
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                    <button className="text-white text-[20px]">Lewati untuk saat ini</button>
                    <button className="bg-[#FFBE3F] items-center justify-center w-[30%] rounded-[10px] py-[10px] font-bold text-[20px]">Lanjutkan</button>
                </div>
            </div>
        </>
    )
}