import { useEffect, useState } from "react";
import Footer from "./Footer";
import i18n from "../i18n";

import landscape from "../assets/produk/landscape.png";

function SoftwareDetail() {
  const [, setCurrentLang] = useState(i18n.language || "id");
  const [currentPage, setCurrentPage] = useState(1);

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

  const produkSoftware = [
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
    {
      title: "SIM DIGI",
      description: "( Sistem Informasi Manajemen DIGI )",
    },
  ];

  return (
    <div>
      <section className="w-full min-h-screen bg-[#e9eefc]">
        {/* HEADER */}
        <div
  className="
    w-full
    px-6
    pt-8
    pb-8
    md:pt-10
    md:pb-10
  "
  style={{
    background:
      "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(212, 201, 235, 0.5) 100%)",
  }}
>
          <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
              SOFTWARE IT
            </h1>

            <p className="mt-3 mx-auto max-w-[900px] font-['Nunito'] text-[#666666] text-[10px] sm:text-xs md:text-sm leading-relaxed">
              {t(
                "deskripsi_produk_jasa",
                "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis."
              )}
            </p>
          </div>
        </div>

        {/* LIST SOFTWARE */}
        <div className="w-full px-5 pt-10 pb-16 md:px-6 md:pt-12 md:pb-20">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {produkSoftware.map((produk, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-[14px] border border-[#777777] p-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.12)]"
              >
                <div className="bg-white rounded-[10px] overflow-hidden">
                  <div className="w-full aspect-[16/9] bg-white overflow-hidden rounded-[10px]">
                    <img
                      src={landscape}
                      alt={produk.title}
                      className="w-full h-full object-contain rounded-[10px]"
                    />
                  </div>

                  <div className="mx-2 border-t border-[#dddddd]" />

                  <div className="px-4 py-6 text-center">
                    <h2 className="font-['Nunito'] text-[#3f4543] text-xl font-bold">
                      SIM DIGI
                    </h2>

                    <p className="mt-2 font-['Nunito'] text-[#555555] text-sm">
                      ( Sistem Informasi Manajemen DIGI )
                    </p>

                    <p className="mt-8 font-['Nunito'] text-[#555555] text-sm leading-relaxed text-left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                      ornare nisl. Nam congue sed nulla in blandit.
                    </p>

                    <button
                      type="button"
                      className="mt-10 w-full h-[48px] bg-[#b94d4d] hover:bg-[#a94444] text-white font-['Nunito'] text-sm font-bold rounded-[7px] border border-[#733737] shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-200 cursor-pointer"
                    >
                      Lihat Detail Produk
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="max-w-[1100px] mx-auto flex justify-end mt-7">
            <div className="flex items-center bg-white p-[3px] rounded-[10px] overflow-hidden border border-[#dddddd] shadow-[0_2px_5px_rgba(0,0,0,0.15)]">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-[38px] h-[38px] flex items-center justify-center text-[#7d8580] text-xl font-light border-r border-[#eeeeee] hover:bg-[#f5f5f5] transition disabled:opacity-50 cursor-pointer"
              >
                ‹
              </button>

              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`w-[38px] h-[38px] flex items-center justify-center text-sm font-semibold transition cursor-pointer ${
                    currentPage === page
                      ? "bg-[#c8e3f7] text-[#6f7f7a] rounded-[3px] shadow-sm"
                      : "bg-white text-[#7d8580] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, 4))
                }
                disabled={currentPage === 4}
                className="w-[38px] h-[38px] flex items-center justify-center text-[#7d8580] text-xl font-light hover:bg-[#f5f5f5] transition disabled:opacity-50 cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SoftwareDetail;