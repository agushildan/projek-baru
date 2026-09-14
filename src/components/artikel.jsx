import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import Footer from "./Footer";
import i18n from "../i18n";

// =========================
// ASSET ARTIKEL
// =========================
import artikel1 from "../assets/artikel/artikel1.png";
import artikel2 from "../assets/artikel/artikel2.png";
import artikel3 from "../assets/artikel/artikel3.png";
import artikel4 from "../assets/artikel/artikel4.png";
import artikel5 from "../assets/artikel/artikel5.png";

function Artikel() {
  const navigate = useNavigate();

  const [, setCurrentLang] = useState(i18n.language || "id");
  const [currentPage, setCurrentPage] = useState(1);

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

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  // =========================
  // HIGHLIGHT ARTIKEL
  // =========================
  const highlightArticles = [
    {
      title:
        "Jasa Mekanikal & Engineering untuk Mendukung Performa Mesin Industri",
      description:
        "PT. Digi Tekno Indonesia menyediakan layanan mekanikal dan engineering untuk membantu perusahaan menjaga performa serta keandalan mesin industri. Layanan kami mencakup machining, repair & maintenance ...",
    },
    {
      title: "Jasa Machining Presisi untuk Komponen Mesin Industri",
      description:
        "Kebutuhan komponen mesin dengan ukuran dan bentuk yang presisi menjadi bagian penting dalam mendukung performa peralatan industri. PT. Digi Tekno Indonesia menyediakan jasa machining untuk membantu ...",
    },
    {
      title:
        "Pengadaan Material Industri untuk Mendukung Kebutuhan Maintenance dan Produksi",
      description:
        "Material industri merupakan bagian penting dalam berbagai pekerjaan maintenance, repair, fabrication, maupun proses produksi. PT. Digi Tekno Indonesia menyediakan layanan pengadaan material industri untuk ...",
    },
  ];

  const articles = [
    {
      image: artikel2,
      title:
        "Jasa Mekanikal & Engineering untuk Mendukung Performa Mesin Industri",
      description:
        "PT. Digi Tekno Indonesia menyediakan layanan mekanikal dan engineering untuk membantu perusahaan menjaga performa serta keandalan mesin industri. Layanan kami mencakup machining, repair & maintenance, engineering service, hingga fabrication sesuai kebutuhan teknis ...",
    },
    {
      image: artikel3,
      title: "Jasa Machining Presisi untuk Komponen Mesin Industri",
      description:
        "Kebutuhan komponen mesin dengan ukuran dan bentuk yang presisi menjadi bagian penting dalam mendukung performa peralatan industri. PT. Digi Tekno Indonesia menyediakan jasa machining untuk membantu proses pembuatan dan pengerjaan berbagai komponen mesin sesuai ...",
    },
    {
      image: artikel4,
      title:
        "Repair & Maintenance Mesin Industri untuk Menjaga Kelancaran Operasional",
      description:
        "Mesin industri yang digunakan secara terus-menerus membutuhkan perawatan dan pemeriksaan untuk menjaga performanya. PT. Digi Tekno Indonesia menyediakan layanan repair & maintenance mesin industri untuk membantu perusahaan menangani kebutuhan perbaikan dan ...",
    },
    {
      image: artikel5,
      title: "Jasa Pengadaan Sparepart dan Komponen Mesin Industri",
      description:
        "Ketersediaan sparepart yang tepat menjadi salah satu faktor penting dalam menjaga kelancaran kegiatan maintenance dan operasional industri. PT. Digi Tekno Indonesia menyediakan layanan pengadaan sparepart dan komponen mesin industri berdasarkan kebutuhan dan spesifikasi pelanggan.",
    },
  ];

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          BANNER ARTIKEL
      ========================== */}
      <section
        className="
          w-full
          px-6
          py-[55px]
          md:px-16
          md:py-[50px]
        "
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #DFE5FB 45%, #D5DDF6 70%, #A2B2E4 100%)",
        }}
      >
        <div className="max-w-[1320px] mx-auto">
          <h1
            className="
              font-['Cormorant_Garamond']
              text-[#222222]
              text-[40px]
              md:text-[45px]
              font-semibold
              leading-none
            "
          >
            Artikel
          </h1>

          <p
            className="
              mt-5
              max-w-[1120px]
              font-['Nunito']
              text-[#666666]
              text-[12px]
              md:text-[13px]
              leading-[1.8]
            "
          >
            {t(
              "deskripsi_artikel",
              "PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>
      </section>

      {/* =========================
          CONTENT ARTIKEL
      ========================== */}
      <section className="w-full bg-white px-5 py-8 md:px-10 md:py-10">
        <div
          className="
    max-w-[1200px]
    mx-auto
    rounded-[4px]
    bg-[#F3F5FF]
    px-6
    py-7
    md:px-[40px]
    md:py-[38px]
  "
        >
          {/* TOMBOL KEMBALI */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-[5px]
              bg-[#A94A4A]
              text-white
              font-['Nunito']
              text-[11px]
              shadow-[0_2px_3px_rgba(0,0,0,0.25)]
              hover:bg-[#963F3F]
              transition
            "
          >
            <svg
              width="11"
              height="12"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.75 6.42839C1.75 6.11897 1.87292 5.82222 2.09171 5.60343C2.3105 5.38464 2.60725 5.26172 2.91667 5.26172H17.5C17.8094 5.26172 18.1062 5.38464 18.325 5.60343C18.5438 5.82222 18.6667 6.11897 18.6667 6.42839C18.6667 6.7378 18.5438 7.03455 18.325 7.25334C18.1062 7.47214 17.8094 7.59505 17.5 7.59505H2.91667C2.60725 7.59505 2.3105 7.47214 2.09171 7.25334C1.87292 7.03455 1.75 6.7378 1.75 6.42839Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.431C6.6077e-05 6.12161 0.123026 5.82491 0.341834 5.60617L5.59183 0.35617C5.69945 0.244741 5.82819 0.155862 5.97053 0.094718C6.11287 0.0335742 6.26596 0.00139017 6.42087 4.40491e-05C6.57577 -0.00130207 6.7294 0.0282169 6.87278 0.0868779C7.01616 0.145539 7.14642 0.232168 7.25596 0.341709C7.3655 0.451251 7.45213 0.581511 7.51079 0.72489C7.56945 0.868269 7.59897 1.0219 7.59763 1.1768C7.59628 1.33171 7.5641 1.4848 7.50295 1.62714C7.44181 1.76948 7.35293 1.89821 7.2415 2.00584L2.81633 6.431L7.2415 10.8562C7.45402 11.0762 7.57161 11.3709 7.56895 11.6768C7.56629 11.9827 7.4436 12.2753 7.22729 12.4916C7.01098 12.7079 6.71836 12.8306 6.41247 12.8333C6.10657 12.8359 5.81187 12.7184 5.59183 12.5058L0.341834 7.25584C0.123026 7.03709 6.6077e-05 6.7404 0 6.431Z"
                fill="white"
              />
            </svg>
            Kembali
          </button>

          {/* =========================
              JUDUL + GRID
          ========================== */}
          <div className="mt-10">
            <h2
              className="
                font-['Belanosima']
                text-[#87383A]
                text-[50px]
                md:text-[50px]
                font-extrabold
                leading-none
                drop-shadow-[0_3px_2px_rgba(0,0,0,0.25)]
              "
            >
              Artikel
            </h2>

            <div
              className="
                mt-5
                grid
                grid-cols-1
                lg:grid-cols-[1.25fr_1fr]
gap-5
                 items-stretch
              "
            >
              {/* =========================
                  ARTIKEL UTAMA
              ========================== */}
              <article
                className="
    bg-white
    border
    border-[#848484]
    rounded-[5px]
    overflow-hidden
    shadow-[0_1px_3px_rgba(0,0,0,0.20)]
    h-[620px]
    flex
    flex-col
  "
              >
                {/* IMAGE */}
                <div className="p-3 md:p-4 pb-0">
                  <div
                    className="
    w-full
    h-[220px]
    md:h-[310px]
    rounded-[4px]
    overflow-hidden
    bg-[#D9D9D9]
  "
                  >
                    <img
                      src={artikel1}
                      alt="Artikel PT. Digi Tekno Indonesia"
                      className="
                        w-full
                        h-full
                        object-cover
                        block
                      "
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative border-t border-[#D8D8D8] mt-3 px-5 py-4 flex-1">
                  <p
                    className="
    font-['Nunito']
    text-[#555555]
    text-[17px]
    font-medium
  "
                  >
                    | Artikel
                  </p>

                  {/* META */}
                  <div
                    className="
    mt-2
    flex
    items-center
    gap-5
    flex-wrap
    font-['Nunito']
    text-[13px]
    text-[#888888]
  "
                  >
                    <span className="flex items-center gap-1.5">
                      <svg
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M10.5 10.5V2.33333C10.5 1.68992 9.97675 1.16667 9.33333 1.16667H8.16667V0H7V1.16667H3.5V0H2.33333V1.16667H1.16667C0.52325 1.16667 0 1.68992 0 2.33333V10.5C0 11.1434 0.52325 11.6667 1.16667 11.6667H9.33333C9.97675 11.6667 10.5 11.1434 10.5 10.5ZM3.5 9.33333H2.33333V8.16667H3.5V9.33333ZM3.5 7H2.33333V5.83333H3.5V7ZM5.83333 9.33333H4.66667V8.16667H5.83333V9.33333ZM5.83333 7H4.66667V5.83333H5.83333V7ZM8.16667 9.33333H7V8.16667H8.16667V9.33333ZM8.16667 7H7V5.83333H8.16667V7ZM9.33333 4.08333H1.16667V2.91667H9.33333V4.08333Z"
                          fill="#798379"
                        />
                      </svg>
                      05 Mei 2026
                    </span>

                    {/* GARIS PEMISAH */}
                    <span className="w-px h-[15px] bg-[#798379]" />

                    <span className="flex items-center gap-1.5">10 : 00</span>

                    <span className="flex items-center gap-1.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M5.6875 5.6875C6.29321 5.6875 6.88531 5.52072 7.38893 5.20824C7.89256 4.89577 8.28509 4.45163 8.51688 3.93201C8.74867 3.41238 8.80932 2.8406 8.69116 2.28896C8.57299 1.73733 8.28131 1.23062 7.85301 0.832916C7.42472 0.435211 6.87903 0.16437 6.28496 0.0546431C5.6909 -0.0550836 5.07513 0.00123215 4.51553 0.216469C3.95593 0.431706 3.47764 0.796196 3.14112 1.26385C2.80461 1.7315 2.625 2.28131 2.625 2.84375C2.625 3.59796 2.94766 4.32128 3.52199 4.85459C4.09632 5.38789 4.87527 5.6875 5.6875 5.6875ZM5.6875 6.5C3.7893 6.5 0 7.58875 0 9.75V11.375H11.375V9.75C11.375 7.58875 7.5857 6.5 5.6875 6.5Z"
                          fill="#798379"
                        />
                      </svg>
                      Admin Digi
                    </span>
                  </div>

                  <h3
                    className="
                      mt-3
                      font-['Nunito']
                      text-[#222222]
                      text-[13px]
                      md:text-[14px]
                      font-bold
                      leading-[1.4]
                    "
                  >
                    Engineering Service untuk Solusi Teknis Mesin dan Peralatan
                    Industri
                  </h3>

                  <p
                    className="
                      mt-4
                      font-['Nunito']
                      text-[#666666]
                      text-[10px]
                      md:text-[11px]
                      leading-[1.65]
                    "
                  >
                    Setiap kebutuhan industri memiliki kondisi dan permasalahan
                    teknis yang berbeda. PT. Digi Tekno Indonesia menyediakan
                    engineering service untuk membantu pelanggan menemukan
                    solusi yang sesuai dengan kebutuhan mesin, komponen, dan
                    proses kerja di lapangan. Layanan engineering mencakup ...
                  </p>

                  {/* BACA SELENGKAPNYA */}
                  <div className="absolute bottom-4 right-5">
                    <button
                      type="button"
                      onClick={() => navigate("/artikeldetail/1")}
                      className="
    flex
    items-center
    gap-2
    border
    border-[#888888]
    bg-white
    rounded-[4px]
    px-3
    py-1.5
    font-['Nunito']
    text-[10px]
    text-[#333333]
    shadow-[0_1px_2px_rgba(0,0,0,0.18)]
    hover:bg-[#F5F5F5]
    transition
  "
                    >
                      Baca Selengkapnya
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </article>

              {/* =========================
    HIGHLIGHT ARTIKEL
========================== */}
              <aside
                className="
    bg-[#FFFFFF]
    border
    border-[#8F8F8F]
    rounded-[6px]
    shadow-[0_1px_3px_rgba(0,0,0,0.20)]
    h-[620px]
    px-8
    py-7
  "
              >
                {/* JUDUL */}
                <h3
                  className="
      font-['Belanosima']
      text-[#5796CB]
text-[34px]
md:text-[34px]
      font-bold
      leading-none
      drop-shadow-[0_2px_1px_rgba(0,0,0,0.18)]
    "
                >
                  Highlight Artikel
                </h3>

                {/* GARIS MERAH */}
                <div className="mt-3 w-[80px] h-[2px] bg-[#8B3B3D]" />

                {/* LIST HIGHLIGHT */}
                <div className="mt-6">
                  {highlightArticles.map((article, index) => (
                    <div
                      key={index}
                      className={`
        ${index === 0 ? "pb-5" : index === 1 ? "py-5" : "pt-5"}
        ${
          index !== highlightArticles.length - 1
            ? "border-b border-[#D8D8D8]"
            : ""
        }
      `}
                    >
                      {/* CARD PUTIH */}
                      <div
                        className="
          bg-white
          rounded-[5px]
          shadow-[0_2px_4px_rgba(0,0,0,0.14)]
          px-5
          py-4
        "
                      >
                        <h4
                          className="
              font-['Nunito']
              text-[#333333]
              text-[13px]
              md:text-[14px]
              font-bold
              leading-[1.4]
            "
                        >
                          {article.title}
                        </h4>

                        <p
                          className="
              mt-2
              font-['Nunito']
              text-[#666666]
              text-[10px]
              md:text-[11px]
              leading-[1.45]
            "
                        >
                          {article.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>

            {/* =========================
                ARTIKEL LAINNYA
            ========================== */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="
                    bg-white
                    border
                    border-[#8F8F8F]
                    rounded-[6px]
                    overflow-hidden
                    shadow-[0_1px_3px_rgba(0,0,0,0.20)]
                    flex
                    flex-col
                    h-full
                  "
                >
                  {/* IMAGE */}
                  <div className="p-3 md:p-4 pb-0">
                    <div
                      className="
  w-full
  h-[230px]
  md:h-[330px]
  rounded-[4px]
  overflow-hidden
  bg-[#D9D9D9]
"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover block"
                      />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="border-t border-[#D8D8D8] mt-3 px-5 py-4 flex flex-col flex-1">
                    <p
                      className="
                        font-['Nunito']
                        text-[#555555]
                        text-[15px]
                        font-medium
                      "
                    >
                      | Artikel
                    </p>

                    {/* META */}
                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-5
                        flex-wrap
                        font-['Nunito']
                        text-[12px]
                        text-[#798379]
                      "
                    >
                      {/* CALENDAR */}
                      <span className="flex items-center gap-2">
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 10.5V2.33333C10.5 1.68992 9.97675 1.16667 9.33333 1.16667H8.16667V0H7V1.16667H3.5V0H2.33333V1.16667H1.16667C0.52325 1.16667 0 1.68992 0 2.33333V10.5C0 11.1434 0.52325 11.6667 1.16667 11.6667H9.33333C9.97675 11.6667 10.5 11.1434 10.5 10.5ZM3.5 9.33333H2.33333V8.16667H3.5V9.33333ZM3.5 7H2.33333V5.83333H3.5V7ZM5.83333 9.33333H4.66667V8.16667H5.83333V9.33333ZM5.83333 7H4.66667V5.83333H5.83333V7ZM8.16667 9.33333H7V8.16667H8.16667V9.33333ZM8.16667 7H7V5.83333H8.16667V7ZM9.33333 4.08333H1.16667V2.91667H9.33333V4.08333Z"
                            fill="#798379"
                          />
                        </svg>
                        05 Mei 2026
                      </span>

                      {/* GARIS */}
                      <span className="w-px h-[15px] bg-[#798379]" />

                      {/* TIME */}
                      <span>10 : 00</span>

                      {/* ADMIN */}
                      <span className="flex items-center gap-2">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.6875 5.6875C6.29321 5.6875 6.88531 5.52072 7.38893 5.20824C7.89256 4.89577 8.28509 4.45163 8.51688 3.93201C8.74867 3.41238 8.80932 2.8406 8.69116 2.28896C8.57299 1.73733 8.28131 1.23062 7.85301 0.832916C7.42472 0.435211 6.87903 0.16437 6.28496 0.0546431C5.6909 -0.0550836 5.07513 0.00123215 4.51553 0.216469C3.95593 0.431706 3.47764 0.796196 3.14112 1.26385C2.80461 1.7315 2.625 2.28131 2.625 2.84375C2.625 3.59796 2.94766 4.32128 3.52199 4.85459C4.09632 5.38789 4.87527 5.6875 5.6875 5.6875ZM5.6875 6.5C3.7893 6.5 0 7.58875 0 9.75V11.375H11.375V9.75C11.375 7.58875 7.5857 6.5 5.6875 6.5Z"
                            fill="#798379"
                          />
                        </svg>
                        Admin Digi
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-3
                        font-['Nunito']
                        text-[#222222]
                        text-[15px]
                        font-bold
                        leading-[1.4]
                      "
                    >
                      {article.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-3
                        font-['Nunito']
                        text-[#666666]
                        text-[11px]
                        leading-[1.65]
                      "
                    >
                      {article.description}
                    </p>

                    {/* BUTTON */}
                    <div className="flex justify-end mt-auto pt-4">
                      <button
                        type="button"
                        onClick={() => navigate(`/artikeldetail/${index + 2}`)}
                        className="
                          flex
                          items-center
                          gap-2
                          border
                          border-[#888888]
                          bg-white
                          rounded-[4px]
                          px-3
                          py-1.5
                          font-['Nunito']
                          text-[10px]
                          text-[#333333]
                          shadow-[0_1px_2px_rgba(0,0,0,0.20)]
                          hover:bg-[#F5F5F5]
                          transition
                        "
                      >
                        Baca Selengkapnya
                        <ArrowRight size={11} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* =========================
                PAGINATION
            ========================== */}
            <div className="flex justify-end items-center mt-20">
              <div
                className="
                  flex
                  items-center
                  h-[48px]
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="
    w-[48px]
h-[48px]
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
                      w-[48px]
h-[48px]
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
                        w-[30px]
h-[30px]
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, 4))
                  }
                  className="
    w-[48px]
h-[48px]
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
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default Artikel;
