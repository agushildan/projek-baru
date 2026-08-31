import { useEffect, useState } from "react";
import i18n from "../i18n";

function Kontak() {
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

  return (
    <section
      id="kontak"
      className="w-full bg-white px-6 py-16 md:px-10 lg:px-12"
    >
      <div className="w-full max-w-[1280px] mx-auto">
        {/* =========================
            JUDUL KONTAK
        ========================== */}
        <div className="flex justify-center">
          <h2
            className="
              font-['Cormorant_Garamond']
              text-[#666666]
              text-[69px]
              leading-none
              font-semibold
              text-center
            "
          >
            {t("judul_kontak", "Kontak")}
          </h2>
        </div>

        {/* =========================
            DESKRIPSI
        ========================== */}
        <div className="flex justify-center">
          <p
            className="
              mt-6
              w-full
              max-w-[911px]
              font-['Nunito']
              text-[#3B413B]
              text-[15px]
              font-normal
              leading-[1.2]
              text-center
            "
          >
            Kami akan menghubungi Anda untuk mengatur jadwal konsultasi awal
            secara gratis,
            <br />
            tanpa persyaratan.
          </p>
        </div>

        {/* =========================
            FORM
        ========================== */}
        <form
          className="
            w-[414px]
            mx-auto
            mt-7
        "
        >
          {/* =========================
      NAMA
  ========================== */}
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="
        block
        mb-2
        font-['Nunito']
        text-[#333333]
        text-[16px]
        font-medium
      "
            >
              Nama
            </label>

            <input
              id="nama"
              type="text"
              placeholder="Masukkan Nama Anda"
              className="
            w-full
            h-[40px]
            bg-white
            border-[2px]
            border-[#D9D9D9]
            rounded-[10px]
            shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
            px-4
            font-['Nunito']
            text-[16px]
            text-[#333333]
            placeholder:text-[#bdbdbd]
            outline-none
            box-border
        "
            />
          </div>

          {/* =========================
      EMAIL
  ========================== */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="
        block
        mb-2
        font-['Nunito']
        text-[#333333]
        text-[16px]
        font-medium
      "
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Masukkan Email Anda"
              className="
        w-full
        h-[40px]
        bg-white
        border-[2px]
        border-[#D9D9D9]
        rounded-[10px]
        shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
        px-4
        font-['Nunito']
        text-[16px]
        text-[#333333]
        placeholder:text-[#bdbdbd]
        outline-none
        box-border
      "
            />
          </div>

          {/* =========================
      PESAN
  ========================== */}
          <div className="mb-4">
            <label
              htmlFor="pesan"
              className="
        block
        mb-2
        font-['Nunito']
        text-[#333333]
        text-[16px]
        font-medium
      "
            >
              Pesan
            </label>

            <textarea
              id="pesan"
              placeholder="Masukkan Pesan"
              className="
                w-full
                h-[102px]
                bg-white
                border-[2px]
                border-[#D9D9D9]
                rounded-[10px]
                shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
                px-4
                py-3
                font-['Nunito']
                text-[16px]
                text-[#333333]
                placeholder:text-[#bdbdbd]
                outline-none
                resize-none
                box-border
            "
            />
          </div>

          {/* =========================
                    BUTTON
            ========================== */}
          <div className="flex justify-start">
            <button
              type="submit"
              className="
        w-[120px]
        h-[34px]
        rounded-[12px]
        bg-[#1C3759]
        border-[2px]
        border-[#C97173]
        shadow-[0_2px_4px_rgba(0,0,0,0.25)]
        text-white
        font-['Nunito']
        text-[16px]
        font-medium
        flex
        items-center
        justify-center
        transition-all
        duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_4px_7px_rgba(0,0,0,0.25)]
      "
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Kontak;
