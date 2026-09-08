import { useEffect, useState } from "react";

import Footer from "./Footer";

import i18n from "../i18n";

function Sertifikasi() {
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

  const sertifikatList = [
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
    {
      title: "Software IT",
      description:
        "Website Sistem Informasi Manajemen, Landing Page, Company Profile, Enterprise Resource Planning",
    },
  ];

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HEADER SERTIFIKASI
      ========================== */}
      <section
        className="w-full px-6 pt-[60px] pb-10 md:px-8 md:pt-[60px] md:pb-12"
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #FAF4F4 35%, #F9EDED 60%, #F8E5E5 80%, #F7DEDE 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            {t("judul_sertifikasi", "Sertifikat")}
          </h1>

          <p className="mt-3 max-w-5xl font-['Nunito'] text-[#666666] text-[11px] sm:text-xs md:text-[13px] leading-relaxed">
            {t(
              "deskripsi_sertifikasi",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>
      </section>

      {/* =========================
          GRID SERTIFIKAT
      ========================== */}
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-[1050px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {sertifikatList.map((sertifikat, index) => (
              <div
                key={index}
                className="
  bg-white
  border
  border-[#E4E4E4]
  rounded-[8px]
  overflow-hidden
  shadow-[0_1px_4px_rgba(0,0,0,0.06)]
  flex
  flex-col
  max-w-[300px]
  min-h-[430px]
  mx-auto
"
              >
                {/* GAMBAR SERTIFIKAT */}
                <div className="mx-2 mt-2 h-[310px] md:h-[310px] bg-[#D9D9D9] rounded-[2px] flex items-center justify-center overflow-hidden">
                  <span className="text-[#999999] text-xs font-['Nunito']">
                    Sertifikat
                  </span>
                </div>

                {/* INFORMASI */}
                <div className="px-3 py-5 text-center">
                  <h2 className="font-['Nunito'] text-[#333333] text-[16px] font-bold leading-[100%]">
                    {sertifikat.title}
                  </h2>

                  <p className="mt-3 font-['Nunito'] text-[#666666] text-[12px] font-normal leading-[22px] text-center">
                    {sertifikat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
                PAGINATION
            ========================== */}
          <div className="flex justify-end items-center mt-15">
            <div
              className="
                  flex
                  items-center
                  h-[43px]
                  bg-white
                  border
                  border-[#E5E5E5]
                  rounded-[9px]
                  shadow-[0_2px_3px_rgba(0,0,0,0.15)]
                  overflow-hidden
                "
            >
              {/* PREVIOUS */}
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="
    w-[40px]
    h-full
    flex
    items-center
    justify-center
    border-r
    border-[#E5E5E5]
    hover:bg-[#F8F8F8]
    cursor-pointer
  "
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.18))",
                  }}
                >
                  <path
                    d="M8.7446 0.365983C8.96722 0.600393 9.09229 0.918278 9.09229 1.24973C9.09229 1.58119 8.96722 1.89907 8.7446 2.13348L2.86648 8.32098L8.7446 14.5085C8.96091 14.7442 9.08061 15.06 9.0779 15.3877C9.0752 15.7155 8.95031 16.029 8.73014 16.2608C8.50996 16.4925 8.21212 16.624 7.90077 16.6268C7.58941 16.6297 7.28944 16.5037 7.06548 16.276L0.347788 9.20473C0.125167 8.97032 0.000104368 8.65244 0.000104368 8.32098C0.000104368 7.98953 0.125167 7.67164 0.347788 7.43723L7.06548 0.365983C7.28817 0.131644 7.59016 0 7.90504 0C8.21992 0 8.52191 0.131644 8.7446 0.365983Z"
                    fill="#798379"
                  />
                </svg>
              </button>
              {/* Page Buttons */}
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className="
                      w-[38px]
                      h-full
                      flex
                      items-center
                      justify-center
                      border-r
                      border-[#E5E5E5]
                      cursor-pointer
                    "
                >
                  <span
                    className={`
                        flex
                        items-center
                        justify-center
                        w-[26px]
                        h-[28px]
                        rounded-[3px]
                        text-[16px]
                        font-medium
                        transition
                        ${
                          currentPage === page
                            ? "bg-[#E7919280] text-[#3B6682] font-bold shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                            : "text-[#666666] hover:bg-[#F5F5F5]"
                        }
                      `}
                  >
                    {page}
                  </span>
                </button>
              ))}
              {/* Next */}
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 4))}
                className="
    w-[40px]
    h-full
    flex
    items-center
    justify-center
    hover:bg-[#F8F8F8]
    cursor-pointer
  "
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: "scaleX(-1)",
                    filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.18))",
                  }}
                >
                  <path
                    d="M8.7446 0.365983C8.96722 0.600393 9.09229 0.918278 9.09229 1.24973C9.09229 1.58119 8.96722 1.89907 8.7446 2.13348L2.86648 8.32098L8.7446 14.5085C8.96091 14.7442 9.08061 15.06 9.0779 15.3877C9.0752 15.7155 8.95031 16.029 8.73014 16.2608C8.50996 16.4925 8.21212 16.624 7.90077 16.6268C7.58941 16.6297 7.28944 16.5037 7.06548 16.276L0.347788 9.20473C0.125167 8.97032 0.000104368 8.65244 0.000104368 8.32098C0.000104368 7.98953 0.125167 7.67164 0.347788 7.43723L7.06548 0.365983C7.28817 0.131644 7.59016 0 7.90504 0C8.21992 0 8.52191 0.131644 8.7446 0.365983Z"
                    fill="#798379"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sertifikasi;
