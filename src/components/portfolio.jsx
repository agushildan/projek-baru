import { useEffect, useState } from "react";
import i18n from "../i18n";

function Portfolio() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const portfolioList = [
    {
      title: "Website Sistem Informasi Manajemen",
      description:
        "Please add your content here. Keep it short and simple. And smile :)",
      tags: ["Software IT", "Website", "SIM", "Dashboard"],
    },
    {
      title: "Jasa Machining Torque Tube Seal",
      description:
        "Industri Komponen dan Suku Cadang Mesin dan Turbin (KBLI 28113)",
      tags: ["Mekanikal Engineering", "Machining", "PT. JAPA INDOTAMA"],
    },
    {
      title: "Starret Back Plunger",
      description:
        "Please add your content here. Keep it short and simple. And smile :)",
      tags: ["Pengadaan Sparepart", "PT. TAKA"],
    },
  ];

  return (
    /* pt-24 md:pt-32 digunakan untuk menurunkan Judul & seluruh isinya ke bawah */
    <section className="w-full bg-[#e9eefc] px-4 pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* JUDUL DAN DESKRIPSI (Tutup Turun Ke Bawah) */}
        <div className="text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            PORTOFOLIO
          </h2>

          <p className="font-nunito mt-4 max-w-5xl mx-auto text-[13px] md:text-[14px] font-normal leading-[1.6] text-gray-600">
            {t(
              "deskripsi_portofolio",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>

          {/* TOMBOL LIHAT SELENGKAPNYA */}
          <button
            type="button"
            className="mt-6 bg-[#c8e3f7] hover:bg-[#b5d9f2] text-gray-600 text-xs md:text-sm px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center gap-3 cursor-pointer"
          >
            Lihat Selengkapnya
            <span className="text-base md:text-lg">→</span>
          </button>
        </div>

        {/* CARD PORTOFOLIO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-[900px] mx-auto">
          {portfolioList.map((portfolio, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              {/* GAMBAR SEMENTARA (Mepet sisi atas, kiri, kanan) */}
              <div className="w-full h-[150px] md:h-[160px] bg-[#dddddd]"></div>

              {/* KONTEN TEKS */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-nunito text-sm font-semibold text-[#111111]">
                  {portfolio.title}
                </h3>

                {/* DESKRIPSI */}
                <p className="font-nunito mt-3 text-[9px] md:text-[10px] leading-relaxed text-gray-500 min-h-[32px]">
                  {portfolio.description}
                </p>

                {/* GARIS */}
                <div className="border-t border-gray-300 mt-3"></div>

                {/* TAGS */}
                <div className="mt-3">
                  <p className="font-nunito text-[9px] text-gray-600 mb-2">
                    Tags
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {portfolio.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-nunito text-[7px] md:text-[8px] text-gray-600 border border-gray-400 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TOMBOL CARD */}
                <button
                  type="button"
                  className="font-nunito mt-4 self-start bg-[#333333] hover:bg-[#222222] text-white text-[8px] px-3 py-1.5 rounded-md transition-colors duration-200 cursor-pointer"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;