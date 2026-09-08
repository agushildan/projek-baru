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

  /* KODE WARNA CARD DIATUR PRESISI SESUAI DESAIN REFERENSI */
  const produkList = [
    {
      nomor: "1.",
      image: appleimac,
      title: t("produk_software_title", "Software IT"),
      description: t(
        "produk_software_desc",
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
      ),
      bg: "#f7e3d7", // Peach / Krem Soft
    },
    {
      nomor: "2.",
      image: mknk,
      title: t("produk_mekanik_title", "Mekanikal & Engineering"),
      description: t(
        "produk_mekanik_desc",
        "Jasa Repair dan Service Mesin Manufaktur",
      ),
      bg: "#cbe3f0", // Biru Muda Soft
    },
    {
      nomor: "3.",
      image: sparepart,
      title: t("produk_sparepart_title", "Pengadaan Sparepart"),
      description: t(
        "produk_sparepart_desc",
        "Pengadaan Sparepart dan Material Industri",
      ),
      bg: "#dcd4f0", // Ungu Muda Soft
    },
  ];

  return (
    <div className="pt-[84px]">
      <section className="w-full bg-[#F2F5FF] -mt-6">
        {/* =========================
          HEADER TITLE
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
            GRID CARD PRODUK
        ========================== */}
        <div className="w-full px-4 pt-12 pb-16 md:px-6 md:pt-14 md:pb-20 bg-[#F2F5FF]">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {produkList.map((produk, index) => (
              <div
                key={index}
                className="relative w-full h-[390px] md:h-[400px] rounded-[8px] overflow-hidden shadow-[0_3px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-1"
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
                      {/* Frame Monitor iMac */}
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

                      {/* Layar Website di Dalam Monitor */}
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
                    INFORMASI PRODUK (KOTAK PUTIH)
                ========================== */}
                <div className="absolute left-[12px] right-[12px] bottom-[12px] h-[165px] bg-white rounded-[6px] flex flex-col items-center justify-center text-center px-3 py-3 shadow-sm">
                  <h2 className="font-['Nunito'] text-[#222222] text-[18px] md:text-[18px] font-bold min-h-[18px] flex items-center justify-center">
                    {produk.title}
                  </h2>

                  <p className="mt-2 max-w-[300px] h-[48px] font-['Nunito'] text-[#777777] text-[11px] md:text-[12px] leading-[18px] overflow-hidden">
                    {produk.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      if (index === 0) {
                        navigate("/produk/software");
                      } else if (index === 1) {
                        navigate("/produk/mekanik-engineering");
                      } else if (index === 2) {
                        navigate("/produk/pengadaan-sparepart"); // Navigate ke halaman Sparepart
                      }
                    }}
                    className="
  mt-3
  h-[32px]
  bg-white
  border
  border-[#999999]
  text-[#333333]
  text-[9px]
  md:text-[10px]
  px-5
  rounded-[6px]
  shadow-[0_2px_4px_rgba(0,0,0,0.15)]
  hover:bg-gray-50
  hover:shadow-[0_3px_6px_rgba(0,0,0,0.18)]
  transition-all
  duration-200
  flex
  items-center
  justify-center
  gap-2
  cursor-pointer
  flex-shrink-0
"
                  >
                    Lihat Selengkapnya
                    <svg
                      width="10"
                      height="10"
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
