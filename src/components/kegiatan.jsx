import { useEffect, useState } from "react";
import i18n from "../i18n";
import fotoKegiatan from "../assets/Kegiatan/foto kegiatan.jpg";

function Kegiatan() {
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
      id="kegiatan"
      className="w-full bg-[#dfeefc] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================
            CONTENT
        ========================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] items-center gap-12 lg:gap-16">
          {/* =========================
              TEXT
          ========================== */}
          <div className="max-w-[560px]">
            <h2 className="font-['Cormorant_Garamond'] text-[#666666] text-3xl md:text-4xl font-semibold tracking-wide">
              {t("judul_kegiatan", "KEGIATAN")}
            </h2>
            <p className="mt-8 font-['Nunito Sans'] text-[#666666] text-base md:text-[17px] leading-[1.65]">
              {t(
                "deskripsi_kegiatan",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt tempus leo non porta. Vivamus sem tellus, pulvinar ut rhoncus sed, maximus id lectus. Donec viverra fermentum turpis. Donec ornare euismod iaculis. Cras vulputate, diam non gravida convallis, ipsum neque dapibus nunc, eu pulvinar orci dui at nisl. Nulla rutrum eget odio in venenatis.",
              )}
            </p>
            <button
              type="button"
              className="mt-8 bg-[#c84d4d] hover:bg-[#b94343] text-white font-['Nunito'] font-semibold text-sm md:text-base px-5 md:px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              {t("tombol_kegiatan", "Lihat Kegiatan Lainnya Disini")}
            </button>
          </div>

          {/* =========================
              INSTAGRAM CARD
          ========================== */}
          <div className="flex justify-center lg:justify-end lg:pr-2">
            <div className="w-[360px] md:w-[380px] bg-white rounded-[16px] overflow-hidden shadow-sm">
              {/* =========================
                  INSTAGRAM HEADER
              ========================== */}
              <div className="h-[72px] px-[18px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* LOGO DIGI */}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#eaf8fb] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src="/digilogo2.png"
                      alt="Digi"
                      className="w-full h-full object-contain p-[5px]"
                    />
                  </div>

                  {/* USERNAME */}
                  <span className="font-['Nunito Sans'] text-[14px] font-bold text-[#333333]">
                    digiteknoindo
                  </span>
                </div>

                {/* THREE DOT */}
                <svg
                  className="mr-2"
                  width="17"
                  height="4"
                  viewBox="0 0 27 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#3B413B" />
                  <circle cx="13.5" cy="3.5" r="3.5" fill="#3B413B" />
                  <circle cx="23.5" cy="3.5" r="3.5" fill="#3B413B" />
                </svg>
              </div>

              {/* =========================
    FOTO + DOT INDICATOR
========================== */}
              <div className="px-[18px]">
                <div className="relative w-full">
                  <img
                    src={fotoKegiatan}
                    alt="Kegiatan Digi Tekno Indonesia"
                    className="block w-full aspect-square object-cover rounded-[2px]"
                  />

                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-[17px]">
                    <svg
                      className="w-[28px] h-auto"
                      viewBox="0 0 46 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse cx="5.5" cy="5" rx="5.5" ry="5" fill="#C9C8C7" />
                      <circle cx="23" cy="5" r="5" fill="#4C8AAE" />
                      <ellipse
                        cx="40.5"
                        cy="5"
                        rx="5.5"
                        ry="5"
                        fill="#C9C8C7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* =========================
                  INSTAGRAM CONTENT
              ========================== */}
              <div className="px-[18px] pt-3 pb-[16px]">
                {/* ACTION ICONS */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    {/* LIKE */}
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 34 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.62722 2.62288C4.30715 0.94345 6.58533 0 8.96076 0C11.3362 0 13.6144 0.94345 15.2943 2.62288C15.6228 2.95016 16.0456 3.35746 16.5628 3.8448C17.0788 3.35746 17.501 2.95016 17.8295 2.62288C19.5024 0.957832 21.7648 0.0202751 24.1251 0.0139538C26.4854 0.00763255 28.7528 0.933058 30.4346 2.58912C32.1164 4.24518 33.0766 6.49805 33.1067 8.85815C33.1368 11.2182 32.2342 13.4948 30.5951 15.1932L17.8277 27.9606C17.4917 28.2965 17.0361 28.4852 16.561 28.4852C16.0859 28.4852 15.6303 28.2965 15.2943 27.9606L2.52688 15.195C0.889372 13.5062 -0.0181619 11.241 0.000275531 8.88875C0.018713 6.53647 0.963433 4.28583 2.62722 2.62288Z"
                        fill="#EC0301"
                      />
                    </svg>

                    {/* COMMENT */}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 28C11.83 28 9.21987 27.2082 6.9998 25.7248C4.77974 24.2414 3.04941 22.133 2.02763 19.6662C1.00584 17.1994 0.738497 14.485 1.2594 11.8663C1.7803 9.24754 3.06605 6.84207 4.95406 4.95406C6.84207 3.06606 9.24754 1.78031 11.8663 1.2594C14.485 0.738504 17.1994 1.00585 19.6662 2.02763C22.133 3.04942 24.2414 4.77974 25.7248 6.99981C27.2082 9.21987 28 11.83 28 14.5C28 16.732 27.46 18.8365 26.5 20.6905L28 28L20.6905 26.5C18.8365 27.46 16.7305 28 14.5 28Z"
                        stroke="#3B413B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* SHARE / PAPER PLANE */}
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.125 0.5L0.5 9.4375L11.0625 14.3125L22.4375 6.1875L14.3125 17.5625L19.1875 28.125L28.125 0.5Z"
                        stroke="#3B413B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* BOOKMARK */}
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.750004 5.41667C0.750004 3.78333 0.750004 2.96667 1.06792 2.3425C1.34755 1.79372 1.79372 1.34754 2.3425 1.06792C2.96667 0.75 3.78334 0.75 5.41667 0.75H13.5833C15.2167 0.75 16.0333 0.75 16.6575 1.06792C17.2063 1.34754 17.6525 1.79372 17.9321 2.3425C18.25 2.96667 18.25 3.78333 18.25 5.41667V24.8198C18.25 25.5285 18.25 25.8829 18.1027 26.0769C18.0391 26.1612 17.9578 26.2307 17.8647 26.2806C17.7715 26.3305 17.6686 26.3595 17.5631 26.3656C17.3196 26.3802 17.025 26.1833 16.4358 25.791L9.5 21.1667L2.56417 25.7896C1.975 26.1833 1.68042 26.3802 1.43542 26.3656C1.33018 26.3593 1.22757 26.3302 1.13467 26.2803C1.04177 26.2305 0.960784 26.161 0.897295 26.0769C0.750004 25.8829 0.750004 25.5285 0.750004 24.8198V5.41667Z"
                      fill="#3B413B"
                      stroke="#3B413B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* LIKES */}
                <p className="mt-2 font-['Nunito Sans'] text-[14px] font-bold text-[#333333]">
                  2,022 likes
                </p>

                {/* CAPTION */}
                <p className="mt-1 font-['Nunito Sans'] text-[11px] leading-[1.4] text-[#777777]">
                  <span className="font-bold text-[#333333]">
                    digiteknoindo
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  tincidunt tempus leo non porta. dolor sit amet
                </p>

                {/* DATE */}
                <p className="mt-3 font-['Nunito Sans'] text-[9px] text-[#999999]">
                  July 15, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
