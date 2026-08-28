import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import i18n from "../i18n";

import appleimacputih from "../assets/produk/appleimacputih.png";
import hplaptop from "../assets/produk/hplaptop.png";
import Iphone from "../assets/produk/Iphone.png";
import absensi from "../assets/produk/absensi.png";
import absensi2 from "../assets/produk/absensi2.png";
import landscape from "../assets/produk/landscape.png";

function ProdukSoftwareDetail() {
  const navigate = useNavigate();

  const [, setCurrentLang] = useState(i18n.language || "id");

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // =====================================================
  // GAMBAR SLIDER
  // =====================================================

const gallery = [
  {
    image: hplaptop,
  },
  {
    image: absensi,
  },
  {
    image: absensi2,
  },
];

  const nextImage = () => {
    setCurrentImage((prev) =>
      Math.min(prev + 1, gallery.length - 1)
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      Math.max(prev - 1, 0)
    );
  };

  return (
    <div className="w-full bg-white">


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="w-full px-4 py-8 md:px-6 md:py-10">

        <div className="max-w-[1100px] mx-auto">

          {/* =================================================
              TOMBOL KEMBALI
          ================================================== */}

          <button
            type="button"
            onClick={() => navigate("/produk/software")}
            className="
              mb-5
              h-[36px]
              px-4
              bg-[#b94d4d]
              hover:bg-[#a94444]
              text-white
              font-['Nunito']
              text-[10px]
              md:text-xs
              rounded-[5px]
              border
              border-[#843838]
              shadow-[0_2px_4px_rgba(0,0,0,0.18)]
              transition-all
              duration-200
              cursor-pointer
              flex
              items-center
              gap-2
            "
          >
            <span className="text-sm">
              ←
            </span>

            Kembali
          </button>


          {/* =================================================
              DETAIL PRODUK UTAMA
          ================================================== */}

          <div
            className="
              bg-white
              rounded-[8px]
              overflow-hidden
              border
              border-[#dddddd]
              shadow-[0_2px_7px_rgba(0,0,0,0.15)]
            "
          >

            {/* =================================================
                BAGIAN ATAS
            ================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2">


              {/* =================================================
                  INFORMASI PRODUK
              ================================================== */}

              <div
                className="
                  px-6
                  py-6
                  md:px-7
                  md:py-7
                  lg:px-8
                  lg:py-8
                "
              >

                {/* TAG */}

                <div className="flex flex-wrap gap-1.5 mb-4">

                  {[
                    "Software IT",
                    "Website",
                    "SIM",
                    "ERP",
                    "Dashboard",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="
                        font-['Nunito']
                        text-[7px]
                        md:text-[8px]
                        text-[#555555]
                        border
                        border-[#999999]
                        rounded-full
                        px-2
                        py-1
                      "
                    >
                      {tag}
                    </span>
                  ))}

                </div>


                {/* TITLE */}

                <h2
                  className="
                    font-['Nunito']
                    text-[#3f4543]
                    text-2xl
                    md:text-[24px]
                    font-bold
                  "
                >
                  SIM DIGI
                </h2>

                <p
                  className="
                    mt-1
                    font-['Nunito']
                    text-[#444444]
                    text-xs
                    md:text-sm
                    font-bold
                  "
                >
                  ( Sistem Informasi Manajemen DIGI )
                </p>


                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-[470px]
                    font-['Nunito']
                    text-[#555555]
                    text-[10px]
                    md:text-[11px]
                    leading-[1.65]
                    text-justify
                  "
                >
                  Sistem Informasi Manajemen atau biasa disebut
                  juga dengan ERP (Enterprise Resource Planning)
                  merupakan platform digital terpusat yang
                  menghubungkan seluruh alur kerja, data, dan
                  proses bisnis dari setiap departemen perusahaan
                  ke dalam satu sistem yang sama.
                </p>


                {/* BUTTON */}

                <div className="flex flex-wrap gap-2 mt-5">

                  <button
                    type="button"
                    className="
                      h-[34px]
                      px-5
                      bg-[#4c98cf]
                      hover:bg-[#3e88be]
                      text-white
                      font-['Nunito']
                      text-[10px]
                      md:text-[11px]
                      rounded-[5px]
                      border
                      border-[#367baa]
                      shadow-[0_1px_3px_rgba(0,0,0,0.2)]
                      transition-all
                      duration-200
                      cursor-pointer
                    "
                  >
                    Beli Sekarang
                  </button>


                  <button
                    type="button"
                    className="
                      h-[34px]
                      px-4
                      bg-[#35c96b]
                      hover:bg-[#29b95d]
                      text-white
                      font-['Nunito']
                      text-[10px]
                      md:text-[11px]
                      font-bold
                      rounded-[5px]
                      border
                      border-[#269d50]
                      shadow-[0_1px_3px_rgba(0,0,0,0.2)]
                      transition-all
                      duration-200
                      cursor-pointer
                      flex
                      items-center
                      gap-1.5
                    "
                  >
                    <span className="text-sm">
                      ◉
                    </span>

                    Whatsapp Kami
                  </button>

                </div>

              </div>


              {/* =================================================
    GAMBAR UTAMA
================================================== */}

<div
  className="
    relative
    bg-[#DEE4F7]
    min-h-[280px]
    md:min-h-[360px]
    overflow-hidden
    flex
    items-center
    justify-center
    shadow-[inset_3px_0_6px_rgba(0,0,0,0.18)]
    z-10
  "
>
  <img
    src={gallery[currentImage].image}
    alt={`SIM DIGI ${currentImage + 1}`}
    className="
      w-[85%]
      md:w-[80%]
      h-full
      object-contain
    "
  />
</div>

            </div>


           {/* =================================================
    SLIDER
================================================== */}

<div
  className="
    bg-[#f7f9ff]
    border-t
    border-b-[4px]
    border-[#dddddd]
    px-4
    py-4
    md:px-5
    md:py-5
  "
>
  <div className="flex items-center gap-3 md:gap-5">

    {/* LEFT */}
<button
  type="button"
  onClick={previousImage}
  disabled={currentImage === 0}
  className="
    flex-shrink-0
    w-[58px]
    h-[58px]
    md:w-[60px]
    md:h-[60px]
    rounded-full
    bg-white
    border
    border-[#dddddd]
    shadow-[0_2px_5px_rgba(0,0,0,0.15)]
    flex
    items-center
    justify-center
    hover:bg-gray-50
    disabled:opacity-40
    cursor-pointer
    transition-all
    duration-200
  "
>
  <span
    className="
      block
      w-[18px]
      h-[18px]
      md:w-[20px]
      md:h-[20px]
      border-l-[5px]
      border-b-[5px]
      border-[#444444]
      rotate-45
    "
  />
</button>

    {/* THUMBNAILS */}
    <div className="flex-1 grid grid-cols-3 gap-3">
      {gallery.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setCurrentImage(index)}
          className={`
            relative
            w-full
            aspect-[16/9]
            rounded-[5px]
            overflow-hidden
            bg-white
            border
            cursor-pointer
            transition-all
            duration-200
            ${
              currentImage === index
                ? "border-[#6da9e0] shadow-[0_1px_5px_rgba(0,0,0,0.2)]"
                : "border-[#dddddd]"
            }
          `}
        >
          <img
            src={item.image}
            alt={`Screenshot ${index + 1}`}
            className="
              w-full
              h-full
              object-cover
            "
          />
        </button>
      ))}
    </div>

    {/* RIGHT */}
<button
  type="button"
  onClick={nextImage}
  disabled={currentImage === gallery.length - 1}
  className="
    flex-shrink-0
    w-[58px]
    h-[58px]
    md:w-[60px]
    md:h-[60px]
    rounded-full
    bg-white
    border
    border-[#dddddd]
    shadow-[0_2px_5px_rgba(0,0,0,0.15)]
    flex
    items-center
    justify-center
    hover:bg-gray-50
    disabled:opacity-40
    cursor-pointer
    transition-all
    duration-200
  "
>
  <span
    className="
      block
      w-[18px]
      h-[18px]
      md:w-[20px]
      md:h-[20px]
      border-t-[5px]
      border-r-[5px]
      border-[#444444]
      rotate-45
    "
  />
</button>

  </div>
</div>

          </div>


          {/* =================================================
    TENTANG SIM DIGI
================================================== */}

<div
  className="
    mt-7
    bg-white
    rounded-[8px]
    overflow-hidden
    border
    border-[#dddddd]
    shadow-[0_2px_7px_rgba(0,0,0,0.15)]
  "
>
  <div className="grid grid-cols-1 md:grid-cols-[1.05fr_1fr]">

    {/* =================================================
        TEXT
    ================================================== */}

    <div
      className="
        px-6
        py-6
        md:px-8
        md:py-6
      "
    >
      <h2
        className="
          font-['Nunito']
          text-[#3f4543]
          text-[24px]
          md:text-[25px]
          font-bold
        "
      >
        Tentang SIM DIGI
      </h2>

      <p
        className="
          mt-1
          font-['Nunito']
          text-[#444444]
          text-[13px]
          md:text-[14px]
          font-bold
        "
      >
        ( Sistem Informasi Manajemen DIGI )
      </p>

      <p
        className="
          mt-6
          max-w-[500px]
          font-['Nunito']
          text-[#555555]
          text-[11px]
          md:text-[12px]
          leading-[1.55]
          text-justify
        "
      >
        Sistem Informasi Manajemen atau biasa disebut juga dengan
        ERP (Enterprise Resource Planning) merupakan platform
        digital terpusat yang menghubungkan seluruh alur kerja,
        data, dan proses bisnis dari setiap departemen perusahaan
        ke dalam satu sistem yang sama.
      </p>
    </div>


    {/* =================================================
        FITUR
    ================================================== */}

    <div
      className="
        border-t
        md:border-t-0
        md:border-l
        border-[#dddddd]
        px-5
        py-6
        flex
        items-center
      "
    >

      <div className="grid grid-cols-4 gap-3 md:gap-5 w-full">

        {/* =================================================
            TERINTEGRASI
        ================================================== */}

        <div className="text-center">

          <div
            className="
              mx-auto
              w-[48px]
              h-[48px]
              bg-[#e5f1f3]
              rounded-[5px]
              flex
              items-center
              justify-center
              shadow-[0_2px_3px_rgba(0,0,0,0.15)]
            "
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3f4543"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
              <path d="M12 7v5" />
              <path d="M12 12l-6 4" />
              <path d="M12 12l6 4" />
            </svg>
          </div>

          <h3
            className="
              mt-2
              font-['Nunito']
              text-[9px]
              md:text-[10px]
              font-bold
              text-[#444444]
            "
          >
            Terintegrasi
          </h3>

          <p
            className="
              mt-1
              font-['Nunito']
              text-[7px]
              md:text-[8px]
              text-[#666666]
              leading-[1.45]
            "
          >
            Menghubungkan seluruh proses bisnis
          </p>

        </div>


        {/* =================================================
            REAL-TIME
        ================================================== */}

        <div className="text-center">

          <div
            className="
              mx-auto
              w-[48px]
              h-[48px]
              bg-[#e5f1f3]
              rounded-[5px]
              flex
              items-center
              justify-center
              shadow-[0_2px_3px_rgba(0,0,0,0.15)]
            "
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3f4543"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="10" cy="10" r="7" />
              <polyline points="10,6 10,10 13,12" />
              <path d="M15 17h6v-6" />
              <path d="M18 14v3" />
            </svg>
          </div>

          <h3
            className="
              mt-2
              font-['Nunito']
              text-[9px]
              md:text-[10px]
              font-bold
              text-[#444444]
            "
          >
            Real-time
          </h3>

          <p
            className="
              mt-1
              font-['Nunito']
              text-[7px]
              md:text-[8px]
              text-[#666666]
              leading-[1.45]
            "
          >
            Data diakses secara Real-time
          </p>

        </div>


        {/* =================================================
            AMAN
        ================================================== */}

        <div className="text-center">

          <div
            className="
              mx-auto
              w-[48px]
              h-[48px]
              bg-[#e5f1f3]
              rounded-[5px]
              flex
              items-center
              justify-center
              shadow-[0_2px_3px_rgba(0,0,0,0.15)]
            "
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="#3f4543"
            >
              <path d="M12 2L4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3z" />
              <path
                d="M9 12l2 2 4-4"
                fill="none"
                stroke="#e5f1f3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3
            className="
              mt-2
              font-['Nunito']
              text-[9px]
              md:text-[10px]
              font-bold
              text-[#444444]
            "
          >
            Aman
          </h3>

          <p
            className="
              mt-1
              font-['Nunito']
              text-[7px]
              md:text-[8px]
              text-[#666666]
              leading-[1.45]
            "
          >
            Keamanan Data terjamin
          </p>

        </div>


        {/* =================================================
            FLEKSIBEL
        ================================================== */}

        <div className="text-center">

          <div
            className="
              mx-auto
              w-[48px]
              h-[48px]
              bg-[#e5f1f3]
              rounded-[5px]
              flex
              items-center
              justify-center
              shadow-[0_2px_3px_rgba(0,0,0,0.15)]
            "
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3f4543"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l3 2" />
              <path d="M8 4l-2-2" />
              <path d="M16 4l2-2" />
            </svg>
          </div>

          <h3
            className="
              mt-2
              font-['Nunito']
              text-[9px]
              md:text-[10px]
              font-bold
              text-[#444444]
            "
          >
            Fleksibel
          </h3>

          <p
            className="
              mt-1
              font-['Nunito']
              text-[7px]
              md:text-[8px]
              text-[#666666]
              leading-[1.45]
            "
          >
            Dapat disesuaikan dengan kebutuhan perusahaan
          </p>

        </div>

      </div>
    </div>

  </div>
</div>

{/* =================================================
    FITUR UTAMA + MANFAAT
================================================== */}

<div className="mt-7 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-4">

  {/* =================================================
      FITUR UTAMA
  ================================================== */}

  <div
    className="
      bg-[#f8faff]
      rounded-[8px]
      border
      border-[#dddddd]
      shadow-[0_2px_7px_rgba(0,0,0,0.15)]
      px-6
      py-6
    "
  >

    <h2
      className="
        font-['Nunito']
        text-[#3f4543]
        text-[25px]
        font-bold
        inline-block
        border-b-[3px]
        border-[#5598cc]
        pb-1
      "
    >
      Fitur Utama
    </h2>

    <div className="mt-5 space-y-4">

      {/* DASHBOARD */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="#3f4543"
          >
            <path d="M3 11.5L12 4l9 7.5v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8z" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Dashboard Interaktif
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Visualisasi Data untuk pemantauan kinerja secara real-time.
          </p>
        </div>

      </div>


      {/* MANAJEMEN DATA */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f4543"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="12" rx="1" />
            <path d="M8 20h8" />
            <path d="M9 8h6" />
            <path d="M9 11h3" />
            <circle cx="17" cy="17" r="3" fill="#e4f1f3" />
            <path d="M17 15.5v1.5l1 1" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Manajemen Data Terpusat
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Pengelolaan Data perusahaan yang akurat, terstruktur, dan mudah diakses.
          </p>
        </div>

      </div>


      {/* LAPORAN */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f4543"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3h10l4 4v14H5z" />
            <path d="M15 3v5h5" />
            <path d="M8 17v-4" />
            <path d="M11 17v-6" />
            <path d="M14 17v-2" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Laporan dan Analitik
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Menyediakan laporan otomatis dan analisis data untuk mendukung pengambilan keputusan.
          </p>
        </div>

      </div>


      {/* NOTIFIKASI */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f4543"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Notifikasi dan Pengingat
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Pengingat otomatis untuk tugas, deadline, projek, dan aktivitas penting lainnya.
          </p>
        </div>

      </div>


      {/* MANAJEMEN PENGGUNA */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f4543"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20c0-3.5 2.5-5 6-5s6 1.5 6 5" />
            <circle cx="17" cy="9" r="2" />
            <path d="M15 15c3 0 5 1.5 5 4" />
            <path d="M18 17v4" />
            <path d="M16 19h4" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Manajemen Pengguna
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Pengaturan hak akses pengguna yang fleksibel sesuai peran dan tanggung jawab.
          </p>
        </div>

      </div>


      {/* MULTI PERANGKAT */}
      <div className="flex items-start gap-3">

        <div
          className="
            flex-shrink-0
            w-[48px]
            h-[48px]
            bg-[#e4f1f3]
            rounded-[5px]
            flex
            items-center
            justify-center
            shadow-[0_2px_3px_rgba(0,0,0,0.18)]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3f4543"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="12" height="10" rx="1" />
            <path d="M7 18h4" />
            <rect x="16" y="8" width="5" height="10" rx="1" />
          </svg>
        </div>

        <div>
          <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
            Multi Perangkat
          </h3>

          <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
            Dapat diakses melalui Desktop, Tablet, dan Smartphone.
          </p>
        </div>

      </div>

    </div>
  </div>


  {/* =================================================
      KANAN
  ================================================== */}

  <div className="flex flex-col gap-4">

    {/* =================================================
        MANFAAT
    ================================================== */}

    <div
      className="
        bg-[#f8faff]
        rounded-[8px]
        border
        border-[#dddddd]
        shadow-[0_2px_7px_rgba(0,0,0,0.15)]
        px-6
        py-6
      "
    >

      <h2
        className="
          font-['Nunito']
          text-[#3f4543]
          text-[25px]
          font-bold
          inline-block
          border-b-[3px]
          border-[#5598cc]
          pb-1
        "
      >
        Manfaat
      </h2>

      <div className="mt-5 space-y-4">

        {[
          "Meningkatkan efisiensi operasional Perusahaan",
          "Mempercepat proses kerja dan pengambilan keputusan",
          "Mengurangi kesalahan dan duplikasi data",
          "Transparansi data dan akuntabilitas lebih baik",
          "Mendukung pertumbuhan bisnis yang berkelanjutan",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >

            <div
              className="
                flex-shrink-0
                w-[34px]
                h-[34px]
                rounded-full
                bg-[#5598cc]
                flex
                items-center
                justify-center
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l4 4L19 6" />
              </svg>
            </div>

            <p className="font-['Nunito'] text-[10px] text-[#444444]">
              {item}
            </p>

          </div>
        ))}

      </div>
    </div>


    {/* =================================================
        KEBUTUHAN KHUSUS
    ================================================== */}

    <div
      className="
        bg-[#f1f4ff]
        rounded-[8px]
        border
        border-[#dddddd]
        shadow-[0_2px_7px_rgba(0,0,0,0.15)]
        px-6
        py-6
      "
    >

      <div className="flex items-center gap-5">

        {/* ICON */}

        <div
          className="
            flex-shrink-0
            w-[54px]
            h-[54px]
            rounded-full
            bg-[#dceef1]
            flex
            items-center
            justify-center
          "
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5598cc"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="14" height="12" rx="1" />
            <path d="M7 20h6" />
            <path d="M10 16v4" />
            <circle cx="18" cy="17" r="3" />
            <path d="M18 15.5v1.5l1 1" />
          </svg>
        </div>


        <div className="flex-1">

          <h2
            className="
              font-['Nunito']
              text-[#3f4543]
              text-[25px]
              font-bold
            "
          >
            Kebutuhan Khusus?
          </h2>

          <p
            className="
              mt-2
              font-['Nunito']
              text-[10px]
              leading-[1.5]
              text-[#555555]
              max-w-[300px]
            "
          >
            Kami siap membantu menyesuaikan produk sesuai kebutuhan proyek anda.
          </p>

          <button
            type="button"
            className="
              mt-4
              h-[36px]
              px-4
              bg-white
              border
              border-[#999999]
              rounded-[6px]
              shadow-[0_1px_3px_rgba(0,0,0,0.15)]
              font-['Nunito']
              text-[9px]
              text-[#444444]
              flex
              items-center
              gap-3
              hover:bg-gray-50
              transition
              cursor-pointer
            "
          >
            Konsultasi Sekarang

            <span className="text-[16px]">
              →
            </span>
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

        </div>

        

      </section>

      


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

    </div>
  );
}

export default ProdukSoftwareDetail;