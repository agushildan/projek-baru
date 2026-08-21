import { useEffect, useState } from "react";
import i18n from "../i18n";
import fotoKegiatan from "../assets/Kegiatan/foto kegiatan.jpg";

function Kegiatan() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section
      id="kegiatan"
      className="w-full bg-[#dfeefc] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================
            CONTENT
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] items-center gap-12 lg:gap-16">
          {/* =========================
              TEXT
          ========================== */}
          <div className="max-w-[560px]">
            <h2 className="font-['Cormorant_Garamond'] text-[#666666] text-3xl md:text-4xl font-semibold tracking-wide">
              {t("judul_kegiatan", "KEGIATAN")}
            </h2>
            <p className="mt-8 font-['Nunito Sans'] text-[#666666] text-base md:text-[17px] leading-[1.65]">
              {t(
                "deskripsi_kegiatan",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt tempus leo non porta. Vivamus sem tellus, pulvinar ut rhoncus sed, maximus id lectus. Donec viverra fermentum turpis. Donec ornare euismod iaculis. Cras vulputate, diam non gravida convallis, ipsum neque dapibus nunc, eu pulvinar orci dui at nisl. Nulla rutrum eget odio in venenatis.",
              )}
            </p>
            <button
              type="button"
              className="mt-8 bg-[#c84d4d] hover:bg-[#b94343] text-white font-['Nunito'] font-semibold text-sm md:text-base px-5 md:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              {t("tombol_kegiatan", "Lihat Kegiatan Lainnya Disini")}
            </button>
          </div>

          {/* =========================
              INSTAGRAM CARD
          ========================== */}
          <div className="flex justify-center lg:justify-end lg:pr-2">
            <div className="w-[360px] md:w-[380px] bg-white rounded-[16px] overflow-hidden shadow-sm">
              {/* =========================
                  INSTAGRAM HEADER
              ========================== */}
              <div className="h-[72px] px-[18px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* LOGO DIGI */}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#eaf8fb] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src="/digilogo2.png"
                      alt="Digi"
                      className="w-full h-full object-contain p-[5px]"
                    />
                  </div>

                  {/* USERNAME */}
                  <span className="font-['Nunito Sans'] text-[14px] font-bold text-[#333333]">
                    digiteknoindo
                  </span>
                </div>

                {/* THREE DOT */}
                <span className="text-[#444444] text-[16px] font-bold tracking-[2px]">
                  •••
                </span>
              </div>

              {/* =========================
    FOTO + DOT INDICATOR
========================== */}
              <div className="px-[18px]">
                <div className="relative w-full">
                  <img
                    src={fotoKegiatan}
                    alt="Kegiatan Digi Tekno Indonesia"
                    className="block w-full aspect-square object-cover rounded-[2px]"
                  />

                  {/* DOT INDICATOR */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[12px] flex items-center gap-[4px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#b8b8b8]" />
                    <span className="w-[6px] h-[6px] rounded-full bg-[#4b8cc0]" />
                    <span className="w-[5px] h-[5px] rounded-full bg-[#b8b8b8]" />
                  </div>
                </div>
              </div>

              {/* =========================
                  INSTAGRAM CONTENT
              ========================== */}
              <div className="px-[18px] pt-3 pb-[16px]">
                {/* ACTION ICONS */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    {/* LIKE */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="#ed1c24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                    </svg>

                    {/* COMMENT */}
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#444444"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                    </svg>

                    {/* SHARE / PAPER PLANE */}
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#555555"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 2 11 13" />
                      <path d="m22 2-7 20-4-9-9-4Z" />
                    </svg>
                  </div>

                  {/* BOOKMARK */}
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="#444444"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 3a2 2 0 0 0-2 2v17l8-4 8 4V5a2 2 0 0 0-2-2H6Z" />
                  </svg>
                </div>

                {/* LIKES */}
                <p className="mt-2 font-['Nunito Sans'] text-[14px] font-bold text-[#333333]">
                  2,022 likes
                </p>

                {/* CAPTION */}
                <p className="mt-1 font-['Nunito Sans'] text-[11px] leading-[1.4] text-[#777777]">
                  <span className="font-bold text-[#333333]">
                    digiteknoindo
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  tincidunt tempus leo non porta. dolor sit amet
                </p>

                {/* DATE */}
                <p className="mt-3 font-['Nunito Sans'] text-[9px] text-[#999999]">
                  July 15, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
