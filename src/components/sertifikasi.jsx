import { useEffect, useState } from "react";

import Footer from "./Footer";
import i18n from "../i18n";

function Sertifikasi() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [sertifikatList, setSertifikatList] = useState([]);
  const [loadingSertifikat, setLoadingSertifikat] = useState(true);

  const totalPages = Math.ceil(sertifikatList.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentSertifikat = sertifikatList.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const [pageSetting, setPageSetting] = useState({
    title: "Sertifikat",
    description:
      "PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
  });

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

  // ==========================================
  // AMBIL PAGE SETTING SERTIFIKASI
  // ==========================================

  useEffect(() => {
    const fetchPageSetting = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/page-settings/sertifikasi",
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Gagal mengambil pengaturan halaman Sertifikasi.",
          );
        }

        setPageSetting({
          title: data.data?.title || "Sertifikat",
          description: data.data?.description || "",
        });
      } catch (error) {
        console.error("❌ Error mengambil Page Setting Sertifikasi:", error);
      }
    };

    fetchPageSetting();
  }, []);

  useEffect(() => {
    const fetchSertifikasi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sertifikasi");

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Gagal mengambil data sertifikasi.",
          );
        }

        setSertifikatList(result.data);
      } catch (error) {
        console.error("❌ Error mengambil sertifikasi:", error);
      } finally {
        setLoadingSertifikat(false);
      }
    };

    fetchSertifikasi();
  }, []);

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HEADER SERTIFIKASI
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
            "linear-gradient(90deg, #FBFBFB 0%, #FAF4F4 35%, #F9EDED 60%, #F8E5E5 80%, #F7DEDE 100%)",
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
            {pageSetting.title}
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
            {pageSetting.description}
          </p>
        </div>
      </section>

      {/* =========================
          GRID SERTIFIKAT
      ========================== */}
      <section className="w-full bg-white px-6 pt-10 pb-12 md:px-8 md:pt-12 md:pb-14">
        <div className="max-w-[1050px] mx-auto">
          <div
            className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    gap-x-[24px]
    gap-y-[18px]
  "
          >
            {currentSertifikat.map((sertifikat, index) => (
              <div
                key={index}
                className="
  relative
  bg-white
  border
  border-[#E4E4E4]
  rounded-[8px]
  overflow-hidden
  shadow-[0_1px_4px_rgba(0,0,0,0.08)]
  flex
  flex-col
w-[300px]
h-[500px]
  mx-auto
"
              >
                {/* =========================
      GAMBAR SERTIFIKAT
  ========================== */}
                <div
                  className="
  mx-[18px]
mt-[16px]
h-[390px]
  flex
  items-center
  justify-center
  overflow-hidden
"
                >
                  <img
                    src={`http://localhost:5000${sertifikat.gambar}`}
                    alt={sertifikat.nama}
                    className="
    w-full
    h-full
    object-contain
    block
  "
                  />
                </div>

                {/* =========================
      INFORMASI
  ========================== */}
                <div
                  className="
    px-[16px]
    pt-[8px]
    pb-[30px]
    text-center
  "
                >
                  <h2
                    className="
                    mt-[10px]
        font-['Nunito']
        text-[#333333]
text-[17px]
font-semibold
leading-[20px]
      "
                  >
                    {sertifikat.nama}
                  </h2>

                  <p
                    className="
mt-[15px]
font-['Nunito']
text-[#777777]
text-[15px]
font-normal
leading-[14px]
text-center
      "
                  >
                    {sertifikat.deskripsi}
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
  h-[40px]
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
   w-[30px]
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
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className="
                      w-[40px]
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
                        w-[25px]
h-[25px]
rounded-[3px]
text-[16px]
                        font-medium
                        transition
                        ${
                          currentPage === page
                            ? "bg-[#E7919280] text-[#3B6682] shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                            : "bg-transparent text-[#666666]"
                        }
                      `}
                    >
                      {page}
                    </span>
                  </button>
                ),
              )}

              {/* Next */}
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
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

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default Sertifikasi;
