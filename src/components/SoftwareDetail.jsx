import { useEffect, useState } from "react";
import i18n from "../i18n";

function SoftwareDetail() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const t = (key, defaultValue) =>
    i18n.t(key, { defaultValue });

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#e9eefc]">

      {/* =========================
          HEADER SOFTWARE IT
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
            SOFTWARE IT
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
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>

        </div>

      </div>

      {/* =========================
          CONTENT SOFTWARE IT
          SEMENTARA KOSONG
      ========================== */}
      <div
        className="
          w-full
          min-h-[340px]
          bg-[#f1f4ff]
        "
      >
      </div>

    </section>
  );
}

export default SoftwareDetail;