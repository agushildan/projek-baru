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
      title: "Services and Maintenance",
      description:
        "Memberikan jasa perbaikan dan pemeliharaan baik untuk software, hardware ataupun infrastruktur.",
      image: servicesMaintenance,
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

    {
      title: "IT Equipment/Hardware & Networking",
      description:
        "Memasok barang dan suku cadang barang IT untuk bisnis dan produk anda yang menjamin kepuasan pelanggan dan pengiriman cepat.",
      image: itEquipment,
    },

    {
      title: "Software Development",
      description:
        "Mengembangkan aplikasi perangkat lunak dengan teknologi informasi berbasis web dan mobile aplikasi.",
      image: softwareDevelopment,
    },

    {
      title: "IT Consultant & Problem Solving",
      description:
        "Memberikan solusi masalah dan mengevaluasi sistem IT di perusahaan anda untuk meningkatkan kinerja perusahaan.",
      image: itConsultant,
    },
  ];
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
            {t("judul_layanan", "LAYANAN")}
          </h2>

          <p className="font-['Nunito Sans'] mt-7 max-w-4xl mx-auto text-[12px] md:text-[12px] leading-relaxed text-[#666666]">
            {t(
              "deskripsi_layanan",
              "PT Digi Tekno Indonesia menyediakan Mekanik & Engineering (Repair & Services), Pengadaan Sparepart dan Material Industri, Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP) untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>

        {/* DAFTAR LAYANAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {layananList.map((layanan, index) => (
            <div
              key={index}
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
                  src={layanan.image}
                  alt={layanan.title}
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
                  {layanan.title}
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
                  {layanan.description}
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
                  <svg
                    width="11"
                    height="7"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7988 4.86705C12.7988 4.63295 12.7058 4.40844 12.5403 4.24291C12.3748 4.07737 12.1503 3.98438 11.9162 3.98438H0.88268C0.64858 3.98438 0.424066 4.07737 0.258532 4.24291C0.0929982 4.40844 2.71201e-06 4.63295 2.71201e-06 4.86705C2.71201e-06 5.10115 0.0929982 5.32567 0.258532 5.4912C0.424066 5.65673 0.64858 5.74973 0.88268 5.74973H11.9162C12.1503 5.74973 12.3748 5.65673 12.5403 5.4912 12.7058 5.32567 12.7988 5.10115 12.7988 4.86705Z"
                      fill="black"
                    />

                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.1229 4.86557C14.1228 4.63149 14.0298 4.40702 13.8642 4.24152L9.89219 0.269471C9.81077 0.185167 9.71337 0.117922 9.60568 0.0716618C9.49799 0.0254016 9.38216 0.00105177 9.26496 3.33267e-05C9.14776 -0.000985121 9.03153 0.0213484 8.92305 0.0657302C8.81457 0.110112 8.71602 0.175654 8.63314 0.258531C8.55027 0.341407 8.48473 0.43996 8.44034 0.548438C8.39596 0.656916 8.37363 0.773146 8.37465 0.890348C8.37566 1.00755 8.40001 1.12337 8.44627 1.23106C8.49253 1.33875 8.55978 1.43615 8.64408 1.51758L11.9921 4.86557L8.64408 8.21357C8.4833 8.38004 8.39433 8.60301 8.39634 8.83445C8.39835 9.06588 8.49118 9.28727 8.65484 9.45092C8.81849 9.61458 9.03988 9.70741 9.27131 9.70942C9.50275 9.71143 9.72572 9.62246 9.89219 9.46167L13.8642 5.48963C14.0298 5.32413 14.1228 5.09965 14.1229 4.86557Z"
                      fill="black"
                    />
                  </svg>
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
