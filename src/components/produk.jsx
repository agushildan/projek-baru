import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../i18n";

import appleimac from "../assets/produk/appleimac.png";
import mknk from "../assets/produk/mknk.png";
import sparepart from "../assets/produk/sparepart.png";
import webDigi from "../assets/produk/web_digi.png";

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
      image: appleimac,

      // BACKGROUND CARD
      bg: "#E2F0F1",

      // STRIP ATAS
      strip: "#C4E2EF",

      title: t("produk_software_title", "Software IT"),

      description: t(
        "produk_software_desc",
        "Website Manajemen Informasi Sistem, Landing Page, Company Profile, Enterprise Resource Planning",
      ),
    },

    {
      nomor: "2.",
      image: mknk,

      // BACKGROUND CARD
      bg: "#E8E1F2",

      // STRIP ATAS
      strip: "#D4C9EB",

      title: t("produk_mekanik_title", "Mekanik & Engineering"),

      description: t(
        "produk_mekanik_desc",
        "Jasa Repair dan Service Mesin Manufaktur",
      ),
    },

    {
      nomor: "3.",
      image: sparepart,

      // BACKGROUND CARD
      bg: "#F5EAE3",

      // STRIP ATAS
      strip: "#F2DED7",

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
          <Link
            to="/produklain"
            className="
              bg-[#c8e3f7]
              hover:bg-[#b5d9f2]
              text-gray-600
              text-xs md:text-sm
              px-5 py-2.5
              rounded-md
              shadow-md
              hover:shadow-lg
              transition-all duration-200
              flex items-center gap-2
              cursor-pointer
            "
          >
            Lihat Selengkapnya
            <span className="text-base md:text-lg">→</span>
          </Link>
        </div>

        {/* CARD PRODUK */}
        <div
          className="
            w-full
            bg-white
            rounded-md
            shadow-sm
            px-3
            py-4
            md:px-5
            md:py-5
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-4
              md:gap-4
            "
          >
            {produkList.map((produk, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                  min-w-0
                "
              >
                {/* AREA GAMBAR */}
                <div
                  className="
                    relative
                    w-full
                    aspect-square
                    overflow-visible
                  "
                >
                  {/* BACKGROUND WARNA CARD */}
                  <div
                    className="
                      relative
                      w-full
                      h-full
                      rounded-[5px]
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                    "
                    style={{
                      backgroundColor: produk.bg,
                    }}
                  >
                    {/* STRIP ATAS */}
                    <div
                      className="
                        absolute
                        top-0
                        left-0
                        right-0
                        h-[8px]
                        z-20
                      "
                      style={{
                        backgroundColor: produk.strip,
                      }}
                    />

                    {/* =========================
                        PRODUK 1 - iMAC
                    ========================== */}
                    {index === 0 ? (
                      <div
                        className="
                          relative
                          w-[78%]
                          aspect-square
                          flex
                          items-center
                          justify-center
                        "
                      >
                        {/* iMAC */}
                        <img
                          src={produk.image}
                          alt={produk.title}
                          className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-contain
                            z-10
                          "
                        />

                        {/* WEBSITE DI LAYAR iMAC */}
                        <div
                          className="
    absolute
    left-[5.66%]
    top-[13%]
    w-[89%]
    h-[52%]
    overflow-hidden
    z-20
  "
                        >
                          <img
                            src={webDigi}
                            alt="Digi Website"
                            className="
      w-full
      h-full
      object-fill
      block
    "
                          />
                        </div>
                      </div>
                    ) : (
                      /* =========================
                         PRODUK 2 & 3
                      ========================== */
                      <div
                        className="
                          w-[72%]
                          aspect-square
                          overflow-hidden
                          rounded-[2px]
                        "
                      >
                        <img
                          src={produk.image}
                          alt={produk.title}
                          className="
                            w-full
                            h-full
                            object-cover
                          "
                        />
                      </div>
                    )}
                  </div>

                  {/* NOMOR */}
                  <div
                    className="
                      absolute
                      -bottom-5
                      left-1/2
                      -translate-x-1/2
                      w-10
                      h-10
                      md:w-11
                      md:h-11
                      rounded-full
                      bg-[#111111]
                      border-4
                      border-white
                      flex
                      items-center
                      justify-center
                      text-white
                      text-xs
                      md:text-sm
                      font-semibold
                      font-['Montserrat']
                      shadow-md
                      z-30
                    "
                  >
                    {produk.nomor}
                  </div>
                </div>

                {/* JUDUL */}
                <h3
                  className="
                    mt-7
                    text-xs
                    md:text-sm
                    font-bold
                    text-[#222222]
                  "
                >
                  {produk.title}
                </h3>

                {/* DESKRIPSI */}
                <p
                  className="
                    mt-1
                    max-w-[190px]
                    text-[9px]
                    md:text-[10px]
                    leading-relaxed
                    text-gray-500
                  "
                >
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
