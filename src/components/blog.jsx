import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import leavingRoom from "../assets/leaving room.png";
import mekanik from "../assets/mekanik.png";
import karir from "../assets/karir.png";

function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      {/* =========================
    BANNER BLOG
========================== */}
      <section
        className="
    w-full
    mt-[64px]
    h-[230px]
    px-6
    md:px-8
    flex
    items-center
  "
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #DEE5FB 25%, #D5DDF6 50%, #C3CDEE 75%, #A2B2E4 100%)",
        }}
      >
        <div className="max-w-[1150px] w-full mx-auto">
          <h1
            className="
        font-['Cormorant_Garamond']
        text-[#222222]
        text-4xl
        md:text-[50px]
        font-semibold
        tracking-wide
      "
          >
            Blog
          </h1>

          <p
            className="
        mt-4
        max-w-[900px]
        font-['Nunito']
        text-[#666666]
        text-[12px]
        md:text-[13px]
        leading-relaxed
      "
          >
            PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM
            (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP),
            Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart
            dan Material Industri untuk mendukung kebutuhan bisnis.
          </p>
        </div>
      </section>

      {/* =========================
    AREA KONTEN BLOG
========================== */}
      <div className="w-full bg-[#B3CBDD] pt-[25px] pb-[25px]">
        {/* =========================
            CARD BLOG
        ========================== */}
        <div className="max-w-[1150px] mx-auto bg-[#F7FBFF] rounded-[6px] px-8 py-[25px] shadow-[0_3px_10px_rgba(0,0,0,0.10)]">
          {/* JUDUL */}
          <h1
            className="text-[50px] font-bold text-[#803436] mb-5 drop-shadow-[0_3px_2px_rgba(0,0,0,0.18)]"
            style={{
              fontFamily: "'Belanosima', sans-serif",
            }}
          >
            BLOG
          </h1>

          {/* =========================
              KONTEN BLOG
          ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8">
            {/* =========================
                BLOG UTAMA
            ========================== */}
            <div className="relative md:pr-7">
              {/* GARIS PEMISAH */}
              <div className="hidden md:block absolute right-[-16px] top-[-80px] h-[calc(100%+80px)] border-r border-[#D8DDE5]" />
              {/* CARD UTAMA */}
              <div className="w-full max-w-[700px] bg-[#F7FBFF] rounded-[12px] overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.16)]">
                {/* IMAGE */}
                <div className="px-[30px] pt-[30px]">
                  <img
                    src={leavingRoom}
                    alt="Blog utama"
                    className="w-full aspect-[1.7/1] object-cover rounded-[14px] shadow-[0_2px_5px_rgba(0,0,0,0.30)]"
                  />
                </div>

                {/* GARIS PEMISAH */}
                <div className="mt-[22px] border-t border-[#D8D8D8]" />

                {/* CONTENT */}
                <div className="px-[30px] pt-[16px] pb-[25px]">
                  {/* KATEGORI */}
                  <p
                    className="text-[18px] text-[#3B413B] mb-2 border-l-[3px] border-[#555] pl-3"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Blog
                  </p>

                  {/* JUDUL */}
                  <h2
                    className="text-[17px] font-bold text-[#3B413B] mb-2"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </h2>

                  {/* META */}
                  <p className="text-[14px] text-[#777] flex items-center">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 shrink-0"
                    >
                      <path
                        d="M10.5 10.5V2.33333C10.5 1.68992 9.97675 1.16667 9.33333 1.16667H8.16667V0H7V1.16667H3.5V0H2.33333V1.16667H1.16667C0.52325 1.16667 0 1.68992 0 2.33333V10.5C0 11.1434 0.52325 11.6667 1.16667 11.6667H9.33333C9.97675 11.6667 10.5 11.1434 10.5 10.5ZM3.5 9.33333H2.33333V8.16667H3.5V9.33333ZM3.5 7H2.33333V5.83333H3.5V7ZM5.83333 9.33333H4.66667V8.16667H5.83333V9.33333ZM5.83333 7H4.66667V5.83333H5.83333V7ZM8.16667 9.33333H7V8.16667H8.16667V9.33333ZM8.16667 7H7V5.83333H8.16667V7ZM9.33333 4.08333H1.16667V2.91667H9.33333V4.08333Z"
                        fill="#798379"
                      />
                    </svg>
                    05 Mei 2025
                    <span className="mx-5">|</span>
                    10 : 00
                    <span className="flex items-center ml-5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 shrink-0"
                      >
                        <path
                          d="M5.6875 5.6875C6.29321 5.6875 6.88531 5.52072 7.38893 5.20824C7.89256 4.89577 8.28509 4.45163 8.51688 3.93201C8.74867 3.41238 8.80932 2.8406 8.69116 2.28896C8.57299 1.73733 8.28131 1.23062 7.85301 0.832916C7.42472 0.435211 6.87903 0.16437 6.28496 0.0546431C5.6909 -0.0550836 5.07513 0.00123215 4.51553 0.216469C3.95593 0.431706 3.47764 0.796196 3.14112 1.26385C2.80461 1.7315 2.625 2.28131 2.625 2.84375C2.625 3.59796 2.94766 4.32128 3.52199 4.85459C4.09632 5.38789 4.87527 5.6875 5.6875 5.6875ZM5.6875 6.5C3.7893 6.5 0 7.58875 0 9.75V11.375H11.375V9.75C11.375 7.58875 7.5857 6.5 5.6875 6.5Z"
                          fill="#798379"
                        />
                      </svg>
                      Admin Digi
                    </span>
                  </p>

                  {/* DESKRIPSI */}
                  <p
                    className="text-[14px] text-[#666] mt-4 leading-[1.55]"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    varius dolor et dolor accumsan vulputate. Etiam a gravida
                    enim. Praesent mollis, libero ac ultrices molestie, ante
                    eros tincidunt justo, at rutrum massa metus ac ex.
                  </p>
                </div>
              </div>

              {/* =========================
                PAGINATION
            ========================== */}
              <div className="flex justify-end items-center mt-6">
                <div
                  className="
                  flex
                  items-center
                  h-[34px]
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
                  {[1, 2, 3, 4].map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className="
      w-[30px]
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
w-[22px]
h-[24px]
text-[13px]
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
    w-[30px]
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

              {/* =========================
                  TOMBOL KEMBALI
              ========================== */}
              <button
                onClick={() => navigate("/karir")}
                className="
  mt-4
  w-[140px]
  h-[40px]
  bg-[#F5D8CD]
  text-[#803436]
  text-[17px]
  font-normal
  rounded-full
  border-[2px]
  border-[#803436]
  shadow-[0_6px_0px_#7B3030]
  flex
  items-center
  justify-center
  gap-[18px]
  cursor-pointer

  transition-all
  duration-150
  ease-out

  hover:translate-y-[3px]
  hover:shadow-[0_3px_0px_#7B3030]

  active:translate-y-[5px]
  active:shadow-[0_1px_0px_#7B3030]
"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path
                    d="M7.2456 12.7957C7.42996 12.6112 7.53348 12.361 7.5334 12.1001C7.53332 11.8393 7.42964 11.5892 7.24517 11.4048L2.37439 6.53695L7.2422 1.66616C7.42133 1.48058 7.5204 1.23207 7.51808 0.974147C7.51576 0.716225 7.41223 0.469533 7.22979 0.287203C7.04735 0.104874 6.8006 0.0014961 6.54267 -0.000666337C6.28475 -0.00282877 6.0363 0.0963982 5.85082 0.275643L0.287752 5.84212C0.103394 6.02664 -0.00012816 6.27684 -4.8431e-05 6.53768C3.12983e-05 6.79852 0.103706 7.04865 0.288177 7.23306L5.85465 12.7961C6.03918 12.9805 6.28937 13.084 6.55021 13.0839C6.81105 13.0839 7.06118 12.9802 7.2456 12.7957Z"
                    fill="#803436"
                  />
                </svg>

                <span
                  className="leading-[14px]"
                  style={{ fontFamily: "'Belanosima', sans-serif" }}
                >
                  Kembali
                </span>
              </button>
            </div>

            {/* =========================
                BLOG SAMPING
            ========================== */}
            <div className="flex flex-col gap-4 md:-mt-[75px]">
              {/* =========================
                  BLOG 1
              ========================== */}
              <div className="w-full max-w-[455px] mx-auto bg-white rounded-[10px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                {/* IMAGE */}
                <div className="px-[20px] pt-[20px]">
                  <img
                    src={karir}
                    alt="Blog"
                    className="w-full aspect-[2.05/1] object-cover rounded-[10px] shadow-[0_2px_5px_rgba(0,0,0,0.30)]"
                  />
                </div>

                {/* GARIS PEMISAH */}
                <div className="mt-[16px] border-t border-[#D8D8D8]" />

                {/* CONTENT */}
                <div className="px-[26px] pt-[10px] pb-[18px]">
                  {/* KATEGORI */}
                  <p className="text-[13px] text-[#444] border-l-[3px] border-[#555] pl-2 mb-1">
                    Blog
                  </p>

                  {/* JUDUL */}
                  <h3 className="text-[15px] font-bold text-[#333]">
                    Lorem ipsum dolor sit amet
                  </h3>

                  {/* META */}
                  <p className="text-[10px] text-[#777] flex items-center">
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 shrink-0"
                    >
                      <path
                        d="M10.5 10.5V2.33333C10.5 1.68992 9.97675 1.16667 9.33333 1.16667H8.16667V0H7V1.16667H3.5V0H2.33333V1.16667H1.16667C0.52325 1.16667 0 1.68992 0 2.33333V10.5C0 11.1434 0.52325 11.6667 1.16667 11.6667H9.33333C9.97675 11.6667 10.5 11.1434 10.5 10.5ZM3.5 9.33333H2.33333V8.16667H3.5V9.33333ZM3.5 7H2.33333V5.83333H3.5V7ZM5.83333 9.33333H4.66667V8.16667H5.83333V9.33333ZM5.83333 7H4.66667V5.83333H5.83333V7ZM8.16667 9.33333H7V8.16667H8.16667V9.33333ZM8.16667 7H7V5.83333H8.16667V7ZM9.33333 4.08333H1.16667V2.91667H9.33333V4.08333Z"
                        fill="#798379"
                      />
                    </svg>
                    05 Mei 2025
                    <span className="mx-4">|</span>
                    10 : 00
                    <span className="flex items-center ml-5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 shrink-0"
                      >
                        <path
                          d="M5.6875 5.6875C6.29321 5.6875 6.88531 5.52072 7.38893 5.20824C7.89256 4.89577 8.28509 4.45163 8.51688 3.93201C8.74867 3.41238 8.80932 2.8406 8.69116 2.28896C8.57299 1.73733 8.28131 1.23062 7.85301 0.832916C7.42472 0.435211 6.87903 0.16437 6.28496 0.0546431C5.6909 -0.0550836 5.07513 0.00123215 4.51553 0.216469C3.95593 0.431706 3.47764 0.796196 3.14112 1.26385C2.80461 1.7315 2.625 2.28131 2.625 2.84375C2.625 3.59796 2.94766 4.32128 3.52199 4.85459C4.09632 5.38789 4.87527 5.6875 5.6875 5.6875ZM5.6875 6.5C3.7893 6.5 0 7.58875 0 9.75V11.375H11.375V9.75C11.375 7.58875 7.5857 6.5 5.6875 6.5Z"
                          fill="#798379"
                        />
                      </svg>
                      Admin Digi
                    </span>
                  </p>

                  {/* DESKRIPSI */}
                  <p className="text-[10px] text-[#777] mt-2 leading-[1.5]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    varius dolor et dolor accumsan vulputate. Etiam ...
                  </p>
                </div>
              </div>

              {/* =========================
                  BLOG 2
              ========================== */}
              <div className="w-full max-w-[455px] mx-auto bg-white rounded-[10px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
                {/* IMAGE */}
                <div className="px-[20px] pt-[20px]">
                  <img
                    src={mekanik}
                    alt="Blog"
                    className="w-full aspect-[2.05/1] object-cover rounded-[10px] shadow-[0_2px_5px_rgba(0,0,0,0.30)]"
                  />
                </div>

                {/* GARIS PEMISAH */}
                <div className="mt-[16px] border-t border-[#D8D8D8]" />

                {/* CONTENT */}
                <div className="px-[26px] pt-[10px] pb-[18px]">
                  {/* KATEGORI */}
                  <p
                    className="text-[13px] leading-[16px] text-[#3B413B] border-l-[3px] border-[#555] pl-2 mb-[2px]"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Blog
                  </p>

                  {/* JUDUL */}
                  <h3
                    className="text-[15px] leading-[18px] font-bold text-[#3B413B]"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </h3>

                  {/* META */}
                  <p
                    className="text-[10px] leading-[12px] text-[#798379] flex items-center mt-[5px]"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 shrink-0"
                    >
                      <path
                        d="M10.5 10.5V2.33333C10.5 1.68992 9.97675 1.16667 9.33333 1.16667H8.16667V0H7V1.16667H3.5V0H2.33333V1.16667H1.16667C0.52325 1.16667 0 1.68992 0 2.33333V10.5C0 11.1434 0.52325 11.6667 1.16667 11.6667H9.33333C9.97675 11.6667 10.5 11.1434 10.5 10.5ZM3.5 9.33333H2.33333V8.16667H3.5V9.33333ZM3.5 7H2.33333V5.83333H3.5V7ZM5.83333 9.33333H4.66667V8.16667H5.83333V9.33333ZM5.83333 7H4.66667V5.83333H5.83333V7ZM8.16667 9.33333H7V8.16667H8.16667V9.33333ZM8.16667 7H7V5.83333H8.16667V7ZM9.33333 4.08333H1.16667V2.91667H9.33333V4.08333Z"
                        fill="#798379"
                      />
                    </svg>
                    05 Mei 2025
                    <span className="mx-4 text-[#798379]">|</span>
                    10 : 00
                    <span className="flex items-center ml-5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 shrink-0"
                      >
                        <path
                          d="M5.6875 5.6875C6.29321 5.6875 6.88531 5.52072 7.38893 5.20824C7.89256 4.89577 8.28509 4.45163 8.51688 3.93201C8.74867 3.41238 8.80932 2.8406 8.69116 2.28896C8.57299 1.73733 8.28131 1.23062 7.85301 0.832916C7.42472 0.435211 6.87903 0.16437 6.28496 0.0546431C5.6909 -0.0550836 5.07513 0.00123215 4.51553 0.216469C3.95593 0.431706 3.47764 0.796196 3.14112 1.26385C2.80461 1.7315 2.625 2.28131 2.625 2.84375C2.625 3.59796 2.94766 4.32128 3.52199 4.85459C4.09632 5.38789 4.87527 5.6875 5.6875 5.6875ZM5.6875 6.5C3.7893 6.5 0 7.58875 0 9.75V11.375H11.375V9.75C11.375 7.58875 7.5857 6.5 5.6875 6.5Z"
                          fill="#798379"
                        />
                      </svg>
                      Admin Digi
                    </span>
                  </p>

                  {/* DESKRIPSI */}
                  <p
                    className="text-[10px] leading-[1.5] text-[#777] mt-[7px]"
                    style={{
                      fontFamily: "'Nunito Sans', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    varius dolor et dolor accumsan vulputate. Etiam ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}

export default Blog;
