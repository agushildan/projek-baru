import React from "react";
import mknk from "../assets/produk/mknk.png";

function MekanikEngineering() {
  const layananList = [
    {
      title: "Machining",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
    },
    {
      title: "Repair & Maintenance",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
    },
    {
      title: "Engineering Service",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
    },
    {
      title: "Fabrication",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* =========================
          HERO MEKANIKAL ENGINEERING
      ========================== */}
      <section
        className="
          w-full
          py-12
          md:py-14
        "
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #F8F9FF 0%, #C4E2EF 100%)",
        }}
      >
        <div
          className="
            max-w-[1100px]
            mx-auto
            px-4
            text-center
          "
        >
          <h1
            className="
              font-['Cormorant_Garamond']
              text-[#3B413B]
              text-3xl
              md:text-4xl
              font-semibold
              tracking-wide
            "
          >
            Mekanikal & Engineering
          </h1>

          <p
            className="
              mt-4
              max-w-[900px]
              mx-auto
              font-['Nunito']
              text-[#666666]
              text-[10px]
              sm:text-xs
              md:text-sm
              leading-relaxed
            "
          >
            PT. Digi Tekno Indonesia menyediakan Layanan Mekanikal dan
            Engineering, seperti Layanan Repair, Maintenance, Machining, dan
            Engineering untuk menjaga performa, maintenance dan kendala mesin
            industri anda.
          </p>
        </div>
      </section>

      {/* =========================
          LAYANAN KAMI
      ========================== */}
      <section
        className="
          w-full
          bg-white
          pt-10
          pb-16
          md:pt-11
          md:pb-20
        "
      >
        <div
          className="
            max-w-[1100px]
            mx-auto
            px-4
          "
        >
          {/* TITLE */}
          <div className="flex flex-col items-center">
            <h2
              className="
                font-['Nunito Sans']
                text-[#3B413B]
                text-2xl
                md:text-[27px]
                font-bold
                leading-[100%]
                text-center
              "
            >
              Layanan Mekanikal & Engineering
            </h2>

            {/* STRIP BIRU */}
            <div
              className="
                w-[65px]
                h-[2.5px]
                bg-[#4F8DC0]
                mt-7
              "
            />
          </div>

          {/* =========================
              CARD LIST
          ========================== */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              justify-items-center
            "
          >
            {layananList.map((layanan, index) => (
              <div
                key={index}
                className="
                  w-full
                  max-w-[344px]
                  bg-white
                  rounded-[6px]
                  overflow-hidden
                  shadow-[0_3px_10px_rgba(0,0,0,0.16)]
                "
              >
                {/* =========================
                    GAMBAR
                ========================== */}
                <div
                  className="
                    w-full
                    h-[165px]
                    overflow-hidden
                "
                >
                  <img
                    src={mknk}
                    alt={layanan.title}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

                {/* =========================
                    CONTENT CARD
                ========================== */}
                <div
                  className="
                    px-4
                    pt-4
                    pb-6
                    min-h-[180px]
                    flex
                    flex-col
                "
                >
                  {/* TITLE CARD */}
                  <h3
                    className="
                      font-['Nunito']
                      text-[#3B413B]
                      text-[15px]
                      md:text-[16px]
                      font-bold
                      leading-[20px]
                    "
                  >
                    {layanan.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-2
                      font-['Nunito']
                      text-[#777777]
                      text-[10px]
                      md:text-[11px]
                      leading-[18px]
                      max-w-[300px]
                    "
                  >
                    {layanan.description}
                  </p>

                  {/* BUTTON */}
                  <button
                    type="button"
                    className="
                      mt-4
                      w-[145px]
                      h-[28px]
                      bg-white
                      border
                      border-[#000000]
                      rounded-[5px]
                      shadow-[0_1px_2px_rgba(0,0,0,0.15)]
                      font-['Nunito']
                      text-[#333333]
                      text-[9px]
                      md:text-[10px]
                      flex
                      items-center
                      justify-center
                      gap-3
                      hover:bg-gray-50
                      transition-all
                      duration-200
                      cursor-pointer
                      mt-auto mx-auto
                    "
                  >
                    <span>Lihat Selengkapnya</span>

                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 16 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 5.51172C14.5 5.2465 14.3946 4.99215 14.2071 4.80461C14.0196 4.61708 13.7652 4.51172 13.5 4.51172H1C0.734784 4.51172 0.480429 4.61708 0.292892 4.80461C0.105356 4.99215 0 5.2465 0 5.51172C0 5.77694 0.105356 6.03129 0.292892 6.21883C0.480429 6.40636 0.734784 6.51172 1 6.51172H13.5C13.7652 6.51172 14.0196 6.40636 14.2071 6.21883C14.3946 6.03129 14.5 5.77694 14.5 5.51172Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 5.51229C15.9999 5.24709 15.8945 4.99278 15.707 4.80529L11.207 0.305288C11.1148 0.209778 11.0044 0.133596 10.8824 0.0811869C10.7604 0.0287779 10.6292 0.00119157 10.4964 3.77564e-05C10.3636 -0.00111606 10.2319 0.0241859 10.109 0.0744668C9.98615 0.124748 9.8745 0.199001 9.78061 0.292893C9.68671 0.386786 9.61246 0.498438 9.56218 0.621335C9.5119 0.744231 9.4866 0.87591 9.48775 1.00869C9.4889 1.14147 9.51649 1.27269 9.5689 1.39469C9.62131 1.5167 9.69749 1.62704 9.793 1.71929L13.586 5.51229L9.793 9.30529C9.61084 9.49389 9.51005 9.74649 9.51233 10.0087C9.5146 10.2709 9.61977 10.5217 9.80518 10.7071C9.99059 10.8925 10.2414 10.9977 10.5036 11C10.7658 11.0022 11.0184 10.9014 11.207 10.7193L15.707 6.21929C15.8945 6.0318 15.9999 5.77748 16 5.51229Z"
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
    </div>
  );
}

export default MekanikEngineering;
