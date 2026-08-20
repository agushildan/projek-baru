import { useEffect, useState } from "react";

import i18n from "../i18n";

import orang2 from "../assets/orang_2.jpg";
import image from "../assets/image.png";
import livingRoom from "../assets/living_room.jpg";

import landscape from "../assets/produk/landscape.png";
import portrait from "../assets/produk/potrait.png";

function Produk() {
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

  const produkList = [
    {
      nomor: "1.",
      image: orang2,
      mobileImage: portrait,
      desktopImage: landscape,
      title: t("produk_software_title", "Software IT"),
      description: t(
        "produk_software_desc",
        "Website Manajemen Informasi Sistem, Landing Page, Company Profile, Enterprise Resource Planning",
      ),
    },

    {
      nomor: "2.",
      image: image,
      title: t("produk_mekanik_title", "Mekanik & Engineering"),
      description: t(
        "produk_mekanik_desc",
        "Jasa Repair dan Service Mesin Manufaktur",
      ),
    },

    {
      nomor: "3.",
      image: livingRoom,
      title: t("produk_sparepart_title", "Pengadaan Sparepart"),
      description: t(
        "produk_sparepart_desc",
        "Pengadaan Sparepart dan Material Industri",
      ),
    },
  ];

  return (
    <section className="w-full bg-[#e9eefc] px-4 py-10 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL */}
        <div className="mb-6">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-2xl md:text-3xl font-semibold tracking-wide">
            {t("judul_produk_jasa", "PRODUK & JASA")}
          </h2>

          <p className="mt-2 max-w-5xl text-[10px] sm:text-xs md:text-sm leading-relaxed text-gray-600">
            {t(
              "deskripsi_produk_jasa",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP, Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end mt-4 mb-3">
          <button
            type="button"
            className="bg-[#c8e3f7] hover:bg-[#b5d9f2] text-gray-600 text-xs md:text-sm px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            Lihat Selengkapnya
            <span className="text-base md:text-lg">→</span>
          </button>
        </div>

        {/* CARD PRODUK */}
        <div className="w-full bg-white rounded-md shadow-sm px-3 py-4 md:px-4 md:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-4">
            {produkList.map((produk, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* GAMBAR */}
                {produk.desktopImage && produk.mobileImage ? (
                  /* PRODUK 1 - MOCKUP */
                  <div className="relative w-full aspect-square overflow-visible">
                    {/* BACKGROUND UNGU */}
                    <div className="relative w-full h-full bg-[#b8a9d8] rounded-xl overflow-visible">
                      {/* LANDSCAPE */}
                      <div className="absolute left-[7%] top-[27%] w-[70%] -rotate-[4deg] z-10">
                        <div className="bg-white rounded-[12px] p-1.5 md:p-2 shadow-xl">
                          <img
                            src={produk.desktopImage}
                            alt="Software IT Desktop"
                            className="w-full h-auto rounded-[8px] object-contain"
                          />
                        </div>
                      </div>

                      {/* HP */}
                      <div className="absolute right-[5%] top-[12%] w-[24%] rotate-[6deg] z-20">
                        <div className="bg-white rounded-[20px] p-2 shadow-xl aspect-[9/16]">
                          <img
                            src={produk.mobileImage}
                            alt="Software IT Mobile"
                            className="w-full h-full rounded-[14px] object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* NOMOR */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#111111] border-4 border-white flex items-center justify-center text-white text-xs md:text-sm font-semibold shadow-md font-['Montserrat'] z-30">
                      {produk.nomor}
                    </div>
                  </div>
                ) : (
                  /* PRODUK 2 & 3 */
                  <div className="relative w-full aspect-square overflow-visible">
                    <img
                      src={produk.image}
                      alt={produk.title}
                      className="w-full h-full object-cover rounded-md"
                    />

                    {/* NOMOR */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#111111] border-4 border-white flex items-center justify-center text-white text-xs md:text-sm font-semibold shadow-md font-['Montserrat'] z-30">
                      {produk.nomor}
                    </div>
                  </div>
                )}

                {/* =========================
                    JUDUL
                ========================== */}

                <h3 className="mt-7 text-xs md:text-sm font-bold text-[#222222]">
                  {produk.title}
                </h3>

                {/* =========================
                    DESKRIPSI
                ========================== */}

                <p className="mt-1 max-w-[190px] text-[9px] md:text-[10px] leading-relaxed text-gray-500">
                  {produk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produk;
