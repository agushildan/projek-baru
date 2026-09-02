import { useState, useEffect } from "react";
import i18n from "../i18n";

function TentangKami() {
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
    <section
      id="tentang"
      className="relative w-full py-16 px-6 md:px-16 lg:px-24 bg-[#F2F5FF] overflow-hidden"
    >
      <div className="absolute top-28 left-0 grid grid-cols-4 gap-2 opacity-70 pointer-events-none z-0">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#4b8cc0] rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-80 pointer-events-none"></div>
      <div className="absolute top-12 right-[45%] w-2 h-2 bg-rose-500 rounded-full opacity-80 pointer-events-none"></div>
      <div className="absolute top-28 right-12 w-2 h-2 bg-sky-500 rounded-full opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-16 left-[18%] w-2.5 h-2.5 bg-rose-500 rounded-full opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-6 left-[45%] w-1.5 h-1.5 bg-sky-400 rounded-full opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] font-normal text-[#222222] tracking-wider uppercase">
            {t("judul_tentang", "TENTANG KAMI")}
          </h2>

          <div className="space-y-5 text-[#666666] font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
            <p>{t("paragraft1")}</p>
            <p>{t("paragraft2")}</p>
            <p>{t("paragraft3")}</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative p-3 md:p-4 border-2 border-[#4b8cc0] rounded-t-[200px] rounded-b-xl w-full max-w-sm md:max-w-md bg-transparent">
            
            <div className="relative w-full aspect-[4/5] rounded-t-[190px] rounded-b-lg overflow-hidden bg-gray-200 shadow-sm">
              <img
                src="/digi.jpg"
                alt="PT Digi Tekno Indonesia"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default TentangKami;