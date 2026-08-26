import { useEffect, useState } from "react";
import i18n from "../i18n";

import DWITAMA from "../assets/Mitra/DWITAMA.png";
import ICA from "../assets/Mitra/ICA.png";
import JAPA from "../assets/Mitra/JAPA.png";
import KATALIS from "../assets/Mitra/KATALIS SINERGI INDONESIA.png";
import PLN from "../assets/Mitra/PLN.png";
import SOLUSINDO from "../assets/Mitra/SOLUSINDO.png";
import TAKA from "../assets/Mitra/TAKA.png";
import TAMARIS from "../assets/Mitra/TAMARIS HYDR.png";

function Mitra() {
  const [, setCurrentLang] = useState(i18n.language || "id");

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

  const mitraList = [
    { image: JAPA, alt: "PT JAPA Indo Tama" },
    { image: DWITAMA, alt: "DWITAMA" },
    { image: ICA, alt: "ICA", className: "scale-[1.4]" },
    { image: PLN, alt: "PLN Nusantara Power" },
    { image: KATALIS, alt: "Katalis Sinergi Indonesia" },
    { image: TAKA, alt: "TAKA Turbomachinery" },
    { image: SOLUSINDO, alt: "Solusindo Integrata Praetoria" },
    { image: TAMARIS, alt: "Tamaris Hydro" },
  ];

  // Duplikasi list agar pergerakan tidak terputus
  const duplicatedMitraList = [...mitraList, ...mitraList];

  return (
    <section
      id="mitra"
      className="w-full bg-[#f5f6ff] px-6 py-16 md:px-10 lg:px-12 overflow-hidden"
    >
      {/* Definisi Animasi CSS Langsung */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 20s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            {t("judul_mitra")}
          </h2>
        </div>

        {/* Outer Container Overflow Hidden */}
        <div className="w-full overflow-hidden relative">
          {/* Inner Animated Container */}
          <div className="animate-scroll-left gap-5">
            {duplicatedMitraList.map((mitra, index) => (
              <div
                key={index}
                className="w-[235px] h-[164px] bg-white rounded-[10px] overflow-hidden border-[3px] border-[#806758] shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex flex-col shrink-0"
              >
                <div className="w-full h-[30px] shrink-0 bg-[#F8BCBD] border-b-[1px] border-[#806758] flex items-center justify-end px-[10px] gap-[7px]">
                  <div className="flex items-center gap-[2px]">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H17"
                        stroke="#806758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="6.5"
                        y="6.5"
                        width="10"
                        height="10"
                        stroke="#806758"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 7L16 16"
                        stroke="#806758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16 7L7 16"
                        stroke="#806758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 w-full flex items-center justify-center px-[14px] py-[8px]">
                  <img
                    src={mitra.image}
                    alt={mitra.alt}
                    className={`max-w-full max-h-full object-contain ${
                      mitra.className || ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mitra;