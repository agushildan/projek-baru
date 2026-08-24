import { useState, useEffect } from "react";
import i18n from "../i18n";

const Footer = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const t = (key) => i18n.t(key);

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
    <footer className="bg-[#1e324c] text-white px-5 py-[30px] md:px-[50px] [font-family:'Nunito',sans-serif]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between flex-wrap gap-[30px] md:gap-10">

        <div className="flex-1 md:min-w-[250px] flex flex-col items-start text-left">
          <h2 className="text-[1.4rem] font-extrabold mt-0 mb-2.5 text-left">
            PT. Digi Tekno Indonesia
          </h2>

          <img
            src="/digilogo2.png"
            alt="digi logo"
            className="w-[150px] mb-2.5 block ml-0"
          />

          <div className="flex gap-[15px] mb-[25px] ml-0">
            <a
              href="https://wa.me/6285924101807?text=Halo,%20saya%20ingin%20betanya?"
              className="bg-[#4F8DC0] w-10 h-10 rounded-lg flex items-center justify-center no-underline transition-opacity duration-300 hover:opacity-80"
            >
             <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
>
  <path
    d="M12 2.5C6.75 2.5 2.5 6.65 2.5 11.78C2.5 13.6 3.04 15.28 4 16.7L2.5 21.5L7.44 20.05C8.82 20.77 10.38 21.17 12 21.17C17.25 21.17 21.5 17.02 21.5 11.78C21.5 6.65 17.25 2.5 12 2.5Z"
    fill="white"
  />

  <path
    d="M8.35 7.85C8.55 7.4 8.77 7.39 9.13 7.38H9.61C9.78 7.38 9.97 7.45 10.08 7.73L10.8 9.45C10.9 9.7 10.88 9.89 10.72 10.09L10.25 10.66C10.12 10.82 10.07 10.93 10.19 11.14C10.51 11.71 10.98 12.27 11.54 12.74C12.1 13.22 12.74 13.61 13.38 13.88C13.61 13.98 13.74 13.96 13.88 13.8L14.44 13.14C14.6 12.95 14.74 12.94 14.98 13.04L16.68 13.84C16.93 13.96 17.06 14.04 17.07 14.24C17.08 14.58 16.97 15.27 16.7 15.54C16.42 15.82 15.98 15.97 15.52 15.97C15.12 15.97 14.62 15.87 14.05 15.63C13 15.19 11.87 14.5 10.85 13.61C9.83 12.71 9.03 11.71 8.47 10.73C7.97 9.86 7.71 9.03 7.71 8.38C7.71 7.9 7.83 7.48 8.35 7.85Z"
    fill="#4F8DC0"
  />
</svg>
            </a>
          
            <a
   href="https://www.instagram.com/digiteknoindo/"
   className="bg-[#4F8DC0] w-10 h-10 rounded-lg flex items-center justify-center no-underline transition-opacity duration-300 hover:opacity-80"
            >

<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
>
  <rect
    x="2"
    y="2"
    width="20"
    height="20"
    rx="5"
    fill="white"
  />

  <circle
    cx="12"
    cy="12"
    r="4"
    fill="none"
    stroke="#4F8DC0"
    strokeWidth="2"
  />

  <circle
    cx="17.5"
    cy="6.5"
    r="1.3"
    fill="#4F8DC0"
  />
</svg>
            </a>
            <a
              href="mailto:digiteknoindo@gmail.com"
              className="bg-[#4F8DC0] w-10 h-10 rounded-lg flex items-center justify-center no-underline transition-opacity duration-300 hover:opacity-80"
            >
<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="2"
    y="2"
    width="20"
    height="20"
    rx="5"
    fill="#4F8DC0"
  />

  <path
    d="M3.2 19V5H7.4L12 10.5L16.6 5H20.8V19H16.8V10L13.2 14.3C12.55 15.1 11.45 15.1 10.8 14.3L7.2 10V19H3.2Z"
    fill="white"
    transform="translate(12 12) scale(1.15) translate(-12 -12)"
  />
</svg>


   </a>
          </div>

          <p className="text-sm text-[#e0e0e0] m-0 text-left">
            Copyright © 2026 Digi Tekno Indonesia
          </p>
        </div>

        <div className="flex-1 md:min-w-[250px] flex flex-col items-start">
          <h3 className="text-center w-full mt-0 mb-[25px] text-[1.2rem] font-bold">
            {t("layanan_digi")}
          </h3>
          <ul className="list-disc pl-[18px] md:pl-5 m-0 text-center md:text-left w-full">
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              Software Development
            </li>
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              Services And Maintanance
            </li>
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              IT Equipment/Hardware &amp; Networking
            </li>
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              IT Consultant &amp; Problem Solving
            </li>
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              Procurement of Engine and Turbine Components and Spare Parts
            </li>
            <li className="mb-3 text-[0.95rem] leading-[1.5] text-left">
              Installation Electrical and Automation Equipment
            </li>
          </ul>
        </div>

        <div className="flex-1 md:min-w-[250px] flex flex-col items-start">
          <h3 className="text-center w-full mt-0 mb-[25px] text-[1.2rem] font-bold">
            {t("kontak_kami")}
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-5 w-full">
            <li className="flex items-start gap-[15px]">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white shrink-0 mt-0.5"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <p className="m-0 text-[0.95rem] leading-[1.6] text-left">
                Summarecon Magna Commercial Blok MD-18, Summarecon Gedebage
                Bandung - Jawa Barat 40293
              </p>
            </li>
            <li className="flex items-start gap-[15px]">

<svg
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1.5 21V3H7L12 9.2L17 3H22.5V21H17.3V9L13.4 14C12.65 14.95 11.35 14.95 10.6 14L6.7 9V21H1.5Z"
    fill="white"
  />
</svg>

              <p className="m-0 text-[0.95rem] leading-[1.6] text-left">
                digiteknoindo@gmail.com
              </p>
            </li>
            <li className="flex items-start gap-[15px]">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white shrink-0 mt-0.5"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <p className="m-0 text-[0.95rem] leading-[1.6] text-left">
                0859-2410-1807
              </p>
            </li>
            <li className="flex items-start gap-[15px]">

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="1"
    y="1"
    width="22"
    height="22"
    rx="5.5"
    fill="white"
  />

  <circle
    cx="12"
    cy="12"
    r="4.6"
    stroke="#1C3759"
    strokeWidth="2.2"
  />

  <circle
    cx="17.5"
    cy="6.5"
    r="1.35"
    fill="#1C3759"
  />
</svg>

              <p className="m-0 text-[0.95rem] leading-[1.6] text-left">
                digiteknoindo
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;