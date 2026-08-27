import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import i18n from "../i18n";

import appleimac from "../assets/produk/appleimac.png";
import mknk from "../assets/produk/mknk.png";
import sparepart from "../assets/produk/sparepart.png";
import webDigi from "../assets/produk/web_digi.png";

function ProdukDetail() {
  const navigate = useNavigate();

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
      title: t("produk_software_title", "Software IT"),
      description: t(
        "produk_software_desc",
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
      ),
      bg: "#cfc3e8",
    },
    {
      nomor: "2.",
      image: mknk,
      title: t("produk_mekanik_title", "Mekanik & Engineering"),
      description: t(
        "produk_mekanik_desc",
        "Jasa Repair dan Service Mesin Manufaktur",
      ),
      bg: "#b9deed",
    },
    {
      nomor: "3.",
      image: sparepart,
      title: t("produk_sparepart_title", "Pengadaan Sparepart"),
      description: t(
        "produk_sparepart_desc",
        "Pengadaan Sparepart dan Material Industri",
      ),
      bg: "#efd8d0",
    },
  ];

  return (
    <div>
      <section className="w-full bg-[#e9eefc]">
        {/* =========================
            HEADER
        ========================== */}
        <div
          className="
            w-full
            px-6
            pt-8
            pb-8
            md:pt-10
            md:pb-10
          "
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #F8F9FF 0%, #D4DCF3 100%)",
          }}
        >
          <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
              {t("judul_produk_jasa", "PRODUK & JASA")}
            </h1>

            <p className="mt-3 mx-auto max-w-[900px] font-['Nunito'] text-[#666666] text-[10px] sm:text-xs md:text-sm leading-relaxed">
              {t(
                "deskripsi_produk_jasa",
                "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP, Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
              )}
            </p>
          </div>
        </div>

        {/* =========================
            CARD PRODUK
        ========================== */}
        <div className="w-full px-4 pt-12 pb-16 md:px-6 md:pt-14 md:pb-20">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {produkList.map((produk, index) => (
              <div
                key={index}
                className="relative w-full h-[390px] md:h-[400px] bg-white rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.15)]"
                style={{ backgroundColor: produk.bg }}
              >
                {/* FIELD GAMBAR */}
                <div
                  className="
    absolute
    top-[12px]
    left-[12px]
    right-[12px]
    h-[180px]
    bg-transparent
    rounded-[4px]
    overflow-hidden
    flex
    items-center
    justify-center
  "
                >
                  {/* =========================
      PRODUK 1 - iMAC
  ========================== */}
                  {index === 0 ? (
  <div className="relative w-full h-full flex items-center justify-center">

    {/* iMac */}
    <img
      src={produk.image}
      alt={produk.title}
      className="
        absolute
        w-[82%]
        h-full
        object-contain
        z-10
      "
    />

    <div
  className="
    absolute
    left-[20%]
    top-[5%]
    w-[60%]
    h-[62%]
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
                    <img
                      src={produk.image}
                      alt={produk.title}
                      className="
        w-full
        h-full
        object-cover
        object-center
        rounded-[4px]
      "
                    />
                  )}
                </div>

                {/* =========================
                    INFORMASI PRODUK
                ========================== */}
                <div className="absolute left-[12px] right-[12px] bottom-[12px] h-[165px] bg-white rounded-[6px] flex flex-col items-center justify-center text-center px-3 py-3">
                  <h2 className="font-['Nunito'] text-[#222222] text-[12px] md:text-sm font-bold min-h-[18px] flex items-center justify-center">
                    {produk.title}
                  </h2>

                  <p className="mt-2 max-w-[250px] h-[42px] font-['Nunito'] text-[#777777] text-[8px] md:text-[9px] leading-[14px] overflow-hidden">
                    {produk.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      if (index === 0) {
                        navigate("/produk/software");
                      }
                    }}
                    className="
                      mt-3
                      h-[28px]
                      bg-white
                      border
                      border-[#999999]
                      text-[#333333]
                      text-[8px]
                      md:text-[9px]
                      px-4
                      rounded-[4px]
                      shadow-[0_1px_2px_rgba(0,0,0,0.15)]
                      hover:bg-gray-50
                      transition-all
                      duration-200
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      cursor-pointer
                      flex-shrink-0
                    "
                  >
                    Lihat Selengkapnya
                    <span className="text-[10px]">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProdukDetail;
