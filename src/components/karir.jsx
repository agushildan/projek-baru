import Footer from "./Footer";
import karirImage from "../assets/karir.png";

function Karir() {
  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HERO KARIR
      ========================== */}
      <section className="w-full bg-[#DCEAF5] py-12 md:py-14">
        <div className="max-w-[1050px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* KIRI */}
            <div className="-translate-x-[60px]">
              <h1
                className="font-semibold leading-[100%] text-[55px] md:text-[65px] tracking-[10%] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                style={{
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                <span className="block text-[#803436]">Hallo!</span>

                <span className="block text-[#131838] whitespace-nowrap">
                  Mulai Karir Anda
                </span>

                <span className="flex items-center gap-3 text-[#131838]">
                  <span>di</span>

                  <img
                    src="/digilogo2.png"
                    alt="Digi"
                    className="w-[135px] h-auto object-contain"
                  />
                </span>
              </h1>

              <p
                className="mt-0.1 text-[#172044] text-[23px] md:text-[23px] font-bold"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Kami sedang membuka lowongan di bagian :
              </p>

              <div
                className="mt-2 text-[#172044] text-[20px] md:text-[20px] leading-[1.5]"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <p>• Marketing</p>
                <p className="ml-4">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. In in ornare nisl.
                </p>

                <p className="mt-1">• Purchasing</p>
                <p className="ml-4">
                  Lorem ipsum dolor sit amet, consectetur
                  <br />
                  adipiscing elit. In in ornare nisl.
                </p>
              </div>

              {/* BUTTON */}
              <button
                type="button"
                className="
    mt-8
    translate-x-[15px]
    w-[170px]
    h-[48px]
    bg-[#F7DADA]
    text-[#111A45]
    text-[18px]
    font-semibold
    rounded-full
    border
    border-[#111A45]
    shadow-[-7px_7px_0_#111A45]
    hover:translate-y-[2px]
    hover:shadow-[-5px_5px_0_#111A45]
    transition-all
    duration-200
    cursor-pointer
  "
                style={{
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                Lamar Sekarang
              </button>
            </div>

            {/* KANAN */}
            <div className="flex justify-center md:justify-end translate-x-[70px] translate-y-[10px]">
              <div className="relative w-full max-w-[450px] aspect-[1.5/1]">
                {/* BINGKAI BIRU DI BELAKANG */}
                <div
                  className="
    absolute
    left-[-18px]
    top-[18px]
    w-full
    h-full
    rounded-[18px]
    border-[5px]
    border-[#8FC7E8]
    shadow-[0_6px_10px_rgba(23,32,68,0.18)]
    z-0
  "
                ></div>

                {/* BINGKAI MERAH + GAMBAR */}
                <div
                  className="
        relative
        w-full
        h-full
        rounded-[18px]
        border-[5px]
        border-[#AE4A4A]
        overflow-hidden
        bg-white
        z-10
      "
                >
                  <img
                    src={karirImage}
                    alt="Karir Digi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default Karir;
