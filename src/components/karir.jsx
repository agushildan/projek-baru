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
            <div>
              <h1
                className="font-bold leading-[105%] text-[42px] md:text-[52px]"
                style={{
                  fontFamily: "'Belanosima', sans-serif",
                }}
              >
                <span className="block text-[#9F3F3F]">Hallo!</span>

                <span className="block text-[#111A45]">Mulai Karir Anda</span>

                <span className="block text-[#111A45]">
                  di <span className="text-[#4C9BD0]">digi</span>
                </span>
              </h1>

              <p
                className="mt-5 text-[#172044] text-[14px] md:text-[15px] font-semibold"
                style={{
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Kami sedang membuka lowongan di bagian :
              </p>

              <div
                className="mt-2 text-[#172044] text-[13px] md:text-[14px] leading-[1.5]"
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
                  px-6
                  py-2.5
                  bg-[#F7DADA]
                  text-[#172044]
                  font-bold
                  text-[13px]
                  rounded-full
                  border
                  border-[#172044]
                  shadow-[0_4px_0_#172044]
                  hover:translate-y-[2px]
                  hover:shadow-[0_2px_0_#172044]
                  transition-all
                  duration-200
                  cursor-pointer
                "
                style={{
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Lamar Sekarang
              </button>
            </div>

            {/* KANAN */}
            <div className="flex justify-center md:justify-end">
              <div
                className="
                  w-full
                  max-w-[400px]
                  aspect-[1.15/1]
                  rounded-[18px]
                  border-[5px]
                  border-[#AE4A4A]
                  overflow-hidden
                  shadow-[0_8px_0_rgba(23,32,68,0.18)]
                  bg-white
                "
              >
                {/* TEMPAT GAMBAR */}
                <div className="flex justify-center md:justify-end">
                  <div
                    className="
      w-full
      max-w-[400px]
      aspect-[1.15/1]
      rounded-[18px]
      border-[5px]
      border-[#AE4A4A]
      overflow-hidden
      shadow-[0_8px_0_rgba(23,32,68,0.18)]
      bg-white
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
