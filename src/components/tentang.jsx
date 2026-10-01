import { useState, useEffect } from "react";
import i18n from "../i18n";

function TentangKami() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const [tentangData, setTentangData] = useState(null);
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
  // AMBIL DATA TENTANG KAMI
  // ==========================================

  useEffect(() => {
    const fetchTentangKami = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/api/tentang-digi");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil data Tentang Kami");
        }

        setTentangData(data.data);
      } catch (error) {
        console.error("❌ Error mengambil data Tentang Kami:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTentangKami();
  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section
        id="tentang"
        className="relative w-full py-16 px-6 md:px-16 lg:px-24 bg-[#F2F5FF] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
          <p className="text-[#666666]">Memuat data Tentang Kami...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="tentang"
      className="relative w-full py-16 px-6 md:px-16 lg:px-24 bg-[#F2F5FF] overflow-hidden"
    >
      {/* POLA TITIK DEKORATIF */}

      <div
        className="
          absolute
          top-[80px]
          left-0
          grid
          grid-cols-4
          gap-[10px]
          opacity-70
          pointer-events-none
          z-0
        "
      >
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="w-[6px] h-[6px] bg-[#4b8cc0] rounded-full"
          ></div>
        ))}
      </div>

      <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-80 pointer-events-none"></div>

      <div className="absolute top-12 right-[45%] w-2 h-2 bg-rose-500 rounded-full opacity-80 pointer-events-none"></div>

      <div className="absolute top-28 right-12 w-2 h-2 bg-sky-500 rounded-full opacity-80 pointer-events-none"></div>

      <div className="absolute bottom-16 left-[18%] w-2.5 h-2.5 bg-rose-500 rounded-full opacity-80 pointer-events-none"></div>

      <div className="absolute bottom-6 left-[45%] w-1.5 h-1.5 bg-sky-400 rounded-full opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* KOLOM TEKS */}

        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] font-bold text-[#222222] tracking-wider uppercase">
            {t("judul_tentang", "TENTANG KAMI")}
          </h2>

          <div className="space-y-5 text-[#666666] font-sans text-sm md:text-base leading-relaxed text-justify md:text-left">
            {tentangData?.deskripsi ? (
              tentangData.deskripsi
                .split(/\n\s*\n/)
                .map((paragraf, index) => <p key={index}>{paragraf}</p>)
            ) : (
              <p>Data Tentang Kami belum tersedia.</p>
            )}
          </div>
        </div>

        {/* KOLOM GAMBAR */}

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative p-3 md:p-4 border-2 border-[#4b8cc0] rounded-t-[200px] rounded-b-xl w-full max-w-sm md:max-w-md bg-white shadow-md">
            <div className="relative w-full aspect-[4/5] rounded-t-[190px] rounded-b-lg overflow-hidden bg-white flex items-center justify-center">
              {tentangData?.gambar ? (
                <img
                  src={`http://localhost:5000${tentangData.gambar}`}
                  alt="PT Digi Tekno Indonesia"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 30%",
                  }}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-[#999999]">
                  Gambar belum tersedia
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TentangKami;
