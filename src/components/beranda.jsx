import { useState, useEffect } from "react";
import TentangKami from "./tentang";
import VisiMisi from "./visimisi";
import i18n from "../i18n";
import Produk from "./produk";
import Portfolio from "./portfolio";
import Layanan from "./layanan";
import Kegiatan from "./kegiatan";
import Mitra from "./mitra";
import Kontak from "./kontak";

function Beranda() {
  const whatsappNumber = "621234567890";
  const message =
    "Halo, saya ingin bertanya mengenai layanan PT. Digi Tekno Indonesia.";

  const handleWhatsapp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

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
    <div>
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-[#F2F5FF] px-4 py-12 text-center overflow-hidden">
        
        <div className="absolute -bottom-30 left-40 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-sky-200/60 rounded-full blur-[700px] pointer-events-none z-0"></div>

        <div className="absolute -bottom-30 right-40 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-rose-200/50 rounded-full blur-[400px] pointer-events-none z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col items-center w-full relative z-10">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-snug tracking-wide mb-6">
            <span className="text-[#4b8cc0] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.15)] block">
              {t("biru1")}
            </span>
            <span className="text-[#7a2828] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.15)] block">
              {t("merah")}
            </span>
            <span className="text-[#4b8cc0] drop-shadow-[2px_2px_3px_rgba(0,0,0,0.15)] block">
              {t("biru2")}
            </span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
            {t("isi_beranda")}
          </p>

          <button
            onClick={handleWhatsapp}
            className="bg-[#4cd964] hover:bg-[#42c65a] border border-[#3dbb53] text-white px-7 py-3 text-lg font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 mb-16 cursor-pointer"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.22 14.96 3.78 13.45 3.78 11.91C3.78 7.36 7.49 3.65 12.04 3.65C14.25 3.65 16.31 4.51 17.87 6.07C19.43 7.63 20.29 9.7 20.29 11.91C20.29 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.09 13.66 14.86 13.58C14.63 13.49 14.47 13.45 14.3 13.7C14.14 13.95 13.66 14.51 13.51 14.68C13.37 14.85 13.22 14.87 12.97 14.75C12.72 14.62 11.92 14.36 10.97 13.51C10.23 12.85 9.73 12.04 9.58 11.79C9.43 11.54 9.56 11.4 9.69 11.28C9.8 11.17 9.94 10.99 10.06 10.84C10.18 10.69 10.22 10.59 10.3 10.42C10.38 10.26 10.34 10.11 10.28 9.99C10.22 9.87 9.73 8.66 9.52 8.17C9.32 7.69 9.12 7.75 8.97 7.74C8.83 7.73 8.66 7.73 8.5 7.73C8.33 7.73 8.06 7.79 7.83 8.04C7.6 8.29 6.96 8.89 6.96 10.1C6.96 11.32 7.85 12.49 7.97 12.66C8.1 12.83 9.72 15.33 12.21 16.4C12.8 16.66 13.25 16.81 13.61 16.92C14.2 17.11 14.74 17.08 15.17 17.02C15.65 16.95 16.65 16.41 16.86 15.82C17.07 15.23 17.07 14.73 17.01 14.63C16.95 14.52 16.82 14.51 16.57 14.39Z" />
            </svg>
            {t("wakami")}
          </button>

          <div className="w-full overflow-x-auto pb-2">
            <div className="flex flex-nowrap justify-center items-center gap-3 text-[#131838] font-black text-xs sm:text-sm md:text-base whitespace-nowrap min-w-max mx-auto">
              <span>{t("solusiit")}</span>
              <span className="font-bold">•</span>
              <span>{t("mekanik")}</span>
              <span className="font-bold">•</span>
              <span>{t("perawatan")}</span>
              <span className="font-bold">•</span>
              <span>{t("spareart")}</span>
            </div>
          </div>
        </div>
      </section>

      <TentangKami />
      <VisiMisi />
      <Produk />
      <Portfolio />
      <Layanan />
      <Kegiatan />
      <Mitra />
      <Kontak />
    </div>
  );
}

export default Beranda;