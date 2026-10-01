import { useEffect, useState } from "react";
import i18n from "../i18n";

function VisiMisi() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState([]);

  const [loading, setLoading] = useState(true);

  const t = (key) => i18n.t(key);

  // ==========================================
  // LANGUAGE
  // ==========================================

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // ==========================================
  // GET DATA VISI & MISI
  // ==========================================

  useEffect(() => {
    const fetchVisiMisi = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visi-misi");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil data Visi & Misi");
        }

        setVisi(data.data?.visi || "");

        setMisi(data.data?.misi || []);
      } catch (error) {
        console.error("❌ Error mengambil Visi & Misi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisiMisi();
  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section className="w-full min-h-screen bg-[#F2F5FF] pt-[110px] pb-16 px-4 flex items-center justify-center">
        <p className="text-[#666666]">Memuat Visi & Misi...</p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-[#F2F5FF] pt-[110px] pb-16 px-4 flex flex-col items-center space-y-16">
      {/* =========================
          VISI
      ========================= */}

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 pt-12 md:p-12 md:pt-14 text-center border border-[#4F8DC0]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4F8DC0] text-[#FFFFFF] font-['Cormorant_Garamond'] font-bold text-[25px] leading-[100%] tracking-widest uppercase px-16 py-2.5 rounded-lg shadow-md">
          {t("judulvisi")}
        </div>

        <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-left">
          {visi}
        </p>
      </div>

      {/* =========================
          MISI
      ========================= */}

      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-8 pt-12 md:p-12 md:pt-14 border border-[#4F8DC0]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#4F8DC0] text-[#FFFFFF] font-['Cormorant_Garamond'] font-bold text-[25px] leading-[100%] tracking-widest uppercase px-16 py-2.5 rounded-lg shadow-md">
          {t("judulmisi")}
        </div>

        <ul className="space-y-3 text-[#666666] text-sm md:text-base max-w-2xl mx-auto pl-2 md:pl-6">
          {misi.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span className="w-2 h-2 bg-[#4b8cc0] rounded-full mt-2 shrink-0"></span>

              <span>{item.isi}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default VisiMisi;
