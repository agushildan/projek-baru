import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import i18n from "../i18n";

import appleimac from "../assets/produk/appleimac.png";
import mknk from "../assets/produk/mknk.png";
import sparepart from "../assets/produk/sparepart.png";
import webDigi from "../assets/produk/web_digi.png";

function Produk() {
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
      // BACKGROUND CARD
      bg: "#F1ECE2",
      // STRIP ATAS
      strip: "#E2DCCF",
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
      bg: "#E2F0F1",
      // STRIP ATAS
      strip: "#CDE3E5",
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
      bg: "#E7E2F1",
      // STRIP ATAS
      strip: "#D8D0E5",
      title: t("produk_sparepart_title", "Pengadaan Sparepart"),
      description: t(
        "produk_sparepart_desc",
        "Pengadaan Sparepart dan Material Industri",
      ),
    },
  ];

  return (
    <section className="w-full bg-[#DEE4F7] px-4 py-8 md:py-10">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL */}
        <div className="mb-4">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-[32px] font-semibold tracking-wide">
            {t("judul_produk_jasa", "PRODUK & JASA")}
          </h2>

          <p className="mt-2 max-w-5xl text-xs sm:text-sm md:text-[14px] leading-relaxed text-gray-600">
            {t(
              "deskripsi_produk_jasa",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP, Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end mt-5 mb-4">
          <Link
            to="/produklain"
            className="
              bg-[#c8e3f7]
              hover:bg-[#b5d9f2]
              text-gray-600
              text-sm md:text-[14px]
              px-5 py-2
              rounded-md
              shadow-md
              hover:shadow-lg
              transition-all duration-200
              flex items-center gap-2
              cursor-pointer
            "
          >
            Lihat Selengkapnya
            <svg
              width="11"
              height="11"
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
          </Link>
        </div>

        {/* CARD PRODUK */}
        <div
          className="
    w-full
    bg-white
    rounded-[6px]
    shadow-[0_2px_6px_rgba(0,0,0,0.08)]
    px-3
    py-5
    md:px-4
    md:py-5
  "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
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
    w-[95%]
    aspect-[1.15/1]
    overflow-visible
    mx-auto
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
                          w-[72%]
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
                          w-[68%]
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
    -bottom-4
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
    text-[13px]
    md:text-[14px]
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
                    mt-6
                    text-sm
                    md:text-[14px]
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
                    max-w-[200px]
                    text-[11px]
                    md:text-[11px]
                    leading-[16px]
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
