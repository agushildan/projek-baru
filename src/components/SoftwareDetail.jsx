import { useEffect, useState } from "react";
import Footer from "./Footer";
import i18n from "../i18n";
import { useNavigate } from "react-router-dom";
import landscape from "../assets/produk/landscape.png";

function SoftwareDetail() {
  const navigate = useNavigate();

  const [, setCurrentLang] = useState(i18n.language || "id");
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

  const produkSoftware = [
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
  ];

  return (
    <div>
      {/* =========================
          SPASI UNTUK NAVBAR
          Navbar tetap putih
      ========================== */}
      <div className="h-[64px] bg-white" />

      <section className="w-full min-h-screen bg-[#F2F5FF]">
        {/* =========================
            HEADER TITLE
            SOFT PEACH GRADIENT
        ========================== */}
        <div
          className="
            w-full
            px-6
            pt-8
            pb-10
            md:pt-10
            md:pb-10
          "
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(242, 222, 215, 0.5) 100%)",
          }}
        >
          <div className="max-w-[1100px] mx-auto text-center">
            <h1
              className="
                font-['Cormorant_Garamond']
                text-[#222222]
                text-3xl
                md:text-4xl
                font-semibold
                tracking-wide
                uppercase
              "
            >
              SOFTWARE IT
            </h1>

            <p
              className="
                mt-3
                mx-auto
                max-w-[1100px]
                font-['Nunito']
                text-[#666666]
                text-[11px]
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
            LIST SOFTWARE
        ========================== */}
        <div
          className="
            w-full
            px-5
            pt-10
            pb-16
            md:px-6
            md:pt-12
            md:pb-20
            bg-[#F2F5FF]
          "
        >
          <div
            className="
              max-w-[1420px]
              mx-auto
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-6
            "
          >
            {produkSoftware.map((produk, index) => (
              <div
                key={index}
                className="
                  w-full
                  bg-white
                  rounded-[14px]
                  border
                  border-[#d2d6e0]
                  p-[8px]
                  shadow-[0_2px_6px_rgba(0,0,0,0.08)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                "
              >
                <div className="bg-white rounded-[10px] overflow-hidden">
                  {/* IMAGE */}
                  <div
                    className="
                      w-full
                      aspect-[16/9]
                      bg-white
                      overflow-hidden
                      rounded-[10px]
                    "
                  >
                    <img
                      src={landscape}
                      alt={produk.title}
                      className="
                        w-full
                        h-full
                        object-contain
                        rounded-[10px]
                      "
                    />
                  </div>

                  {/* GARIS */}
                  <div className="mx-2 border-t border-[#dddddd]" />

                  {/* CONTENT */}
                  <div className="px-4 py-6 text-center">
                    <h2
                      className="
                        font-['Nunito']
                        text-[#3f4543]
                        text-xl
                        font-bold
                      "
                    >
                      {produk.title}
                    </h2>

                    <p
                      className="
                        mt-2
                        font-['Nunito']
                        text-[#555555]
                        text-sm
                      "
                    >
                      {produk.description}
                    </p>

                    <p
                      className="
                        mt-8
                        font-['Nunito']
                        text-[#555555]
                        text-sm
                        leading-relaxed
                        text-left
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ornare nisl. Nam congue sed nulla in blandit.
                    </p>

                    {/* BUTTON */}
                    <button
                      type="button"
                      onClick={() => navigate("/produk/software/detail")}
                      className="
                        mt-10
                        w-full
                        h-[48px]
                        bg-[#b94d4d]
                        hover:bg-[#a94444]
                        text-white
                        font-['Nunito']
                        text-sm
                        font-bold
                        rounded-[7px]
                        border
                        border-[#733737]
                        shadow-[0_2px_4px_rgba(0,0,0,0.15)]
                        transition-all
                        duration-200
                        cursor-pointer
                      "
                    >
                      Lihat Detail Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================
              PAGINATION
          ========================== */}
          <div className="flex justify-end mt-6 pr-15">
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

              {/* PAGE BUTTONS */}
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
                          ? "bg-[#CDE6F5] text-[#3B6682] shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                          : "bg-transparent text-[#666666]"
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

export default SoftwareDetail;
