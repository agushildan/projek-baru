import { useEffect, useState } from "react";
import i18n from "../i18n";

function Layanan() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const [layananSetting, setLayananSetting] = useState({
    slogan: "LAYANAN",
    description:
      "PT Digi Tekno Indonesia menyediakan Mekanik & Engineering (Repair & Services), Pengadaan Sparepart dan Material Industri, Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP) untuk mendukung kebutuhan bisnis.",
  });

  const [layananList, setLayananList] = useState([]);

  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/layanan-data");

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Gagal mengambil data layanan.");
        }

        setLayananList(result.data);
      } catch (error) {
        console.error("❌ Error mengambil data layanan:", error);
      }
    };

    fetchLayanan();
  }, []);

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

  useEffect(() => {
    const fetchLayananSetting = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/layanan");

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(
            result.message || "Gagal mengambil pengaturan layanan.",
          );
        }

        setLayananSetting({
          slogan: result.data.slogan || "LAYANAN",
          description: result.data.description || "",
        });
      } catch (error) {
        console.error("❌ Error mengambil pengaturan layanan:", error);
      }
    };

    fetchLayananSetting();
  }, []);
  return (
    <section
      className="w-full px-4 pt-[110px] pb-12 md:pt-[110px] md:pb-16"
      style={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #EFEFEF 35%, #E1E4EE 70%, #D4D9E7 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* JUDUL */}
        <div className="text-center mb-7">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            {layananSetting.slogan}
          </h2>

          <p className="font-['Nunito Sans'] mt-7 max-w-4xl mx-auto text-[12px] md:text-[12px] leading-relaxed text-[#666666]">
            {layananSetting.description}
          </p>
        </div>

        {/* DAFTAR LAYANAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {layananList.map((layanan) => (
            <div
              key={layanan.id}
              className="
        w-full
        h-[135px]
        bg-[#F2F5FF]
        border
        border-[#9EB5D0]
        rounded-md
        px-4
        py-4
        flex
        items-center
        gap-4
        shadow-[inset_0_4px_4px_rgba(0,0,0,0.12)]
      "
            >
              {/* IMAGE */}
              <div className="shrink-0">
                <img
                  src={
                    layanan.gambar
                      ? `http://localhost:5000${layanan.gambar}`
                      : ""
                  }
                  alt={layanan.judul}
                  className="
            w-[90px]
            h-[90px]
            object-cover
            rounded-lg
          "
                />
              </div>

              {/* CONTENT */}
              <div className="flex-1 min-w-0 h-full flex flex-col justify-center">
                {/* JUDUL */}
                <h3
                  className="
            font-['Cormorant_Garamond']
            text-[#3477ae]
            text-lg
            font-semibold
            leading-tight
            h-[44px]
            flex
            items-start
          "
                >
                  {layanan.judul}
                </h3>

                {/* DESKRIPSI */}
                <p
                  className="
            font-['Nunito Sans']
            mt-1
            h-[40px]
            text-[10px]
            leading-[1.4]
            text-gray-700
          "
                >
                  {layanan.deskripsi}
                </p>

                {/* BUTTON */}
                <button
                  type="button"
                  className="
            mt-3
            w-[94px]
            h-[23px]
            bg-white
            border
            border-[#000000]
            text-[#000000]
            text-[10px]
            font-['Nunito Sans']
            rounded-[4px]
            shadow-[0_1px_3px_rgba(0,0,0,0.2)]
            hover:bg-gray-50
            transition-colors
            duration-200
            inline-flex
            items-center
            justify-center
            gap-2
            cursor-pointer
          "
                >
                  Lihat Detail
                  {/* SVG lo yang lama tetap di sini */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Layanan;
