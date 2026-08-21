import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import i18n from "../i18n";

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
      title: t("produk_software_title", "Software IT"),
      description: t(
        "produk_software_desc",
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
      ),
      bg: "#cfc3e8",
    },

    {
      nomor: "2.",
      title: t("produk_mekanik_title", "Mekanik & Engineering"),
      description: t(
        "produk_mekanik_desc",
        "Jasa Repair dan Service Mesin Manufaktur",
      ),
      bg: "#b9deed",
    },

    {
      nomor: "3.",
      title: t("produk_sparepart_title", "Pengadaan Sparepart"),
      description: t(
        "produk_sparepart_desc",
        "Pengadaan Sparepart dan Material Industri",
      ),
      bg: "#efd8d0",
    },
  ];

  return (
    <section className="w-full bg-[#e9eefc]">
      {/* =========================
          HEADER
      ========================== */}
      <div className="w-full bg-[#e9eefc] px-6 pt-8 pb-8 md:pt-10 md:pb-10">
        <div className="max-w-[1100px] mx-auto text-center">
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
            {t("judul_produk_jasa", "PRODUK & JASA")}
          </h1>

          <p
            className="
              mt-3
              mx-auto
              max-w-[900px]
              font-['Nunito']
              text-[#666666]
              text-[10px]
              sm:text-xs
              md:text-sm
              leading-relaxed
            "
          >
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
      <div className="w-full px-4 pb-16 md:px-6 md:pb-20">
        <div
          className="
            max-w-[1100px]
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            md:gap-5
          "
        >
          {produkList.map((produk, index) => (
            <div
              key={index}
              className="
                relative
                w-full
                h-[350px]
                md:h-[360px]
                bg-white
                rounded-[8px]
                overflow-hidden
                shadow-[0_3px_8px_rgba(0,0,0,0.15)]
              "
              style={{
                backgroundColor: produk.bg,
              }}
            >
              {/* =========================
                  INFORMASI PRODUK
              ========================== */}
              <div
                className="
                  absolute
                  left-[12px]
                  right-[12px]
                  bottom-[12px]
                  h-[145px]
                  bg-white
                  rounded-[6px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  px-3
                  py-3
                "
              >
                {/* JUDUL */}
                <h2
                  className="
                    font-['Nunito']
                    text-[#222222]
                    text-[12px]
                    md:text-sm
                    font-bold
                    min-h-[18px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  {produk.title}
                </h2>

                {/* DESKRIPSI */}
                <p
                  className="
                    mt-2
                    max-w-[250px]
                    h-[42px]
                    font-['Nunito']
                    text-[#777777]
                    text-[8px]
                    md:text-[9px]
                    leading-[14px]
                    overflow-hidden
                  "
                >
                  {produk.description}
                </p>

                {/* BUTTON */}
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
  );
}

export default ProdukDetail;
