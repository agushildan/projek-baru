import { useEffect, useState } from "react";
import i18n from "../i18n";

import orang2 from "../assets/orang_2.jpg";
import image from "../assets/image.png";
import livingRoom from "../assets/living_room.jpg";

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

        {/* CARD PRODUK */}
        <div className="w-full bg-white rounded-md shadow-sm px-3 py-4 md:px-4 md:py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-4">
            {produkList.map((produk, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* GAMBAR */}
                <div className="relative w-full overflow-visible">
                  <img
                    src={produk.image}
                    alt={produk.title}
                    className="w-full aspect-[1.35/1] object-cover rounded-md"
                  />

                  {/* NOMOR */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#111111] border-4 border-white flex items-center justify-center text-white text-xs md:text-sm font-semibold shadow-md font-['Montserrat']">
                    {produk.nomor}
                  </div>
                </div>

                {/* JUDUL */}
                <h3 className="mt-7 text-xs md:text-sm font-bold text-[#222222]">
                  {produk.title}
                </h3>

                {/* DESKRIPSI */}
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
