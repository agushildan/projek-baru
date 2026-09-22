import Footer from "./Footer";
import { ArrowRight } from "lucide-react";

function Karir() {
  const jobs = [
    {
      title: "UI/UX Designer",
      category: "IT & Software",
    },
    {
      title: "UI/UX Designer",
      category: "IT & Software",
    },
    {
      title: "UI/UX Designer",
      category: "IT & Software",
    },
  ];

  return (
    <div className="w-full pt-[64px] bg-white">
      {/* =========================
          HERO KARIR
      ========================== */}
      <section
        className="
          w-full
          py-10
          md:py-12
        "
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #ECF5F9 25%, #DCECF3 50%, #D2E8F2 75%, #C4E2EF 100%)",
        }}
      >
        <div className="max-w-[1050px] mx-auto px-6">
          <h1
            className="
              font-['Cormorant_Garamond']
              text-[#222222]
              text-4xl
              md:text-[42px]
              font-semibold
              tracking-wide
            "
          >
            Karir
          </h1>

          <p
            className="
              mt-4
              max-w-[1000px]
              font-['Nunito']
              text-[#666666]
              text-[11px]
              sm:text-xs
              md:text-[13px]
              leading-relaxed
            "
          >
            PT Digi Tekno Indonesia menyediakan Mekanik & Engineering (Repair &
            Services), Pengadaan Sparepart dan Material Industri, Software IT
            (Website SIM (Sistem Informasi Manajemen), Landing Page, Company
            Profile, ERP) untuk mendukung kebutuhan bisnis.
          </p>
        </div>
      </section>

      {/* =========================
          LOWONGAN PEKERJAAN
      ========================== */}
      <section className="w-full bg-white">
        <div className="max-w-[820px] mx-auto pt-8 pb-16">
          {/* TITLE */}
          <h2
            className="
              font-['Nunito Sans']
              text-[#3D433F]
              text-[30px]
              font-semibold
            "
          >
            Lowongan Pekerjaan
          </h2>

          <p
            className="
              mt-2
              font-['Nunito']
              text-[#333333]
              text-[16px]
            "
          >
            Temukan peluang karir yang sesuai dengan keahlian dan minat anda.
          </p>

          {/* =========================
              FILTER
          ========================== */}
          <div className="flex items-center gap-1.5 mt-3">
            <button
              type="button"
              className="
                h-[27px]
                px-3
                rounded-full
                border
                border-[#8EA5B2]
                bg-[#DCEAF2]
                text-[#4A4A4A]
                text-[11px]
                font-['Nunito']
              "
            >
              Semua
            </button>

            <button
              type="button"
              className="
                h-[27px]
                px-3
                rounded-full
                border
                border-[#BDBDBD]
                bg-white
                text-[#4A4A4A]
                text-[11px]
                font-['Nunito']
              "
            >
              IT & Software
            </button>

            <button
              type="button"
              className="
                h-[27px]
                px-3
                rounded-full
                border
                border-[#BDBDBD]
                bg-white
                text-[#4A4A4A]
                text-[11px]
                font-['Nunito']
              "
            >
              Mekanikal
            </button>

            <button
              type="button"
              className="
                h-[27px]
                px-3
                rounded-full
                border
                border-[#BDBDBD]
                bg-white
                text-[#4A4A4A]
                text-[11px]
                font-['Nunito']
              "
            >
              Engineering
            </button>

            <button
              type="button"
              className="
                h-[27px]
                px-3
                rounded-full
                border
                border-[#BDBDBD]
                bg-white
                text-[#4A4A4A]
                text-[11px]
                font-['Nunito']
              "
            >
              Administrasi
            </button>
          </div>

          {/* =========================
              JOB LIST
          ========================== */}
          <div className="mt-4 space-y-3">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="
                  w-full
                  h-[112px]
                  bg-white
                  border
                  border-[#E1E1E1]
                  rounded-[6px]
                  shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                  px-4
                  flex
                  items-center
                "
              >
                {/* =========================
    ICON
========================= */}
                <div
                  className="
    shrink-0
    w-[78px]
    h-[78px]
    rounded-full
    bg-[#DCEEF7]
    flex
    items-center
    justify-center
  "
                >
                  <svg
                    width="69"
                    height="63"
                    viewBox="0 0 69 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[36px] h-auto"
                  >
                    <path
                      d="M62.5 43.75H6.25V6.25H62.5M62.5 0H6.25C2.78125 0 0 2.78125 0 6.25V43.75C0 45.4076 0.65848 46.9973 1.83058 48.1694C3.00269 49.3415 4.5924 50 6.25 50H28.125V56.25H21.875V62.5H46.875V56.25H40.625V50H62.5C65.9688 50 68.75 47.2188 68.75 43.75V6.25C68.75 4.5924 68.0915 3.00268 66.9194 1.83058C65.7473 0.65848 64.1576 0 62.5 0ZM43.75 10.9375L41.8125 15.2187L37.5 17.1875L41.8125 19.1563L43.75 23.4375L45.7188 19.1563L50 17.1875L45.7188 15.2187L43.75 10.9375ZM29.6875 17.1875L26.2812 24.7187L18.75 28.125L26.2812 31.5313L29.6875 39.0625L33.125 31.5313L40.625 28.125L33.125 24.7187L29.6875 17.1875Z"
                      fill="black"
                    />
                  </svg>
                </div>

                {/* =========================
                    JOB INFO
                ========================== */}
                <div className="ml-5 flex-1">
                  <h3
                    className="
                      font-['Nunito']
                      text-[#222222]
                      text-[16px]
                      font-bold
                      leading-none
                    "
                  >
                    {job.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-['Nunito']
                      text-[#444444]
                      text-[13px]
                    "
                  >
                    {job.category}
                  </p>

                  {/* LOCATION + TYPE */}
                  <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-1.5">
                      <svg
                        width="27"
                        height="32"
                        viewBox="0 0 27 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[13px] h-auto shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.79102 13.4909C5.79102 11.5487 6.56254 9.68611 7.93585 8.3128C9.30916 6.93949 11.1718 6.16797 13.1139 6.16797C15.0561 6.16797 16.9187 6.93949 18.292 8.3128C19.6653 9.68611 20.4368 11.5487 20.4368 13.4909C20.4368 15.433 19.6653 17.2957 18.292 18.669C16.9187 20.0423 15.0561 20.8138 13.1139 20.8138C11.1718 20.8138 9.30916 20.0423 7.93585 18.669C6.56254 17.2957 5.79102 15.433 5.79102 13.4909ZM13.1139 8.48047C11.7851 8.48047 10.5107 9.00835 9.57103 9.94799C8.6314 10.8876 8.10352 12.162 8.10352 13.4909C8.10352 14.8197 8.6314 16.0941 9.57103 17.0338C10.5107 17.9734 11.7851 18.5013 13.1139 18.5013C14.4428 18.5013 15.7172 17.9734 16.6568 17.0338C17.5965 16.0941 18.1243 14.8197 18.1243 13.4909C18.1243 12.162 17.5965 10.8876 16.6568 9.94799C15.7172 9.00835 14.4428 8.48047 13.1139 8.48047Z"
                          fill="#2F2E2E"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.0467515 11.7275C0.310956 8.53154 1.76696 5.55174 4.12585 3.37934C6.48473 1.20693 9.5741 0.000702662 12.7809 0H13.4469C16.6537 0.000702662 19.7431 1.20693 22.102 3.37934C24.4609 5.55174 25.9169 8.53154 26.1811 11.7275C26.475 15.2877 25.375 18.8229 23.1132 21.588L15.724 30.6237C15.4077 31.0104 15.0095 31.322 14.5581 31.5359C14.1068 31.7499 13.6135 31.8609 13.1139 31.8609C12.6144 31.8609 12.1211 31.7499 11.6697 31.5359C11.2183 31.322 10.8201 31.0104 10.5039 30.6237L3.11467 21.588C0.852788 18.8229 -0.247141 15.2877 0.0467515 11.7275ZM12.7809 2.3125C10.1549 2.31361 7.62516 3.30171 5.69358 5.08079C3.762 6.85988 2.56967 9.29998 2.35308 11.9171C2.10839 14.88 3.02371 17.8222 4.90608 20.1234L12.2953 29.1606C12.3946 29.2822 12.5197 29.3802 12.6616 29.4474C12.8034 29.5147 12.9585 29.5496 13.1155 29.5496C13.2725 29.5496 13.4275 29.5147 13.5693 29.4474C13.7112 29.3802 13.8363 29.2822 13.9356 29.1606L21.3248 20.1234C23.2061 17.8217 24.1203 14.8796 23.8748 11.9171C23.6581 9.29971 22.4656 6.85939 20.5337 5.08027C18.6018 3.30115 16.0717 2.31322 13.4454 2.3125H12.7809Z"
                          fill="#2F2E2E"
                        />
                      </svg>

                      <span
                        className="
                          font-['Nunito']
                          text-[#444444]
                          text-[12px]
                        "
                      >
                        Bandung, Jawa Barat
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] shrink-0"
                      >
                        <path
                          d="M1 7.25C1 6.58696 1.26339 5.95107 1.73223 5.48223C2.20107 5.01339 2.83696 4.75 3.5 4.75H21C21.663 4.75 22.2989 5.01339 22.7678 5.48223C23.2366 5.95107 23.5 6.58696 23.5 7.25V21C23.5 21.663 23.2366 22.2989 22.7678 22.7678C22.2989 23.2366 21.663 23.5 21 23.5H3.5C2.83696 23.5 2.20107 23.2366 1.73223 22.7678C1.26339 22.2989 1 21.663 1 21V7.25Z"
                          stroke="#2F2E2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M8.5 4.75V1H16V4.75"
                          stroke="#2F2E2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M1 11H23.5"
                          stroke="#2F2E2E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span
                        className="
                          font-['Nunito']
                          text-[#444444]
                          text-[12px]
                        "
                      >
                        Full Time
                      </span>
                    </div>
                  </div>
                </div>

                {/* =========================
                    BUTTON
                ========================== */}
                <div
                  className="
                    w-[120px]
                    shrink-0
                    flex
                    flex-col
                    gap-2
                  "
                >
                  {/* LAMAR SEKARANG */}
                  <button
                    type="button"
                    className="
                      w-full
                      h-[30px]
                      rounded-[4px]
                      bg-[#DCEEF7]
                      text-[#333333]
                      text-[11px]
                      font-['Nunito']
                      font-medium
                      border
                      border-transparent
                      shadow-[0_2px_4px_rgba(0,0,0,0.12)]
                      hover:bg-[#CDE6F1]
                      hover:shadow-[0_2px_5px_rgba(0,0,0,0.16)]
                      transition-all
                    "
                  >
                    Lamar Sekarang
                  </button>

                  {/* LIHAT DETAIL */}
                  <button
                    type="button"
                    className="
                      w-full
                      h-[30px]
                      rounded-[4px]
                      bg-white
                      border
                      border-[#9ABECE]
                      shadow-[0_2px_3px_rgba(0,0,0,0.12)]
                      text-[#333333]
                      text-[11px]
                      font-['Nunito']
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-3
                      hover:bg-[#F5F7F8]
                      hover:shadow-[0_2px_5px_rgba(0,0,0,0.16)]
                      transition-all
                    "
                  >
                    <span>Lihat Detail</span>

                    <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default Karir;
