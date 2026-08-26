import { useState, useEffect } from "react";
import i18n from "../i18n";

function VisiMisi() {
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
    <section className="w-full min-h-screen bg-[#F2F5FF] py-16 px-4 flex flex-col items-center justify-center space-y-16">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 pt-12 md:p-12 md:pt-14 text-center border border-[#4F8DC0]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4F8DC0] text-[#FFFFFF] font-serif tracking-widest text-lg md:text-xl font-medium px-16 py-2.5 rounded-lg shadow-md">
          {t("judulvisi")}
        </div>

<p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
  {t("isivisi")}
</p>
      </div>

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 pt-12 md:p-12 md:pt-14 border border-[#4F8DC0]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4F8DC0] text-[#FFFFFF] font-serif tracking-widest text-lg md:text-xl font-medium px-16 py-2.5 rounded-lg shadow-md">
          {t("judulmisi")}
        </div>

        <ul className="space-y-3 text-[#666666] text-sm md:text-base max-w-2xl mx-auto pl-2 md:pl-6">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>
            <span>{t("isimisi1")}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>
            <span>{t("isimisi2")}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>
            <span>{t("isimisi3")}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>
            <span>{t("isimisi4")}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>
            <span>{t("isimisi5")}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default VisiMisi;