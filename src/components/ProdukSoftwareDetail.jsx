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
    setCurrentImage((prev) => Math.min(prev + 1, gallery.length - 1));
  };

  const previousImage = () => {
    setCurrentImage((prev) => Math.max(prev - 1, 0));
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
            <span className="text-sm">←</span>
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
                  {["Software IT", "Website", "SIM", "ERP", "Dashboard"].map(
                    (tag, index) => (
                      <span
                        key={index}
className="
  px-3
  py-1
  text-[14px]
  rounded-full
  border
  border-[#999999]
  text-[#555555]
"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>

                {/* TITLE */}

<h2
  className="
    font-['Nunito']
    text-[#3f4543]
    text-3xl
    md:text-[34px]
    font-bold
  "
>
  SIM DIGI
</h2>

<p
  className="
    mt-2
    font-['Nunito']
    text-[#444444]
    text-base
    md:text-[19px]
    font-bold
  "
>
  ( Sistem Informasi Manajemen DIGI )
</p>


                {/* DESCRIPTION */}

<p
  className="
    mt-7
    max-w-[700px]
    font-['Nunito']
    text-[#555555]
    text-[15px]
    md:text-[16px]
    leading-[1.7]
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
    h-[42px]
    px-8
    bg-[#4c98cf]
    hover:bg-[#3e88be]
    text-white
    font-['Nunito']
    text-[12px]
    md:text-[14px]
    rounded-[6px]
    border
    border-[#367baa]
    shadow-[0_2px_4px_rgba(0,0,0,0.2)]
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
    h-[42px]
    px-7
    bg-[#35c96b]
    hover:bg-[#29b95d]
    text-white
    font-['Nunito']
    text-[12px]
    md:text-[14px]
    font-bold
    rounded-[6px]
    border
    border-[#269d50]
    shadow-[0_2px_4px_rgba(0,0,0,0.2)]
    transition-all
    duration-200
    cursor-pointer
    flex
    items-center
    gap-2
  "
>
                    <span className="flex items-center justify-center">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.25 3.63757C20.1038 2.4802 18.7388 1.56253 17.2344 0.93802C15.73 0.313516 14.1164 -0.00532896 12.4875 6.73689e-05C5.6625 6.73689e-05 0.1 5.56257 0.1 12.3876C0.1 14.5751 0.675 16.7001 1.75 18.5751L0 25.0001L6.5625 23.2751C8.375 24.2626 10.4125 24.7876 12.4875 24.7876C19.3125 24.7876 24.875 19.2251 24.875 12.4001C24.875 9.08757 23.5875 5.97507 21.25 3.63757ZM12.4875 22.6876C10.6375 22.6876 8.825 22.1876 7.2375 21.2501L6.8625 21.0251L2.9625 22.0501L4 18.2501L3.75 17.8626C2.72193 16.2214 2.17616 14.3242 2.175 12.3876C2.175 6.71257 6.8 2.08757 12.475 2.08757C15.225 2.08757 17.8125 3.16257 19.75 5.11257C20.7095 6.0674 21.4699 7.20325 21.987 8.45423C22.5042 9.70521 22.7677 11.0464 22.7625 12.4001C22.7875 18.0751 18.1625 22.6876 12.4875 22.6876ZM18.1375 14.9876C17.825 14.8376 16.3 14.0876 16.025 13.9751C15.7375 13.8751 15.5375 13.8251 15.325 14.1251C15.1125 14.4376 14.525 15.1376 14.35 15.3376C14.175 15.5501 13.9875 15.5751 13.675 15.4126C13.3625 15.2626 12.3625 14.9251 11.1875 13.8751C10.2625 13.0501 9.65 12.0376 9.4625 11.7251C9.2875 11.4126 9.4375 11.2501 9.6 11.0876C9.7375 10.9501 9.9125 10.7251 10.0625 10.5501C10.2125 10.3751 10.275 10.2376 10.375 10.0376C10.475 9.82507 10.425 9.65007 10.35 9.50007C10.275 9.35007 9.65 7.82507 9.4 7.20007C9.15 6.60007 8.8875 6.67507 8.7 6.66257H8.1C7.8875 6.66257 7.5625 6.73757 7.275 7.05007C7 7.36257 6.2 8.11257 6.2 9.63757C6.2 11.1626 7.3125 12.6376 7.4625 12.8376C7.6125 13.0501 9.65 16.1751 12.75 17.5126C13.4875 17.8376 14.0625 18.0251 14.5125 18.1626C15.25 18.4001 15.925 18.3626 16.4625 18.2876C17.0625 18.2001 18.3 17.5376 18.55 16.8126C18.8125 16.0876 18.8125 15.4751 18.725 15.3376C18.6375 15.2001 18.45 15.1376 18.1375 14.9876Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    WhatsApp Kami
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
                  Sistem Informasi Manajemen atau biasa disebut juga dengan ERP
                  (Enterprise Resource Planning) merupakan platform digital
                  terpusat yang menghubungkan seluruh alur kerja, data, dan
                  proses bisnis dari setiap departemen perusahaan ke dalam satu
                  sistem yang sama.
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
                        width="21"
                        height="22"
                        viewBox="0 0 32 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.068 11.6371V15.6931C18.068 15.8411 18.0627 15.9884 18.052 16.1351C18.1119 16.3989 18.2246 16.6478 18.3834 16.8668C18.5423 17.0858 18.7438 17.2703 18.976 17.4091L25.148 21.1011C26.0385 21.6337 26.7756 22.3882 27.2874 23.2909C27.7992 24.1935 28.0682 25.2135 28.068 26.2511V28.3691C29.3972 28.8569 30.5112 29.799 31.213 31.0287C31.9148 32.2584 32.1592 33.6967 31.9031 35.0892C31.647 36.4817 30.9069 37.7389 29.8135 38.6385C28.7201 39.5381 27.3439 40.0222 25.9281 40.0052C24.5123 39.9882 23.1481 39.4712 22.0766 38.5457C21.0051 37.6201 20.2954 36.3455 20.0728 34.9472C19.8501 33.5489 20.129 32.117 20.8601 30.9044C21.5913 29.6919 22.7275 28.7769 24.068 28.3211V26.2511C24.0679 25.9053 23.9781 25.5654 23.8074 25.2646C23.6367 24.9639 23.3909 24.7125 23.094 24.5351L16.922 20.8431C16.6068 20.6547 16.3096 20.4378 16.034 20.1951C15.7591 20.4377 15.4625 20.6546 15.148 20.8431L8.97601 24.5351C8.67916 24.7125 8.43337 24.9639 8.26266 25.2646C8.09195 25.5654 8.00215 25.9053 8.00201 26.2511V28.3451C9.337 28.8169 10.4622 29.7455 11.1787 30.9667C11.8953 32.1879 12.157 33.6231 11.9176 35.0187C11.6783 36.4142 10.9533 37.6802 9.87076 38.5928C8.78824 39.5055 7.41792 40.0061 6.00201 40.0061C4.58611 40.0061 3.21579 39.5055 2.13327 38.5928C1.05075 37.6802 0.325741 36.4142 0.0863901 35.0187C-0.15296 33.6231 0.108761 32.1879 0.825293 30.9667C1.54182 29.7455 2.66703 28.8169 4.00201 28.3451V26.2511C4.00186 25.2135 4.27081 24.1935 4.7826 23.2909C5.29439 22.3882 6.03152 21.6337 6.92201 21.1011L13.094 17.4091C13.3262 17.2703 13.5278 17.0858 13.6866 16.8668C13.8454 16.6478 13.9582 16.3989 14.018 16.1351C14.0072 15.988 14.0019 15.8406 14.002 15.6931V11.6611C12.6698 11.1904 11.5464 10.2648 10.8296 9.04723C10.1127 7.8297 9.84837 6.3983 10.0831 5.00504C10.3177 3.61177 11.0364 2.34596 12.1126 1.43046C13.1887 0.514952 14.5534 0.00844425 15.9663 0.000104645C17.3791 -0.00823496 18.7496 0.482128 19.8365 1.38487C20.9234 2.2876 21.657 3.54484 21.9081 4.93524C22.1592 6.32563 21.9118 7.76005 21.2094 8.98596C20.5069 10.2119 19.3945 11.1507 18.068 11.6371Z"
                          fill="#3B413B"
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
                        width="23"
                        height="24"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M42.1666 21.0834V42.1666H23V21.0834H42.1666ZM38.3334 36.4166H26.8334V38.3334H38.3334V36.4166ZM17.25 0C26.7769 0 34.5 7.72306 34.5 17.25C34.4878 17.8914 34.4366 18.5315 34.3466 19.1666H30.5134C30.6128 18.5325 30.664 17.8918 30.6666 17.25C30.6666 9.84014 24.6599 3.83336 17.25 3.83336C9.84014 3.83336 3.83336 9.84014 3.83336 17.25C3.83336 24.6599 9.84014 30.6666 17.25 30.6666C18.5481 30.6703 19.8397 30.483 21.0834 30.1109V34.0591C19.8267 34.3528 18.5405 34.5008 17.25 34.5C7.72306 34.5 0 26.7769 0 17.25C0 7.72306 7.72306 0 17.25 0ZM38.3334 30.6666H26.8334V32.5834H38.3334V30.6666ZM38.3334 24.9166H26.8334V26.8334H38.3334V24.9166ZM11.1599 8.44253L17.2459 14.5285L22.5882 9.18643L25.2987 11.897L19.9565 17.2391L19.9692 17.2519L17.2586 19.9625L17.2459 19.9497L17.2348 19.9609L14.5242 17.2504L14.5353 17.2391L8.44927 11.1531L11.1599 8.44253Z"
                          fill="#3B413B"
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
                        width="21"
                        height="22"
                        viewBox="0 0 31 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.8333 5.39583L15.4167 0L0 5.39583V17.8217C0 24.1841 3.90658 28.6318 7.548 31.393C9.74654 33.0432 12.1579 34.3889 14.7167 35.3936C14.8915 35.4594 15.0672 35.5221 15.244 35.5817L15.4167 35.6433L15.5924 35.5817C15.9295 35.4646 16.2636 35.3392 16.5945 35.2055C18.9775 34.2237 21.2259 32.9426 23.2853 31.393C26.9283 28.6318 30.8333 24.1841 30.8333 17.8217V5.39583ZM13.8765 23.0865L7.33833 16.5452L9.51825 14.3637L13.8781 18.7251L22.5993 10.0039L24.7807 12.1838L13.8765 23.0865Z"
                          fill="#3B413B"
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
                        width="22"
                        height="23"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.9989 13.2486L14.9989 20.2486L11.4989 16.7486M18.9294 1.80188L21.0661 3.62188C21.6051 4.08038 22.2736 4.35688 22.9771 4.41463L25.7771 4.63863C26.573 4.70218 27.3202 5.04704 27.8849 5.61142C28.4496 6.1758 28.7949 6.92282 28.8589 7.71863L29.0811 10.5186C29.1389 11.2239 29.4171 11.8941 29.8756 12.4314L31.6956 14.5664C32.2143 15.1745 32.4993 15.9476 32.4993 16.7469C32.4993 17.5462 32.2143 18.3193 31.6956 18.9274L29.8756 21.0641C29.4171 21.6031 29.1389 22.2716 29.0829 22.9769L28.8589 25.7769C28.7953 26.5727 28.4505 27.3199 27.8861 27.8846C27.3217 28.4493 26.5747 28.7946 25.7789 28.8586L22.9789 29.0826C22.274 29.1385 21.6046 29.4153 21.0661 29.8736L18.9294 31.6936C18.3213 32.2123 17.5482 32.4973 16.7489 32.4973C15.9496 32.4973 15.1765 32.2123 14.5684 31.6936L12.4334 29.8736C11.8945 29.4149 11.2244 29.1381 10.5189 29.0826L7.71889 28.8586C6.9228 28.7946 6.17556 28.449 5.61114 27.884C5.04672 27.3189 4.70204 26.5713 4.63889 25.7751L4.41489 22.9769C4.35821 22.2724 4.08081 21.6036 3.62214 21.0659L1.80214 18.9274C1.28437 18.3195 1 17.5471 1 16.7486C1 15.9501 1.28437 15.1777 1.80214 14.5699L3.62214 12.4314C4.08239 11.8924 4.35714 11.2239 4.41314 10.5186L4.63714 7.72038C4.70085 6.9237 5.04646 6.17583 5.61192 5.61101C6.17737 5.0462 6.92564 4.70144 7.72239 4.63863L10.5189 4.41638C11.224 4.36007 11.8934 4.08264 12.4316 3.62363L14.5684 1.80363C15.1765 1.28493 15.9496 1 16.7489 1C17.5482 1 18.3213 1.28318 18.9294 1.80188Z"
                          stroke="#3B413B"
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
                      width="20"
                      height="21"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.9457 15.6221L17.6604 0.34787C17.5503 0.237596 17.4196 0.150109 17.2757 0.0904173C17.1317 0.0307253 16.9775 0 16.8217 0C16.6659 0 16.5116 0.0307253 16.3677 0.0904173C16.2238 0.150109 16.0931 0.237596 15.983 0.34787L0.697656 15.6221C0.252344 16.0674 0 16.6723 0 17.3031C0 18.6131 1.06504 19.6781 2.375 19.6781H3.98555V30.5772C3.98555 31.234 4.51621 31.7647 5.17305 31.7647H14.4467V23.4522H18.6029V31.7647H28.4703C29.1271 31.7647 29.6578 31.234 29.6578 30.5772V19.6781H31.2684C31.8992 19.6781 32.5041 19.4295 32.9494 18.9805C33.8734 18.0528 33.8734 16.5498 32.9457 15.6221Z"
                        fill="#3B413B"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
                      Dashboard Interaktif
                    </h3>

                    <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
                      Visualisasi Data untuk pemantauan kinerja secara
                      real-time.
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
                      width="21"
                      height="22"
                      viewBox="0 0 34 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.25 23.75V21.375H30.7551C30.601 20.6319 30.3059 19.9253 29.8858 19.2933L31.6552 17.5239L29.9761 15.8448L28.2067 17.6142C27.5747 17.1941 26.8681 16.899 26.125 16.7449V14.25H23.75V16.7449C23.0069 16.899 22.3003 17.1941 21.6683 17.6142L19.8989 15.8448L18.2198 17.5239L19.9892 19.2933C19.5691 19.9253 19.274 20.6319 19.1199 21.375H16.625V23.75H19.1199C19.274 24.4931 19.5691 25.1997 19.9892 25.8317L18.2198 27.6011L19.8989 29.2802L21.6683 27.5108C22.3003 27.9309 23.0069 28.226 23.75 28.3801V30.875H26.125V28.3801C26.8681 28.226 27.5747 27.9309 28.2067 27.5108L29.9761 29.2802L31.6552 27.6011L29.8858 25.8317C30.3059 25.1997 30.601 24.4931 30.7551 23.75H33.25ZM24.9375 26.125C24.2329 26.125 23.5441 25.9161 22.9583 25.5246C22.3724 25.1332 21.9158 24.5768 21.6462 23.9258C21.3765 23.2748 21.306 22.5585 21.4435 21.8675C21.5809 21.1764 21.9202 20.5417 22.4184 20.0434C22.9167 19.5452 23.5514 19.2059 24.2425 19.0685C24.9335 18.931 25.6498 19.0015 26.3008 19.2712C26.9518 19.5408 27.5082 19.9974 27.8996 20.5833C28.2911 21.1691 28.5 21.8579 28.5 22.5625C28.4991 23.507 28.1234 24.4126 27.4555 25.0805C26.7876 25.7484 25.882 26.1241 24.9375 26.125Z"
                        fill="#3B413B"
                      />
                      <path
                        d="M30.875 0H2.375C1.74511 0 1.14102 0.250222 0.695621 0.695621C0.250222 1.14102 0 1.74511 0 2.375V26.125C0 26.7549 0.250222 27.359 0.695621 27.8044C1.14102 28.2498 1.74511 28.5 2.375 28.5H14.25V26.125H2.375V9.5H30.875V13.0625H33.25V2.375C33.25 1.74511 32.9998 1.14102 32.5544 0.695621C32.109 0.250222 31.5049 0 30.875 0ZM30.875 7.125H2.375V2.375H30.875V7.125Z"
                        fill="#3B413B"
                      />
                      <path
                        d="M21.375 5.9375C22.0308 5.9375 22.5625 5.40584 22.5625 4.75C22.5625 4.09416 22.0308 3.5625 21.375 3.5625C20.7192 3.5625 20.1875 4.09416 20.1875 4.75C20.1875 5.40584 20.7192 5.9375 21.375 5.9375Z"
                        fill="#3B413B"
                      />
                      <path
                        d="M24.9375 5.9375C25.5933 5.9375 26.125 5.40584 26.125 4.75C26.125 4.09416 25.5933 3.5625 24.9375 3.5625C24.2817 3.5625 23.75 4.09416 23.75 4.75C23.75 5.40584 24.2817 5.9375 24.9375 5.9375Z"
                        fill="#3B413B"
                      />
                      <path
                        d="M28.5 5.9375C29.1558 5.9375 29.6875 5.40584 29.6875 4.75C29.6875 4.09416 29.1558 3.5625 28.5 3.5625C27.8442 3.5625 27.3125 4.09416 27.3125 4.75C27.3125 5.40584 27.8442 5.9375 28.5 5.9375Z"
                        fill="#3B413B"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
                      Manajemen Data Terpusat
                    </h3>

                    <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
                      Pengelolaan Data perusahaan yang akurat, terstruktur, dan
                      mudah diakses.
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
                      width="20"
                      height="21"
                      viewBox="0 0 26 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.2383 8.9775L25.1908 8.835C25.1207 8.66032 25.0125 8.50346 24.8742 8.37583L16.9575 0.459167C16.8197 0.325703 16.6587 0.218404 16.4825 0.1425L16.34 0.0949999C16.2024 0.0469 16.0582 0.0202005 15.9125 0.0158333C15.8808 0.0158333 15.8492 0 15.8333 0H3.16667C1.425 0 0 1.425 0 3.16667V28.5C0 30.2417 1.425 31.6667 3.16667 31.6667H22.1667C23.9083 31.6667 25.3333 30.2417 25.3333 28.5V9.5C25.3333 9.5 25.3175 9.43667 25.3175 9.405C25.3175 9.2625 25.2858 9.13583 25.2383 8.99333V8.9775ZM3.16667 28.4842V3.15083H14.25V9.48417C14.25 10.355 14.9625 11.0675 15.8333 11.0675H22.1667V28.4842H3.16667Z"
                        fill="#3B413B"
                      />
                      <path
                        d="M6.3335 15.8151H9.50016V25.3151H6.3335V15.8151ZM11.0835 12.6484H14.2502V25.3151H11.0835V12.6484ZM15.8335 18.9818H19.0002V25.3151H15.8335V18.9818Z"
                        fill="#3B413B"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
                      Laporan dan Analitik
                    </h3>

                    <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
                      Menyediakan laporan otomatis dan analisis data untuk
                      mendukung pengambilan keputusan.
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
                      width="20"
                      height="21"
                      viewBox="0 0 29 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5 7.12501C28.5 10.1808 26.0142 12.6667 22.9583 12.6667C19.9025 12.6667 17.4167 10.1808 17.4167 7.12501C17.4167 4.06917 19.9025 1.58334 22.9583 1.58334C26.0142 1.58334 28.5 4.06917 28.5 7.12501ZM25.3333 15.5008C24.5417 15.7067 23.75 15.8333 22.9583 15.8333C20.65 15.8292 18.4375 14.9103 16.8052 13.2781C15.173 11.6459 14.2542 9.43332 14.25 7.12501C14.25 4.79751 15.1683 2.69167 16.625 1.12417C16.3377 0.771948 15.9754 0.488261 15.5645 0.293786C15.1536 0.0993116 14.7046 -0.00105213 14.25 8.31675e-06C12.5083 8.31675e-06 11.0833 1.42501 11.0833 3.16667V3.62584C6.38083 5.01917 3.16667 9.34168 3.16667 14.25V23.75L0 26.9167V28.5H28.5V26.9167L25.3333 23.75V15.5008ZM14.25 33.25C16.0075 33.25 17.4167 31.8408 17.4167 30.0833H11.0833C11.0833 30.9232 11.417 31.7286 12.0108 32.3225C12.6047 32.9164 13.4101 33.25 14.25 33.25Z"
                        fill="#3B413B"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
                      Notifikasi dan Pengingat
                    </h3>

                    <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
                      Pengingat otomatis untuk tugas, deadline, projek, dan
                      aktivitas penting lainnya.
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
                      width="22"
                      height="23"
                      viewBox="0 0 37 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.95 0C14.9126 0 16.7948 0.790176 18.1826 2.1967C19.5704 3.60322 20.35 5.51088 20.35 7.5C20.35 9.48912 19.5704 11.3968 18.1826 12.8033C16.7948 14.2098 14.9126 15 12.95 15C10.9874 15 9.10518 14.2098 7.71741 12.8033C6.32964 11.3968 5.55 9.48912 5.55 7.5C5.55 5.51088 6.32964 3.60322 7.71741 2.1967C9.10518 0.790176 10.9874 0 12.95 0ZM10.308 17.8125H15.592C16.2742 17.8125 16.9448 17.8828 17.5866 18.0059C17.4652 19.0898 18.0144 20.0918 18.8469 20.6309C17.8872 21.252 17.3033 22.4824 17.6906 23.7539C17.9219 24.5098 18.2341 25.248 18.6388 25.957C19.0434 26.666 19.5175 27.3105 20.0494 27.8906C20.957 28.8809 22.3388 28.9688 23.3563 28.4004V28.4531C23.3563 28.9922 23.5123 29.5371 23.813 29.9941L1.71703 30C0.768906 30 0 29.2207 0 28.2598C0 22.4883 4.61344 17.8125 10.308 17.8125ZM25.2063 12.7852C25.2063 12.375 25.4664 12.0059 25.8595 11.918C26.4666 11.7773 27.1025 11.7012 27.75 11.7012C28.3975 11.7012 29.0334 11.7773 29.6405 11.918C30.0336 12.0059 30.2938 12.375 30.2938 12.7852V14.5781C30.7505 14.7773 31.1841 15.0293 31.583 15.3281L33.0225 14.4902C33.3752 14.2852 33.8145 14.332 34.092 14.6309C34.5314 15.1055 34.9188 15.6387 35.2541 16.2246C35.5894 16.8105 35.8495 17.4199 36.0345 18.041C36.1559 18.4336 35.9709 18.8438 35.6183 19.0488L34.173 19.8926C34.1961 20.127 34.2134 20.3672 34.2134 20.6133C34.2134 20.8594 34.2019 21.0938 34.173 21.334L35.6183 22.1777C35.9709 22.3828 36.1502 22.793 36.0345 23.1855C35.8438 23.8066 35.5836 24.416 35.2541 25.002C34.9245 25.5879 34.5314 26.1211 34.092 26.5957C33.8145 26.8945 33.3694 26.9414 33.0225 26.7363L31.583 25.8984C31.1841 26.1973 30.7563 26.4492 30.2938 26.6484V28.4414C30.2938 28.8516 30.0336 29.2207 29.6405 29.3086C29.0334 29.4492 28.3975 29.5254 27.75 29.5254C27.1025 29.5254 26.4666 29.4492 25.8595 29.3086C25.4664 29.2207 25.2063 28.8516 25.2063 28.4414V26.6543C24.7438 26.4551 24.3044 26.2031 23.9055 25.8984L22.4775 26.7363C22.1248 26.9414 21.6855 26.8945 21.408 26.5957C20.9686 26.1211 20.5813 25.5879 20.2459 25.002C19.9106 24.416 19.6505 23.8066 19.4655 23.1855C19.3441 22.793 19.5291 22.3828 19.8817 22.1777L21.3155 21.3398C21.2923 21.0996 21.275 20.8594 21.275 20.6133C21.275 20.3672 21.2866 20.127 21.3155 19.8867L19.8759 19.043C19.5233 18.8379 19.3441 18.4277 19.4597 18.0352C19.6505 17.4141 19.9048 16.8047 20.2402 16.2188C20.5755 15.6328 20.9628 15.0996 21.4022 14.625C21.6797 14.3262 22.1191 14.2793 22.4717 14.4844L23.9055 15.3223C24.3044 15.0234 24.7438 14.7715 25.2063 14.5664V12.7793V12.7852ZM30.5308 20.6074C30.5479 20.2269 30.4888 19.8468 30.3569 19.4901C30.225 19.1334 30.0232 18.8074 29.7635 18.532C29.5039 18.2566 29.1918 18.0374 28.8463 17.8876C28.5007 17.7378 28.1287 17.6606 27.7529 17.6606C27.377 17.6606 27.0051 17.7378 26.6595 17.8876C26.3139 18.0374 26.0019 18.2566 25.7423 18.532C25.4826 18.8074 25.2808 19.1334 25.1489 19.4901C25.017 19.8468 24.9579 20.2269 24.975 20.6074C24.9579 20.988 25.017 21.3681 25.1489 21.7248C25.2808 22.0815 25.4826 22.4074 25.7423 22.6828C26.0019 22.9583 26.3139 23.1775 26.6595 23.3273C27.0051 23.477 27.377 23.5543 27.7529 23.5543C28.1287 23.5543 28.5007 23.477 28.8463 23.3273C29.1918 23.1775 29.5039 22.9583 29.7635 22.6828C30.0232 22.4074 30.225 22.0815 30.3569 21.7248C30.4888 21.3681 30.5479 20.988 30.5308 20.6074Z"
                        fill="#3B413B"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-['Nunito'] text-[11px] font-bold text-[#444444]">
                      Manajemen Pengguna
                    </h3>

                    <p className="mt-1 font-['Nunito'] text-[9px] leading-[1.45] text-[#555555]">
                      Pengaturan hak akses pengguna yang fleksibel sesuai peran
                      dan tanggung jawab.
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
                      width="22"
                      height="23"
                      viewBox="0 0 31 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9 0C21.9078 0 22.8744 0.400356 23.587 1.11299C24.2996 1.82563 24.7 2.79218 24.7 3.8V7.6H27.55C28.3059 7.6 29.0308 7.90027 29.5653 8.43474C30.0997 8.96922 30.4 9.69413 30.4 10.45V21.85C30.4 22.6059 30.0997 23.3308 29.5653 23.8653C29.0308 24.3997 28.3059 24.7 27.55 24.7H22.8V26.6H23.75C24.002 26.6 24.2436 26.7001 24.4218 26.8782C24.5999 27.0564 24.7 27.298 24.7 27.55C24.7 27.802 24.5999 28.0436 24.4218 28.2218C24.2436 28.3999 24.002 28.5 23.75 28.5H14.25C13.998 28.5 13.7564 28.3999 13.5782 28.2218C13.4001 28.0436 13.3 27.802 13.3 27.55C13.3 27.298 13.4001 27.0564 13.5782 26.8782C13.7564 26.7001 13.998 26.6 14.25 26.6H15.2V24.7H11.4C11.4 25.2039 11.1998 25.6872 10.8435 26.0435C10.4872 26.3998 10.0039 26.6 9.5 26.6H5.7C5.19609 26.6 4.71282 26.3998 4.3565 26.0435C4.00018 25.6872 3.8 25.2039 3.8 24.7V19C2.79218 19 1.82563 18.5996 1.11299 17.887C0.400356 17.1744 0 16.2078 0 15.2V3.8C0 2.79218 0.400356 1.82563 1.11299 1.11299C1.82563 0.400356 2.79218 0 3.8 0H20.9ZM17.1 26.6H20.9V24.7H17.1V26.6ZM5.7 24.7H9.5V17.1H5.7V24.7ZM10.45 9.5C10.198 9.5 9.95641 9.60009 9.77825 9.77825C9.60009 9.95641 9.5 10.198 9.5 10.45V15.2C10.0039 15.2 10.4872 15.4002 10.8435 15.7565C11.1998 16.1128 11.4 16.5961 11.4 17.1V22.8H27.55C27.802 22.8 28.0436 22.6999 28.2218 22.5218C28.3999 22.3436 28.5 22.102 28.5 21.85V10.45C28.5 10.198 28.3999 9.95641 28.2218 9.77825C28.0436 9.60009 27.802 9.5 27.55 9.5H10.45ZM3.8 1.9C3.29609 1.9 2.81282 2.10018 2.4565 2.4565C2.10018 2.81282 1.9 3.29609 1.9 3.8V15.2C1.9 15.7039 2.10018 16.1872 2.4565 16.5435C2.81282 16.8998 3.29609 17.1 3.8 17.1C3.8 16.5961 4.00018 16.1128 4.3565 15.7565C4.71282 15.4002 5.19609 15.2 5.7 15.2H7.6V10.45C7.6 9.69413 7.90027 8.96922 8.43474 8.43474C8.96922 7.90027 9.69413 7.6 10.45 7.6H22.8V3.8C22.8 3.29609 22.5998 2.81282 22.2435 2.4565C21.8872 2.10018 21.4039 1.9 20.9 1.9H3.8Z"
                        fill="#3B413B"
                      />
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
                    <div key={index} className="flex items-center gap-4">
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
                      width="25"
                      height="26"
                      viewBox="0 0 42 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.2187 39.5833L28.5937 36.4583C28.1771 36.2847 27.7868 36.1028 27.4229 35.9125C27.059 35.7222 26.6854 35.4875 26.3021 35.2083L23.2812 36.1458L21.1979 32.6042L23.5937 30.5208C23.5243 30.1042 23.4896 29.6528 23.4896 29.1667C23.4896 28.6806 23.5243 28.2292 23.5937 27.8125L21.1979 25.7292L23.2812 22.1875L26.3021 23.125C26.684 22.8472 27.0576 22.6132 27.4229 22.4229C27.7882 22.2326 28.1785 22.05 28.5937 21.875L29.2187 18.75H33.3854L34.0104 21.875C34.4271 22.0486 34.8181 22.2312 35.1833 22.4229C35.5486 22.6146 35.9215 22.8486 36.3021 23.125L39.3229 22.1875L41.4062 25.7292L39.0104 27.8125C39.0799 28.2292 39.1146 28.6806 39.1146 29.1667C39.1146 29.6528 39.0799 30.1042 39.0104 30.5208L41.4062 32.6042L39.3229 36.1458L36.3021 35.2083C35.9201 35.4861 35.5472 35.7208 35.1833 35.9125C34.8194 36.1042 34.4285 36.2861 34.0104 36.4583L33.3854 39.5833H29.2187ZM0 37.5V0H37.5V15.9375C36.8403 15.625 36.1632 15.3729 35.4687 15.1812C34.7743 14.9896 34.0625 14.8431 33.3333 14.7417V4.16667H4.16667V22.9167H12.9167C13.2292 23.8542 13.75 24.6701 14.4792 25.3646C15.2083 26.059 16.0243 26.5451 16.9271 26.8229C16.6146 28.6979 16.6583 30.5556 17.0583 32.3958C17.4583 34.2361 18.2132 35.9375 19.3229 37.5H0ZM34.2458 32.1083C35.0611 31.2931 35.4687 30.3125 35.4687 29.1667C35.4687 28.0208 35.0611 27.0403 34.2458 26.225C33.4306 25.4097 32.4493 25.0014 31.3021 25C30.1549 24.9986 29.1743 25.4069 28.3604 26.225C27.5465 27.0431 27.1382 28.0236 27.1354 29.1667C27.1326 30.3097 27.541 31.291 28.3604 32.1104C29.1799 32.9299 30.1604 33.3375 31.3021 33.3333C32.4437 33.3292 33.425 32.9194 34.2458 32.1083Z"
                        fill="#4F8DC0"
                      />
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
                      Kami siap membantu menyesuaikan produk sesuai kebutuhan
                      proyek anda.
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
                      <span className="text-[16px]">→</span>
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