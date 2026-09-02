import React from "react";

import machining from "../assets/layanan_mekanikal/mchnng.png";
import repairMaintenance from "../assets/layanan_mekanikal/repairnmnt.png";
import engineeringService from "../assets/layanan_mekanikal/engser.png";
import fabrication from "../assets/layanan_mekanikal/fabr.png";
import Footer from "./Footer";
import machin from "../assets/produk/machin.png";

function MekanikEngineering() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const layananList = [
    {
      title: "Machining",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
      image: machining,
    },
    {
      title: "Repair & Maintenance",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
      image: repairMaintenance,
    },
    {
      title: "Engineering Service",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
      image: engineeringService,
    },
    {
      title: "Fabrication",
      description:
        "Proses pemesinan presisi untuk komponen mesin dengan hasil akurat dan berkualitas tinggi.",
      image: fabrication,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* =========================
          HERO MEKANIKAL ENGINEERING (Soft Light Blue Gradient)
      ========================== */}
      <section
        className="
          w-full
          py-12
          md:py-14
        "
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #EEF7FC 0%, #CDE6F5 100%)",
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
              text-[#222222]
              text-3xl
              md:text-4xl
              font-semibold
              tracking-wide
              uppercase
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
                {/* GAMBAR */}
                <div
                  className="
                    w-full
                    h-[165px]
                    overflow-hidden
                  "
                >
                  <img
                    src={layanan.image}
                    alt={layanan.title}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

                {/* CONTENT CARD */}
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
                      mt-auto
                      mx-auto
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
                        d="M14.5 5.51172C14.5 5.2465 14.3946 4.99215 14.2071 4.80461C14.0196 4.61708 13.7652 4.51172 13.5 4.51172H1C0.734784 4.51172 0.480429 4.61708 0.292892 4.80461C0.105356 4.99215 0 5.2465 0 5.51172C0 5.77694 0.105356 6.03129 0.292892 6.21883C0.480429 6.40636 0.734784 6.51172 1 6.51172H13.5C13.7652 6.51172 14.0196 6.40636 14.2071 6.21883C14.0196 6.40636 13.7652 6.51172 13.5 6.51172Z"
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

      {/* =========================
          PROSES MEKANIKAL & ENGINEERING
      ========================== */}
      <section
        className="
          w-full
          pt-7
          pb-16
          md:pt-8
          md:pb-20
        "
        style={{
          background:
            "linear-gradient(to bottom, #FFFFFF 0%, #F1F5FC 20%, #E4EBF9 55%, #DCE5F7 100%)",
        }}
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
              Proses Mekanikal & Engineering
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
              TIMELINE
          ========================== */}
          <div className="relative mt-16 px-4 md:px-10">
            {/* GARIS PENGHUBUNG */}
            <div
              className="
                absolute
                left-[75px]
                right-[75px]
                top-[46px]
                h-[2px]
                bg-[#B9D1EA]
                z-0
              "
            />

            {/* TIMELINE ITEMS */}
            <div className="relative z-10 flex items-start justify-between">
              {/* ITEM 1 - KONSULTASI */}
              <div className="flex flex-col items-center text-center w-[150px]">
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="43"
                    height="47"
                    viewBox="0 0 55 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8333 16.2436C10.8333 10.2852 15.7083 5.41024 21.6667 5.41024C27.625 5.41024 32.5 10.2852 32.5 16.2436C32.5 22.2019 27.625 27.0769 21.6667 27.0769C15.7083 27.0769 10.8333 22.2019 10.8333 16.2436ZM35.2083 32.4936H8.125C3.62917 32.4936 0 36.1227 0 40.6186C0 46.6852 2.49167 51.5061 6.55417 54.7561C10.5625 57.9519 15.925 59.5769 21.6667 59.5769C27.4083 59.5769 32.7708 58.0061 36.7792 54.7561C40.8417 51.5061 43.3333 46.6311 43.3333 40.6186C43.3333 36.1227 39.7042 32.4936 35.2083 32.4936ZM50.5375 1.45607C50.3775 1.13974 50.1557 0.858673 49.8853 0.629456C49.6148 0.400238 49.3012 0.227519 48.963 0.121491C48.6247 0.0154641 48.2686 -0.0217223 47.9157 0.0121271C47.5628 0.0459764 47.2203 0.150176 46.9083 0.318574C45.6083 1.02274 45.0667 2.64774 45.7708 3.94774C47.7241 7.75211 48.7429 11.9671 48.7429 16.2436C48.7429 20.5201 47.7241 24.735 45.7708 28.5394C45.0667 29.8936 45.6083 31.5186 46.9083 32.1686C47.2875 32.3852 47.7208 32.4936 48.1542 32.4936C49.1292 32.4936 50.05 31.9519 50.5375 31.0311C52.9208 26.4269 54.1667 21.4436 54.1667 16.2436C54.1667 11.0436 52.975 6.06024 50.5375 1.45607ZM37.4833 5.68107C36.8455 6.00576 36.362 6.56976 36.1387 7.2498C35.9155 7.92984 35.9704 8.67062 36.2917 9.31024C37.375 11.3686 37.8625 13.6977 37.8625 16.1894C37.8625 18.6811 37.3208 21.0102 36.2917 23.0686C35.5875 24.4227 36.1292 26.0477 37.4833 26.6977C37.8625 26.9144 38.2958 26.9686 38.7292 26.9686C39.7042 26.9686 40.6792 26.4269 41.1667 25.5061C42.6292 22.6352 43.3333 19.4936 43.3333 16.1352C43.3333 12.7769 42.575 9.63524 41.1667 6.76441C40.842 6.12653 40.278 5.64311 39.5979 5.41982C38.9179 5.19652 38.1771 5.2515 37.5375 5.57274L37.4833 5.68107Z"
                      fill="#AE4A4A"
                    />
                  </svg>
                </div>

                <h3
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#3B413B]
                    text-[12px]
                    font-bold
                    leading-[14px]
                    text-center
                  "
                >
                  Konsultasi
                </h3>

                <p
                  className="
                    mt-1
                    w-[140px]
                    font-['Nunito']
                    text-[#666666]
                    text-[9px]
                    leading-[14px]
                    text-center
                  "
                >
                  Diskusi kebutuhan dan permasalahan mesin anda.
                </p>
              </div>

              {/* ITEM 2 - ANALISA */}
              <div className="flex flex-col items-center text-center w-[150px]">
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="38"
                    height="40"
                    viewBox="0 0 46 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.25 22.4688V46.0421C16.25 47.5371 16.25 48.7504 18.9583 48.7504H24.375C27.0833 48.7504 27.0833 47.5371 27.0833 46.0421V27.7283C22.9215 27.4665 19.0299 25.5771 16.25 22.4688Z"
                      fill="#AE4A4A"
                    />

                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.3279 16.7939C18.03 18.3204 19.0485 19.6802 20.3158 20.7833C21.5832 21.8863 23.0705 22.7075 24.6792 23.1922C26.2879 23.677 27.9813 23.8143 29.6471 23.5951C31.3129 23.3759 32.9131 22.8052 34.3417 21.9208L41.4185 28.9977L45.2481 25.1681L38.1713 18.0912C39.2498 16.3496 39.8584 14.3582 39.9376 12.3112C40.0168 10.2642 39.564 8.23169 38.6234 6.41193C37.6827 4.59217 36.2863 3.04736 34.5705 1.92827C32.8547 0.809184 30.8781 0.154046 28.8336 0.0267931C26.789 -0.10046 24.7464 0.304521 22.9051 1.20221C21.0637 2.0999 19.4866 3.45964 18.3275 5.14871C17.1685 6.83779 16.4671 8.7985 16.292 10.8395C16.1168 12.8805 16.4737 14.932 17.3279 16.7939ZM28.099 18.2808C27.7144 18.2808 27.3379 18.2483 26.9696 18.1833C25.6048 17.9402 24.3553 17.2618 23.4081 16.2496C22.3959 15.1707 21.7866 13.7759 21.6827 12.3002C21.5788 10.8245 21.9868 9.3581 22.8378 8.14807C23.6889 6.93804 24.931 6.05834 26.355 5.65721C27.7789 5.25607 29.2976 5.35802 30.6551 5.94587C32.0126 6.53372 33.1261 7.57154 33.8078 8.88446C34.4895 10.1974 34.6978 11.7052 34.3976 13.1537C34.0974 14.6023 33.3071 15.9031 32.1598 16.837C31.0125 17.771 29.5783 18.2808 28.099 18.2808Z"
                      fill="#AE4A4A"
                    />

                    <path
                      d="M0 2.70833C0 1.21333 0 0 2.70833 0H8.125C10.8333 0 10.8333 1.21333 10.8333 2.70833V46.0417C10.8333 47.5367 10.8333 48.75 8.125 48.75H2.70833C0 48.75 0 47.5367 0 46.0417V2.70833ZM35.2083 32.5C32.5 32.5 32.5 33.7133 32.5 35.2083V46.0417C32.5 47.5367 32.5 48.75 35.2083 48.75H40.625C42.12 48.75 43.3333 48.75 43.3333 46.0417V35.2083C43.3333 33.7133 42.12 32.5 40.625 32.5H35.2083Z"
                      fill="#AE4A4A"
                    />
                  </svg>
                </div>

                <h3
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#3B413B]
                    text-[12px]
                    font-bold
                    leading-[14px]
                    text-center
                  "
                >
                  Analisa
                </h3>

                <p
                  className="
                    mt-1
                    w-[140px]
                    font-['Nunito']
                    text-[#666666]
                    text-[9px]
                    leading-[14px]
                    text-center
                  "
                >
                  Analisa teknis dan penentuan solusi terbaik.
                </p>
              </div>

              {/* ITEM 3 - PELAKSANAAN */}
              <div className="flex flex-col items-center text-center w-[150px]">
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.24237 0.489561C5.80769 -0.075751 6.68706 -0.159501 7.35706 0.280186L19.8044 8.57144C20.7361 9.18909 21.291 10.236 21.291 11.3561V16.5486L30.7966 26.0542C34.2827 24.4839 38.533 25.1225 41.391 27.991L54.5921 41.1921C56.5497 43.1497 56.5497 46.3322 54.5921 48.3003L48.3003 54.5921C46.3427 56.5497 43.1602 56.5497 41.1921 54.5921L27.991 41.391C25.1225 38.5225 24.4839 34.2827 26.0542 30.7966L16.5486 21.291H11.3561C10.236 21.291 9.18909 20.7361 8.57144 19.8044L0.280186 7.35706C-0.159501 6.69753 -0.075751 5.80769 0.489561 5.24237L5.24237 0.489561ZM20.4221 32.2622C19.7625 36.1252 20.6628 40.208 23.1649 43.4847L13.23 53.43C10.2883 56.3717 5.51456 56.3717 2.57284 53.43C-0.368876 50.4883 -0.368876 45.7146 2.57284 42.7728L16.7475 28.5877L20.4325 32.2622H20.4221ZM38.041 1.19097C40.1452 1.19097 42.1657 1.57831 44.0186 2.29019C45.0655 2.688 45.2539 4.01753 44.4688 4.81315L38.533 10.7489C38.2189 11.063 38.041 11.4922 38.041 11.9319V16.266C38.041 17.1872 38.7947 17.941 39.716 17.941H44.05C44.4897 17.941 44.9189 17.763 45.233 17.4489L51.1688 11.5132C51.9644 10.728 53.2939 10.9164 53.6917 11.9633C54.4036 13.8163 54.791 15.8367 54.791 17.941C54.791 22.4635 52.9903 26.5567 50.08 29.5717L44.9399 24.4316C41.4747 20.9769 36.7219 19.6474 32.2622 20.4116L26.316 14.4653V11.3561L26.295 10.8327C26.2113 9.53456 25.8344 8.28878 25.1958 7.17909C28.2736 3.51503 32.8799 1.19097 38.041 1.1805V1.19097Z"
                      fill="#AE4A4A"
                    />
                  </svg>
                </div>

                <h3
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#3B413B]
                    text-[12px]
                    font-bold
                    leading-[14px]
                    text-center
                  "
                >
                  Pelaksanaan
                </h3>

                <p
                  className="
                    mt-1
                    w-[140px]
                    font-['Nunito']
                    text-[#666666]
                    text-[9px]
                    leading-[14px]
                    text-center
                  "
                >
                  Proses pengerjaan oleh Tim Profesional.
                </p>
              </div>

              {/* ITEM 4 - QUALITY KONTROL */}
              <div className="flex flex-col items-center text-center w-[150px]">
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="38"
                    height="50"
                    viewBox="0 0 49 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5 2.03125C32.5 1.49253 32.286 0.975873 31.9051 0.594939C31.5241 0.214006 31.0075 0 30.4688 0L18.2812 0C17.7425 0 17.2259 0.214006 16.8449 0.594939C16.464 0.975873 16.25 1.49253 16.25 2.03125C16.25 2.56997 16.036 3.08663 15.6551 3.46756C15.2741 3.84849 14.7575 4.0625 14.2188 4.0625C13.68 4.0625 13.1634 4.27651 12.7824 4.65744C12.4015 5.03837 12.1875 5.55503 12.1875 6.09375V8.125C12.1875 8.66372 12.4015 9.18038 12.7824 9.56131C13.1634 9.94224 13.68 10.1562 14.2188 10.1562H34.5312C35.07 10.1562 35.5866 9.94224 35.9676 9.56131C36.3485 9.18038 36.5625 8.66372 36.5625 8.125V6.09375C36.5625 5.55503 36.3485 5.03837 35.9676 4.65744C35.5866 4.27651 35.07 4.0625 34.5312 4.0625C33.9925 4.0625 33.4759 3.84849 33.0949 3.46756C32.714 3.08663 32.5 2.56997 32.5 2.03125Z"
                      fill="#AE4A4A"
                    />

                    <path
                      d="M8.47031 4.0625H6.09375C4.47759 4.0625 2.92762 4.70452 1.78482 5.84732C0.642018 6.99012 0 8.54009 0 10.1562V58.9062C0 60.5224 0.642018 62.0724 1.78482 63.2152C2.92762 64.358 4.47759 65 6.09375 65H42.6562C44.2724 65 45.8224 64.358 46.9652 63.2152C48.108 62.0724 48.75 60.5224 48.75 58.9062V10.1562C48.75 8.54009 48.108 6.99012 46.9652 5.84732C45.8224 4.70452 44.2724 4.0625 42.6562 4.0625H40.2797C40.5072 4.70167 40.6223 5.37875 40.625 6.09375V8.125C40.625 9.74116 39.983 11.2911 38.8402 12.4339C37.6974 13.5767 36.1474 14.2187 34.5312 14.2188H14.2188C12.6026 14.2187 11.0526 13.5767 9.90982 12.4339C8.76702 11.2911 8.125 9.74116 8.125 8.125V6.09375C8.12771 5.37875 8.24281 4.70167 8.47031 4.0625ZM35.9694 31.9069L23.7819 44.0944C23.5932 44.2835 23.369 44.4336 23.1223 44.536C22.8755 44.6384 22.6109 44.6911 22.3438 44.6911C22.0766 44.6911 21.812 44.6384 21.5652 44.536C21.3185 44.4336 21.0943 44.2835 20.9056 44.0944L14.8119 38.0006C14.623 37.8118 14.4732 37.5876 14.371 37.3408C14.2688 37.0941 14.2162 36.8296 14.2162 36.5625C14.2162 36.2954 14.2688 36.0309 14.371 35.7842C14.4732 35.5374 14.623 35.3132 14.8119 35.1244C15.1933 34.743 15.7106 34.5287 16.25 34.5287C16.5171 34.5287 16.7816 34.5813 17.0283 34.6835C17.2751 34.7857 17.4993 34.9355 17.6881 35.1244L22.3438 39.7841L33.0931 29.0306C33.4745 28.6492 33.9918 28.4349 34.5312 28.4349C35.0707 28.4349 35.588 28.6492 35.9694 29.0306C36.3508 29.412 36.5651 29.9293 36.5651 30.4688C36.5651 31.0082 36.3508 31.5255 35.9694 31.9069Z"
                      fill="#AE4A4A"
                    />
                  </svg>
                </div>

                <h3
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#3B413B]
                    text-[12px]
                    font-bold
                    leading-[14px]
                    text-center
                  "
                >
                  Quality Kontrol
                </h3>

                <p
                  className="
                    mt-1
                    w-[140px]
                    font-['Nunito']
                    text-[#666666]
                    text-[9px]
                    leading-[14px]
                    text-center
                  "
                >
                  Pemeriksaan kualitas untuk memastikan hasil terbaik.
                </p>
              </div>

              {/* ITEM 5 - SERAH TERIMA */}
              <div className="flex flex-col items-center text-center w-[150px]">
                <div
                  className="
                    w-[92px]
                    h-[92px]
                    rounded-full
                    bg-white
                    shadow-[0_3px_10px_rgba(0,0,0,0.12)]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg
                    width="46"
                    height="28"
                    viewBox="0 0 65 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.8453 2.15312L23.0141 10.1156C21.3789 11.4359 21.0641 13.8125 22.3031 15.5086C23.6133 17.3164 26.1625 17.6719 27.9195 16.3008L38.0047 8.46016C38.7156 7.91172 39.7313 8.03359 40.2898 8.74453C40.8484 9.45547 40.7164 10.4711 40.0055 11.0297L37.8828 12.675L55.8797 29.25H60.125C62.8164 29.25 65 27.0664 65 24.375V11.375C65 8.68359 62.8164 6.5 60.125 6.5H51.9289L51.5328 6.24609L44.1594 1.52344C42.6055 0.528125 40.7875 0 38.9391 0C36.725 0 34.5719 0.761718 32.8453 2.15312ZM35.1609 14.7875L29.9102 18.8703C26.7109 21.3688 22.0695 20.7188 19.6727 17.4281C17.418 14.3305 17.9867 10.0039 20.9625 7.59688L29.4125 0.761719C28.2344 0.264062 26.9648 0.0101561 25.675 0.0101561C23.7656 -1.55123e-07 21.907 0.56875 20.3125 1.625L13 6.5H4.875C2.18359 6.5 0 8.68359 0 11.375V24.375C0 27.0664 2.18359 29.25 4.875 29.25H15.8641L25.1469 37.7203C27.1375 39.5383 30.2148 39.3961 32.0328 37.4055C32.5914 36.7859 32.9672 36.0648 33.1602 35.3133L34.8867 36.8977C36.8672 38.7156 39.9547 38.5836 41.7727 36.6031C42.2297 36.1055 42.5648 35.5266 42.7781 34.9273C44.7484 36.2477 47.4297 35.9734 49.0852 34.1656C50.9031 32.1852 50.7711 29.0977 48.7906 27.2797L35.1609 14.7875Z"
                      fill="#AE4A4A"
                    />
                  </svg>
                </div>

                <h3
                  className="
                    mt-3
                    font-['Nunito']
                    text-[#3B413B]
                    text-[12px]
                    font-bold
                    leading-[14px]
                    text-center
                  "
                >
                  Serah Terima
                </h3>

                <p
                  className="
                    mt-1
                    w-[140px]
                    font-['Nunito']
                    text-[#666666]
                    text-[9px]
                    leading-[14px]
                    text-center
                  "
                >
                  Penyerahan hasil pekerjaan sesuai Standar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PORTFOLIO MEKANIKAL
      ========================== */}
      <section
        className="
          w-full
          bg-[#DDE6F8]
          py-12
          md:py-14
        "
      >
        <div
          className="
            max-w-[1100px]
            mx-auto
            px-4
          "
        >
          <div
            className="
              w-full
              bg-white
              rounded-[6px]
              px-5
              py-8
              md:px-6
              md:py-9
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
                Portofolio Mekanikal & Engineering
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
                PORTFOLIO GRID
            ========================== */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-3 
                md:gap-4
              "
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    relative
                    w-full
                    aspect-[1.5/1]
                    rounded-[7px]
                    overflow-hidden
                    bg-[#E5E5E5]
                  "
                >
                  {/* GAMBAR PORTFOLIO */}
                  <img
                    src={machin}
                    alt={`Portfolio Mekanikal ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                  {/* LABEL */}
                  <div
                    className="
                      absolute
                      top-2
                      left-2
                      bg-[#E5E5E6]
                      text-[#4B4B4B]
                      text-[10px]
                      font-medium
                      px-2
                      py-1
                      rounded-full
                    "
                  >
                    Machining Torque Tube Seal
                  </div>
                </div>
              ))}
            </div>

            {/* =========================
                PAGINATION
            ========================== */}
            <div className="flex justify-end items-center mt-6">
              <div
                className="
                  flex
                  items-center
                  h-[43px]
                  bg-white
                  border
                  border-[#E5E5E5]
                  rounded-[9px]
                  shadow-[0_2px_3px_rgba(0,0,0,0.15)]
                  overflow-hidden
                "
              >
                {/* Previous */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="
                    w-[40px]
                    h-full
                    flex
                    items-center
                    justify-center
                    text-[#6B7280]
                    text-[24px]
                    font-light
                    border-r
                    border-[#E5E5E5]
                    hover:bg-[#F8F8F8]
                    cursor-pointer
                  "
                >
                  ‹
                </button>

                {/* Page Buttons */}
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className="
                      w-[38px]
                      h-full
                      flex
                      items-center
                      justify-center
                      border-r
                      border-[#E5E5E5]
                      cursor-pointer
                    "
                  >
                    <span
                      className={`
                        flex
                        items-center
                        justify-center
                        w-[26px]
                        h-[28px]
                        rounded-[3px]
                        text-[16px]
                        font-medium
                        transition
                        ${
                          currentPage === page
                            ? "bg-[#CDE6F5] text-[#3B6682] shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
                            : "bg-transparent text-[#666666]"
                        }
                      `}
                    >
                      {page}
                    </span>
                  </button>
                ))}

                {/* Next */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, 4))
                  }
                  className="
                    w-[40px]
                    h-full
                    flex
                    items-center
                    justify-center
                    text-[#6B7280]
                    text-[24px]
                    font-light
                    hover:bg-[#F8F8F8]
                    cursor-pointer
                  "
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MekanikEngineering;