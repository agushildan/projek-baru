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
      <div className="absolute top-10 -left-6 md:-left-2 grid grid-cols-5 gap-x-2 gap-y-1.5 opacity-80 pointer-events-none z-0">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#4b8cc0] rounded-full"></div>
        ))}
      </div>

      <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-16 left-1/4 w-2.5 h-2.5 bg-red-500 rounded-full opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-8 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-70 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-Cormorant Garamond  text-[#333333] tracking-wider">
            {t("judul_tentang")}
          </h2>

<div className="space-y-5 text-[#666666] font-Nunito text-sm md:text-base leading-relaxed text-justify md:text-left">   
           <p>{t("paragraft1")}</p>
           <p>{t("paragraft2")}</p>
           <p>{t("paragraft3")}</p>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="absolute -inset-2 md:-inset-3 border-2 border-sky-400 rounded-t-[180px] rounded-b-xl translate-x-3 translate-y-3 pointer-events-none"></div>
          <div className="relative w-full aspect-[4/5] rounded-t-[180px] rounded-b-xl overflow-hidden shadow-xl bg-gray-200 border border-white">
              <img
                src="/digi.jpg"
                alt="Gedung PT Digi Tekno Indonesia"
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