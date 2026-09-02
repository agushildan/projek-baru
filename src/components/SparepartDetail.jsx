import { useEffect, useState } from "react";
import i18n from "../i18n";
import Footer from "./Footer";
import mekanikImg from "../assets/sparepart/komponen_mekanik.png";
import industriImg from "../assets/sparepart/komponen_industri.png";
import materialImg from "../assets/sparepart/material_industri.png";
import toolsImg from "../assets/sparepart/tools_consumables.png";

function SparepartDetail() {
  const [, setCurrentLang] = useState(i18n.language || "id");

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

  const kategoriMaterial = [
    {
      title: "Komponen Mekanik",
      image: mekanikImg,
      items: ["Bearing", "Seal", "Shaft", "Gear", "Coupling"],
    },
    {
      title: "Komponen Industri",
      image: industriImg,
      items: [
        "Valve",
        "Pump Components",
        "Fasteners",
        "Electrical Components",
        "Hydraulic Components",
      ],
    },
    {
      title: "Material Industri",
      image: materialImg,
      items: ["Steel", "Stainless Steel", "Engineering Material", "Fabricated Material"],
    },
    {
      title: "Tools & Consumables",
      image: toolsImg,
      items: ["Cutting Tools", "Welding Material", "Lubricants", "Maintenance Tools"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* =========================
          HEADER TITLE (Soft Purple Gradient)
      ========================== */}
      <section
        className="w-full px-6 pt-10 pb-10 md:pt-12 md:pb-12"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #FAF7FD 0%, #E6DEF7 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <h1 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide uppercase">
            PENGADAAN SPAREPART
          </h1>

          <p className="mt-3 mx-auto max-w-[900px] font-['Nunito'] text-[#666666] text-[10px] sm:text-xs md:text-sm leading-relaxed">
            {t(
              "deskripsi_produk_jasa",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>
      </section>

      {/* =========================
          KATEGORI MATERIAL
      ========================== */}
      <section className="w-full bg-white pt-10 pb-16 md:pt-14 md:pb-20">
        <div className="max-w-[1100px] mx-auto px-4">
          
          {/* JUDUL KATEGORI */}
          <div className="flex flex-col items-center">
            <h2 className="font-['Nunito_Sans'] text-[#333333] text-2xl md:text-[28px] font-bold text-center">
              Kategori Material
            </h2>

            <div className="w-[50px] h-[3px] bg-[#4B8CC0] mt-3 rounded-full" />
          </div>

          {/* GRID CARD KATEGORI */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kategoriMaterial.map((kategori, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col transition-transform duration-200 hover:-translate-y-1"
              >
                {/* WADAH GAMBAR */}
                <div className="w-full h-[160px] md:h-[170px] bg-gray-200 overflow-hidden">
                  <img
                    src={kategori.image}
                    alt={kategori.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* KONTEN TEKS & LIST ITEM */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-['Nunito'] text-[#222222] text-base md:text-[17px] font-bold">
                    {kategori.title}
                  </h3>

                  <ul className="mt-4 space-y-2 flex-1">
                    {kategori.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="font-['Nunito'] text-[#666666] text-xs md:text-[13px] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          ALUR PENGADAAN (IKON REVISI PRESISI)
      ========================== */}
      <section
        className="w-full pt-10 pb-16 md:pt-14 md:pb-20"
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #F5F0FB 25%, #EBE4F7 60%, #E3DAF3 100%)",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          {/* JUDUL */}
          <div className="flex flex-col items-center">
            <h2 className="font-['Nunito_Sans'] text-[#333333] text-2xl md:text-[28px] font-bold text-center">
              Alur Pengadaan
            </h2>
            <div className="w-[50px] h-[3px] bg-[#4B8CC0] mt-3 rounded-full" />
          </div>

          {/* TIMELINE CONTAINER */}
          <div className="relative mt-16 max-w-[950px] mx-auto px-2">
            
            {/* GARIS PENGHUBUNG PRESISI */}
            <div className="absolute left-[10%] right-[10%] top-[45px] h-[2px] bg-[#CBBCE6] z-0 hidden sm:block" />

            {/* ITEMS GRID */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-2 justify-items-center">
              
              {/* ITEM 1 - PERMINTAAN */}
              <div className="flex flex-col items-center text-center w-full max-w-[160px]">
                <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#EDE7F6] flex items-center justify-center shrink-0">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="#A83E3E"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM13 3.5L18.5 9H13V3.5ZM7.5 17.5C7.2 17.5 7 17.3 7 17C7 16.7 7.2 16.5 7.5 16.5H12.5C12.8 16.5 13 16.7 13 17C13 17.3 12.8 17.5 12.5 17.5H7.5ZM16.8 11.2L18.3 12.7C18.6 13 18.6 13.5 18.3 13.8L13.8 18.3H12V16.5L16.5 12C16.6 11.9 16.7 11.9 16.8 11.2Z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-['Nunito'] text-[#222222] text-sm md:text-[15px] font-bold">
                  Permintaan
                </h3>
                <p className="mt-2 font-['Nunito'] text-[#666666] text-[11px] leading-[16px]">
                  Kirimkan kebutuhan sparepart / material anda.
                </p>
              </div>

              {/* ITEM 2 - SOURCING */}
              <div className="flex flex-col items-center text-center w-full max-w-[160px]">
                <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#EDE7F6] flex items-center justify-center shrink-0">
<svg
  width="46"
  height="46"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M 50 12 L 80 27 L 50 42 L 20 27 Z"
    fill="#AC4A4A"
  />

  <path
    d="M 20 31 L 47 45 V 78 L 20 64 Z"
    fill="#AC4A4A"
  />

  <path
    d="M 53 45 L 80 31 V 64 L 53 78 Z"
    fill="#AC4A4A"
  />

  <path
    d="M 44 24 L 56 30 L 56 34 L 44 28 Z"
    fill="#FFFFFF"
    opacity="0.3"
  />

  <circle
    cx="34"
    cy="62"
    r="15"
    fill="#FFFFFF"
    stroke="#AC4A4A"
    strokeWidth="6.5"
  />
  
  <path
    d="M 45 73 L 59 87"
    stroke="#AC4A4A"
    strokeWidth="8"
    strokeLinecap="round"
  />
</svg>
                </div>
                <h3 className="mt-4 font-['Nunito'] text-[#222222] text-sm md:text-[15px] font-bold">
                  Sourcing
                </h3>
                <p className="mt-2 font-['Nunito'] text-[#666666] text-[11px] leading-[16px]">
                  Kami melakukan pencarian dan seleksi pemasok.
                </p>
              </div>

              {/* ITEM 3 - PENAWARAN */}
              <div className="flex flex-col items-center text-center w-full max-w-[160px]">
                <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#EDE7F6] flex items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <circle cx="50" cy="50" r="48" fill="#FFFFFF" />

  <g fill="#AC4A4A" transform="translate(19.5, 20.5) scale(0.61)">
    <circle cx="58" cy="39" r="14" />

    <rect x="16" y="50" width="11" height="29" rx="1" />

    <path d="
      M 33 50 
      H 42 
      L 58 56 
      C 61 57, 61 63, 57 63 
      H 47 
      L 44 61 
      L 51 66 
      H 70 
      C 73 66, 75 69, 75 71 
      C 75 72, 74 73, 72 74 
      L 52 79 
      L 33 74 
      Z
    " stroke-linejoin="round" />
  </g>
</svg>

                </div>
                <h3 className="mt-4 font-['Nunito'] text-[#222222] text-sm md:text-[15px] font-bold">
                  Penawaran
                </h3>
                <p className="mt-2 font-['Nunito'] text-[#666666] text-[11px] leading-[16px]">
                  Penawaran harga dan spesifikasi produk.
                </p>
              </div>

              {/* ITEM 4 - PENGADAAN */}
              <div className="flex flex-col items-center text-center w-full max-w-[160px]">
                <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#EDE7F6] flex items-center justify-center shrink-0">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <circle cx="100" cy="100" r="96" fill="#FFFFFF"/>

  <g transform="translate(10, 10) scale(0.9)" fill="#B84A4A">
    <path d="M 50 64 
             C 50 61, 52 59, 55 59 
             L 63 59 
             C 65 59, 67 60, 68 62 
             L 74 76 
             L 59 76 
             C 54 76, 50 71, 50 66 
             Z" />

    <path d="M 68 73 
             L 144 74 
             C 147 74, 150 77, 149 81 
             L 139 123 
             C 138 127, 134 130, 130 130 
             L 76 130 
             C 72 130, 68 127, 67 122 
             L 63 78 
             C 62 75, 65 73, 68 73 
             Z" />

    <path d="M 88 102 
             L 99 114 
             L 122 91" 
          fill="none" 
          stroke="#FFFFFF" 
          stroke-width="8" 
          stroke-linecap="round" 
          stroke-linejoin="round" />

    <circle cx="82" cy="143" r="12.5" fill="#B84A4A" />
    <circle cx="82" cy="143" r="6" fill="#FFFFFF" />

    <circle cx="124" cy="143" r="12.5" fill="#B84A4A" />
    <circle cx="124" cy="143" r="6" fill="#FFFFFF" />
  </g>
</svg>

                </div>
                <h3 className="mt-4 font-['Nunito'] text-[#222222] text-sm md:text-[15px] font-bold">
                  Pengadaan
                </h3>
                <p className="mt-2 font-['Nunito'] text-[#666666] text-[11px] leading-[16px]">
                  Proses pembelian dan Quality Control.
                </p>
              </div>

              {/* ITEM 5 - PENGIRIMAN */}
              <div className="flex flex-col items-center text-center w-full max-w-[160px]">
                <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-[#EDE7F6] flex items-center justify-center shrink-0">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="#A83E3E"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5ZM17 9.5H19.5L21.47 12H17V9.5Z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-['Nunito'] text-[#222222] text-sm md:text-[15px] font-bold">
                  Pengiriman
                </h3>
                <p className="mt-2 font-['Nunito'] text-[#666666] text-[11px] leading-[16px]">
                  Pengiriman barang sesuai jadwal yang disepakati.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SparepartDetail;