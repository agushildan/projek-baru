import { useEffect, useState } from "react";
import i18n from "../i18n";
import softwareDevelopment from "../assets/layanan/Software_Development.png";
import servicesMaintenance from "../assets/layanan/Services_and_Maintanance.png";
import itEquipment from "../assets/layanan/IT_EquipmentHardware_&_Networking.png";
import itConsultant from "../assets/layanan/IT_Consultant_&_Problem_Solving.png";
import procurementEngine from "../assets/layanan/Procurement_of_Engine.png";
import instalasiListrik from "../assets/layanan/Installlation_Electrical.png";

function Layanan() {
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

  const layananList = [
  {
    title: "Software Development",
    description:
      "Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi.",
    image: softwareDevelopment,
  },
  {
    title: "Services and Maintenance",
    description:
      "Memberikan jasa perbaikan dan pemeliharaan baik untuk software, hardware ataupun infrastruktur.",
    image: servicesMaintenance,
  },
  {
    title: "IT Equipment/Hardware & Networking",
    description:
      "Memasok barang dan suku cadang barang IT untuk bisnis dan produk anda yang menjamin kepuasan pelanggan dan pengiriman cepat.",
    image: itEquipment,
  },
  {
    title: "IT Consultant & Problem Solving",
    description:
      "Memberikan solusi masalah dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan kinerja perusahaan.",
    image: itConsultant,
  },
  {
    title: "Procurement of Engine and Turbine Components and Spare Parts",
    description:
      "Kami siap membantu dalam pengadaan komponen industri baik berupa komponen yang sudah jadi ataupun masih berupa bahan baku atau masih berupa material.",
    image: procurementEngine,
  },
  {
  title: "Instalasi Peralatan Listrik dan Otomasi",
  description:
    "Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi.",
  image: instalasiListrik,
},
];

  return (
    <section
  className="w-full px-4 py-12 md:py-16"
  style={{
    background:
      "linear-gradient(to bottom, #FFFFFF 0%, #EFEFEF 35%, #E1E4EE 70%, #D4D9E7 100%)",
  }}
>
      <div className="max-w-5xl mx-auto">
        {/* JUDUL */}
        <div className="text-center mb-7">
          <h2 className="font-['Cormorant_Garamond'] text-[#222222] text-3xl md:text-4xl font-semibold tracking-wide">
            {t("judul_layanan", "LAYANAN")}
          </h2>

          <p className="font-nunito mt-3 max-w-4xl mx-auto text-[9px] md:text-[10px] leading-relaxed text-gray-600">
            {t(
              "deskripsi_layanan",
              "PT Digi Tekno Indonesia menyediakan Software IT (Website MIS (Manajemen Informasi Sistem), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>

        {/* DAFTAR LAYANAN */}
        <div className="flex flex-col gap-2.5 md:gap-3">
          {layananList.map((layanan, index) => (
            <div
              key={index}
              className="w-full min-h-[125px] md:min-h-[135px] bg-[#f2f5ff] border border-[#9eb5d0] rounded-md px-6 py-5 flex items-center justify-between gap-6"
            >
              {/* TEXT */}
              <div className="flex-1 min-w-0">
                <h3 className="font-['Cormorant_Garamond'] text-[#3477ae] text-lg md:text-xl font-semibold">
                  {layanan.title}
                </h3>

                <p className="font-['Nunito_Sans'] mt-2 text-[10px] md:text-xs leading-relaxed text-gray-700 max-w-3xl">
                  {layanan.description}
                </p>
              </div>

              {/* IMAGE */}
              <div className="shrink-0">
                <img
                  src={layanan.image}
                  alt={layanan.title}
                  className="w-[90px] h-[80px] md:w-[105px] md:h-[90px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Layanan;
