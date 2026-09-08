import { useEffect, useState } from "react";

import i18n from "../i18n";

import webBerita from "../assets/produk/web_berita.png";
import machin from "../assets/produk/machin.png";
import tube from "../assets/produk/tube.png";

function Portfolio() {
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

  const portfolioList = [
    {
      title: "Website Sistem Informasi Manajemen",

      description: "Website Landing Page Dispangtan Kota Cimahi",

      image: webBerita,

      tags: ["Software IT", "Website", "Dashboard"],
    },

    {
      title: "Jasa Machining Torque Tube Seal",

      description:
        "Industri Komponen dan Suku Cadang Mesin dan Turbin (KBLI 28113)",

      image: machin,

      tags: ["Mekanikal Engineering", "Machining", "PT. JAPA INDOTAMA"],
    },

    {
      title: "Starret Back Plunger",

      description:
        "Industri Komponen dan Suku Cadang Mesin dan Turbin (KBLI 28113)",

      image: tube,

      tags: ["Pengadaan Sparepart", "PT. TAKA"],
    },
  ];

  return (
    /* pt-24 md:pt-32 digunakan untuk menurunkan Judul & seluruh isinya ke bawah */
    <section className="w-full bg-[#DEE4F7] px-4 pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL DAN DESKRIPSI */}
        <div className="text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            PORTOFOLIO
          </h2>

          <p className="font-nunito mt-4 max-w-5xl mx-auto text-[13px] md:text-[14px] font-normal leading-[1.6] text-gray-600">
            {t(
              "deskripsi_portofolio",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>

          {/* TOMBOL LIHAT SELENGKAPNYA */}
          <button
            type="button"
            className="mt-5 bg-[#c8e3f7] hover:bg-[#b5d9f2] text-gray-600 text-xs md:text-sm px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-3 cursor-pointer"
          >
            Lihat Selengkapnya
            <svg
              width="12"
              height="12"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "translateY(2px)" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.9167 6.42839C16.9167 6.11897 16.7938 5.82222 16.575 5.60343C16.3562 5.38464 16.0595 5.26172 15.7501 5.26172H1.16675C0.857328 5.26172 0.560581 5.38464 0.341788 5.60343C0.122996 5.82222 8.02279e-05 6.11897 8.02279e-05 6.42839C8.02279e-05 6.7378 0.122996 7.03455 0.341788 7.25334C0.560581 7.47214 0.857328 7.59505 1.16675 7.59505H15.7501C16.0595 7.59505 16.3562 7.47214 16.575 7.25334C16.7938 7.03455 16.9167 6.7378 16.9167 6.42839Z"
                fill="#666666"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.6667 6.431C18.6667 6.12161 18.5437 5.82491 18.3249 5.60617L13.0749 0.35617C12.9673 0.244741 12.8386 0.155862 12.6962 0.094718C12.5539 0.0335742 12.4008 0.00139017 12.2459 4.40491e-05C12.091 -0.00130207 11.9373 0.0282169 11.794 0.0868779C11.6506 0.145539 11.5203 0.232168 11.4108 0.341709C11.3012 0.451251 11.2146 0.581511 11.156 0.72489C11.0973 0.868269 11.0678 1.0219 11.0691 1.1768C11.0705 1.33171 11.1027 1.4848 11.1638 1.62714C11.2249 1.76948 11.3138 1.89821 11.4252 2.00584L15.8504 6.431L11.4252 10.8562C11.2127 11.0762 11.0951 11.3709 11.0978 11.6768C11.1005 11.9827 11.2232 12.2753 11.4395 12.4916C11.6558 12.7079 11.9484 12.8306 12.2543 12.8333C12.5602 12.8359 12.8549 12.7184 13.0749 12.5058L18.3249 7.25584C18.5437 7.03709 18.6667 6.7404 18.6667 6.431Z"
                fill="#666666"
              />
            </svg>
          </button>
        </div>

        {/* CARD PORTOFOLIO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-[1000px] mx-auto">
          {portfolioList.map((portfolio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col min-h-[430px]"
            >
              {/* GAMBAR PORTOFOLIO */}
              <div className="w-full h-[170px] md:h-[180px] overflow-hidden">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className={
                    index === 0
                      ? "w-full h-full object-contain mx-auto scale-x-[1.15]"
                      : "w-full h-full object-cover"
                  }
                />
              </div>

              {/* KONTEN TEKS */}
              <div className="p-4 flex flex-col flex-1">
                {/* JUDUL */}
                <h3 className="font-nunito text-base md:text-[16px] font-semibold text-[#111111]">
                  {portfolio.title}
                </h3>

                {/* DESKRIPSI */}
                <p className="font-nunito mt-3 text-[15px] md:text-[15px] leading-relaxed text-gray-500 min-h-[30px]">
                  {portfolio.description}
                </p>

                {/* GARIS */}
                <div className="border-t border-gray-300 mt-3"></div>

                {/* TAGS */}
                <div className="mt-2">
                  <p className="font-nunito text-[11px] text-gray-600 mb-2">
                    Tags
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {portfolio.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-nunito text-[10px] md:text-[10px] text-[#3C3C43] border border-[#3C3C43] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TOMBOL CARD */}
                <button
                  type="button"
                  className="font-nunito mt-3 self-start bg-[#333333] hover:bg-[#222222] text-white text-[8px] px-6 py-1.5 rounded-[10px] transition-colors duration-200 cursor-pointer"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
