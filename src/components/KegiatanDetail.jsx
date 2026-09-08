import { useEffect, useState } from "react";

import Footer from "./Footer";

import i18n from "../i18n";

// GANTI DENGAN ASSET FOTO KEGIATAN ASLI KALAU SUDAH ADA
import kegiatan1 from "../assets/kegiatan/kegiatan1.jpg";

function KegiatanDetail() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");
  const [currentPage, setCurrentPage] = useState(1);

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

  const kegiatanList = [
    {
      image: kegiatan1,
      date: "16 - 05 - 2026",
      title: "Buka Bersama PT. Digi Tekno Indonesia",
    },
    {
      image: kegiatan1,
      date: "16 - 05 - 2026",
      title: "Buka Bersama PT. Digi Tekno Indonesia",
    },
    {
      image: kegiatan1,
      date: "16 - 05 - 2026",
      title: "Buka Bersama PT. Digi Tekno Indonesia",
    },
  ];

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HEADER KEGIATAN
      ========================== */}
      <section
        className="w-full px-6 pt-[45px] pb-10 md:px-8 md:pt-[55px] md:pb-12"
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #F4F5FA 25%, #EDF0F9 50%, #E5EAF8 75%, #DEE4F7 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="
              font-['Cormorant_Garamond']
              text-[#222222]
              text-3xl
              md:text-4xl
              font-semibold
              tracking-wide
            "
          >
            {t("judul_kegiatan", "Kegiatan")}
          </h1>

          <p
            className="
              mt-3
              max-w-5xl
              font-['Nunito']
              text-[#666666]
              text-[11px]
              sm:text-xs
              md:text-[13px]
              leading-relaxed
            "
          >
            {t(
              "deskripsi_kegiatan",
              "PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>
      </section>

      {/* =========================
          GRID KEGIATAN
      ========================== */}
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-[1050px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {kegiatanList.map((kegiatan, index) => (
              <div
                key={index}
                className="
                  relative
                  bg-white
                  border
                  border-[#E4E4E4]
                  rounded-[6px]
                  overflow-visible
                  shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                  flex
                  flex-col
                  w-[300px]
h-[410px]
                  mx-auto
                  mt-2
                "
              >
                {/* =========================
                    STRIP ATAS
                ========================== */}
                <div
                  className={`
                    absolute
                    -top-[16px]
                    left-1/2
                    -translate-x-1/2
                    w-[160px]
                    h-[25px]
                    rounded-[2px]
                    ${
                      index === 0
                        ? "bg-[#DCE7F8]/60"
                        : index === 1
                          ? "bg-[#F5DEDE]/60"
                          : "bg-[#DCE7F8]/60"
                    }
                  `}
                />

                {/* =========================
                    GAMBAR
                ========================== */}
                <div className="mx-4 mt-4 h-[300px] md:h-[305px] rounded-[3px] overflow-hidden bg-[#D9D9D9]">
                  <img
                    src={kegiatan.image}
                    alt={kegiatan.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* =========================
                    INFORMASI
                ========================== */}
                <div className="absolute left-0 right-0 bottom-0 px-3 pb-7 pt-3 text-center">
                  {/* TANGGAL */}
                  <p
                    className="
                      font-['Nunito']
                      text-[#999999]
                      text-[11px]
                      md:text-[11px]
                    "
                  >
                    {kegiatan.date}
                  </p>

                  {/* JUDUL */}
                  <h2
                    className="
                      mt-3
                      font-['Nunito']
                      text-[#222222]
                      text-[14px]
                      md:text-[14px]
                      font-semibold
                      leading-[15px]
                    "
                  >
                    {kegiatan.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
              DOT PAGINATION
          ========================== */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`
                    w-[10px]
                    h-[10px]
                    rounded-full
                    transition-all
                    duration-200
                    ${
                      currentPage === page
                        ? "bg-[#D9D9D9] scale-110"
                        : "bg-[#E8E8E8]"
                    }
                  `}
                  aria-label={`Halaman ${page}`}
                />
              ))}
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

export default KegiatanDetail;
