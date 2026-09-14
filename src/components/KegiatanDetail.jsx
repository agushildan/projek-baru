import { useEffect, useState } from "react";

import Footer from "./Footer";
import i18n from "../i18n";

// =========================
// ASSET FOTO KEGIATAN
// =========================
import kegiatan1 from "../assets/kegiatan/kegiatan1.jpg";
import kegiatan2 from "../assets/kegiatan/kegiatan2.jpg";
import kegiatan3 from "../assets/kegiatan/kegiatan3.jpg";
import kegiatan4 from "../assets/kegiatan/kegiatan4.jpg";
import kegiatan5 from "../assets/kegiatan/kegiatan5.jpg";
import kegiatan6 from "../assets/kegiatan/kegiatan6.jpg";

function KegiatanDetail() {
  const [, setCurrentLang] = useState(i18n.language || "id");

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  // =========================
  // LANGUAGE CHANGE
  // =========================
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // =========================
  // DATA KEGIATAN
  // =========================
  const kegiatanList = [
    {
      image: kegiatan1,
      date: "16 - 05 - 2026",
      title: "Buka Bersama PT. Digi Tekno Indonesia",
    },
    {
      image: kegiatan2,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan3,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan4,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan5,
      date: "16 - 05 - 2026",
      title: "Arung Jeram",
    },
    {
      image: kegiatan6,
      date: "16 - 05 - 2026",
      title: "Gathering PT. Digi Tekno Indonesia",
    },
  ];

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HEADER KEGIATAN
      ========================== */}
      <section
        className="
          w-full
          px-6
          pt-[45px]
          pb-10
          md:px-8
          md:pt-[55px]
          md:pb-12
        "
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
          LIST KEGIATAN
      ========================== */}
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div
          className="
            max-w-[1000px]
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-3
            gap-x-5
            gap-y-10
          "
        >
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
                w-full
                h-[430px]
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
                  ${index % 2 === 1 ? "bg-[#F5DEDE]/60" : "bg-[#DCE7F8]/60"}
                `}
              />

              {/* =========================
                  GAMBAR
              ========================== */}
              <div
                className="
                  mx-5
                  mt-5
                  h-[325px]
                  rounded-[3px]
                  overflow-hidden
                  bg-[#D9D9D9]
                "
              >
                <img
                  src={kegiatan.image}
                  alt={kegiatan.title}
                  draggable="false"
                  className="
                    w-full
                    h-full
                    object-cover
                    block
                  "
                />
              </div>

              {/* =========================
                  INFORMASI
              ========================== */}
              <div
                className="
                  w-full
                  px-3
                  pt-3
                  pb-6
                  text-center
                "
              >
                <p
                  className="
                    font-['Nunito']
                    text-[#999999]
                    text-[15px]
                  "
                >
                  {kegiatan.date}
                </p>

                <h2
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#222222]
                    text-[15px]
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
            DOT INDICATOR
        ========================== */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]" />
          <span className="w-[10px] h-[10px] rounded-full bg-[#D9D9D9]" />
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
