import { useState, useEffect } from "react";
import i18n from "../i18n";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import gmailIcon from "../assets/icons/gmail.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import youtubeIcon from "../assets/icons/youtube.svg";
import facebookIcon from "../assets/icons/facebook.svg";

const Footer = () => {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");
  const t = (key) => i18n.t(key);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const [footerColumns, setFooterColumns] = useState([]);
  const [sosialMedia, setSosialMedia] = useState([]);
  const [footerSettings, setFooterSettings] = useState([]);

  useEffect(() => {
    const fetchSosialMedia = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/sosial-media");

        const result = await response.json();

        if (response.ok && result.success) {
          setSosialMedia(result.data);
        }
      } catch (error) {
        console.error("❌ Error fetch sosial media:", error);
      }
    };

    fetchSosialMedia();
  }, []);

  useEffect(() => {
    const fetchFooterSettings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/footer");

        const result = await response.json();

        if (response.ok && result.success) {
          setFooterSettings(result.data);
        }
      } catch (error) {
        console.error("❌ Error fetch footer settings:", error);
      }
    };

    fetchFooterSettings();
  }, []);

  const fetchFooterColumns = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/footer-column");

      const result = await response.json();

      if (response.ok && result.success) {
        setFooterColumns(result.data);
      }
    } catch (error) {
      console.error("❌ Error fetch footer columns:", error);
    }
  };

  useEffect(() => {
    fetchFooterColumns();
  }, []);

  const [kontak, setKontak] = useState([]);

  useEffect(() => {
    const fetchKontak = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/kontak");
        const result = await response.json();

        if (result.success) {
          setKontak(result.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data kontak:", error);
      }
    };

    fetchKontak();
  }, []);

  const column1 = footerColumns.find((item) => item.posisi === 1);
  const column2 = footerColumns.find((item) => item.posisi === 2);
  const column3 = footerColumns.find((item) => item.posisi === 3);

  const footerCopyright = footerSettings.find(
    (item) => item.nama === "Footer Copyright",
  );

  const footerLogo = footerSettings.find((item) => item.nama === "Logo Footer");

  const getFooterImageUrl = (gambar) => {
    if (!gambar) return "";

    if (gambar.startsWith("http")) {
      return gambar;
    }

    return `http://localhost:5000${gambar.startsWith("/") ? "" : "/"}${gambar}`;
  };

  const getSocialIcon = (icon) => {
    if (icon === "whatsapp") {
      return whatsappIcon;
    }

    if (icon === "instagram") {
      return instagramIcon;
    }

    if (icon === "gmail") {
      return gmailIcon;
    }

    if (icon === "linkedin") {
      return linkedinIcon;
    }

    if (icon === "youtube") {
      return youtubeIcon;
    }

    if (icon === "facebook") {
      return facebookIcon;
    }

    return null;
  };

  return (
    <footer className="bg-[#1e324c] text-white px-5 py-[30px] md:px-[50px] [font-family:'Nunito_Sans',sans-serif]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between flex-wrap gap-[30px] md:gap-10">
        {/* =========================
            KOLOM 1
        ========================== */}
        <div className="flex-1 md:min-w-[250px] flex flex-col items-start text-left">
          {/* JUDUL - BELANOSIMA */}
          <h2 className="font-['Belanosima'] text-[30px] font-semibold mt-4 mb-2.5 text-left leading-none">
            {footerCopyright?.isi || ""}
          </h2>

          {footerLogo?.gambar && (
            <img
              src={getFooterImageUrl(footerLogo.gambar)}
              alt="digi logo"
              className="w-[150px] mb-2.5 block ml-0"
            />
          )}

          <div className="flex gap-[15px] mb-[25px] ml-0">
            {sosialMedia.map((item) => {
              const icon = getSocialIcon(item.icon);

              if (!icon) return null;

              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#4F8DC0] w-10 h-10 rounded-lg flex items-center justify-center no-underline transition-opacity duration-300 hover:opacity-80"
                >
                  <img
                    src={icon}
                    alt={item.nama}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              );
            })}
          </div>

          {/* COPYRIGHT - NUNITO SANS */}
          <p className="font-['Nunito Sans'] text-sm text-[#e0e0e0] m-0 text-left">
            Copyright © 2026 Digi Tekno Indonesia
          </p>
        </div>

        {/* =========================
    KOLOM 2 - FOOTER COLUMN 1
========================== */}

        {column1 && (
          <div className="flex-1 md:min-w-[250px] flex flex-col items-start">
            <h3 className="font-['Belanosima'] text-center w-full mt-0 mb-[25px] text-[20px] font-semibold">
              {column1.nama}
            </h3>

            <ul className="font-['Nunito Sans'] list-disc pl-[18px] md:pl-5 m-0 text-center md:text-left w-full">
              {column1.items?.map((item) => (
                <li
                  key={item.id}
                  className="mb-3 text-[0.95rem] leading-[1.5] text-left"
                >
                  {item.isi}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* =========================
    KOLOM 3 - FOOTER COLUMN 3
========================== */}

        {column3 && (
          <div className="flex-1 md:min-w-[250px] flex flex-col items-start">
            <h3 className="font-['Belanosima'] text-center w-full mt-0 mb-[25px] text-[20px] font-semibold">
              {column3.nama}
            </h3>

            <ul className="font-['Nunito Sans'] list-disc pl-[18px] md:pl-5 m-0 text-center md:text-left w-full">
              {column3.items?.map((item) => (
                <li
                  key={item.id}
                  className="mb-3 text-[0.95rem] leading-[1.5] text-left"
                >
                  {item.isi}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* =========================
            KOLOM 3 - KONTAK
        ========================== */}
        <div className="flex-1 md:min-w-[250px] flex flex-col items-start">
          {/* HEADING - BELANOSIMA */}
          <h3 className="font-['Belanosima'] text-center w-full mt-0 mb-[25px] text-[20px] font-semibold">
            {t("kontak_kami")}
          </h3>

          {/* ISI - NUNITO SANS */}
          <ul className="font-['Nunito Sans'] list-none p-0 m-0 flex flex-col gap-5 w-full">
            {/* ALAMAT */}
            <li className="flex items-start gap-[15px]">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Summarecon+Magna+Commercial+Blok+MD-18+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-[15px] text-white no-underline hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-white shrink-0 mt-0.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>

                <p className="font-['Nunito Sans'] m-0 text-[0.95rem] leading-[1.6] text-left">
                  {kontak.find((item) => item.namaPengaturan === "Alamat")
                    ?.isiPengaturan || "-"}
                </p>
              </a>
            </li>

            {/* EMAIL */}
            <li className="flex items-start gap-[15px]">
              <a
                href={`mailto:${kontak.find((item) => item.namaPengaturan === "Email")?.isiPengaturan || ""}`}
                className="flex items-start gap-[15px] text-white no-underline hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mt-0.5"
                >
                  <path
                    d="M35.9012 3.88607L35.7569 24.6086C35.7475 25.9555 34.6494 27.0385 33.3025 27.0291L27.6127 26.9895L27.7089 13.1754L17.9068 20.4227L8.20654 13.0396L8.11032 26.8551L2.42051 26.8155C2.1003 26.8133 1.78366 26.748 1.4887 26.6233C1.19373 26.4987 0.926219 26.3171 0.701441 26.0891C0.476664 25.861 0.299028 25.5909 0.178684 25.2941C0.0583407 24.9974 -0.00235212 24.6798 7.38044e-05 24.3596L0.144401 3.63703C0.165393 0.62303 3.61748 -1.07381 6.01549 0.751681L8.28011 2.47641L17.9804 9.8566L27.7825 2.60926L30.0709 0.91922C32.4926 -0.871211 35.9222 0.872066 35.9012 3.88607Z"
                    fill="white"
                  />
                </svg>

                <p className="font-['Nunito Sans'] m-0 text-[0.95rem] leading-[1.6] text-left">
                  {kontak.find((item) => item.namaPengaturan === "Email")
                    ?.isiPengaturan || "-"}
                </p>
              </a>
            </li>

            {/* TELEPON */}
            <li className="flex items-start gap-[15px]">
              <a
                href={`tel:${kontak.find((item) => item.namaPengaturan === "No HP")?.isiPengaturan || ""}`}
                className="flex items-start gap-[15px] text-white no-underline hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mt-0.5"
                >
                  <path
                    d="M24.5343 30.6244C23.1999 30.6244 21.3255 30.1417 18.5187 28.5736C15.1055 26.6595 12.4655 24.8924 9.07073 21.5066C5.79768 18.2356 4.20491 16.1178 1.97571 12.0614C-0.54265 7.4813 -0.113354 5.08052 0.366529 4.05444C0.938014 2.82808 1.78157 2.09458 2.8719 1.36655C3.4912 0.960796 4.14658 0.612971 4.82971 0.327491C4.89807 0.298096 4.96165 0.270069 5.01839 0.244776C5.35676 0.0923345 5.86946 -0.138037 6.51887 0.108057C6.95227 0.270752 7.33919 0.603663 7.94485 1.20181C9.18694 2.42681 10.8843 5.15503 11.5105 6.49487C11.9309 7.3979 12.2091 7.99399 12.2098 8.66255C12.2098 9.44526 11.816 10.0489 11.3382 10.7003C11.2487 10.8227 11.1598 10.9396 11.0737 11.0531C10.5534 11.7367 10.4393 11.9342 10.5145 12.287C10.6669 12.9959 11.8037 15.1061 13.672 16.9703C15.5403 18.8344 17.5897 19.8995 18.3013 20.0512C18.6691 20.1298 18.8707 20.0109 19.5762 19.4722C19.6774 19.395 19.7813 19.315 19.89 19.235C20.6187 18.6929 21.1943 18.3094 21.9585 18.3094H21.9626C22.6278 18.3094 23.1972 18.5979 24.1406 19.0737C25.371 19.6944 28.1813 21.3699 29.4138 22.6133C30.0133 23.2176 30.3476 23.6032 30.511 24.0359C30.7571 24.6874 30.5253 25.198 30.3742 25.5398C30.349 25.5965 30.3209 25.6587 30.2915 25.7278C30.0038 26.4097 29.6539 27.0637 29.2463 27.6815C28.5197 28.7684 27.7834 29.6099 26.5543 30.1821C25.9232 30.4807 25.2325 30.6319 24.5343 30.6244Z"
                    fill="white"
                  />
                </svg>

                <p className="font-['Nunito Sans'] m-0 text-[0.95rem] leading-[1.6] text-left">
                  {kontak.find((item) => item.namaPengaturan === "No HP")
                    ?.isiPengaturan || "-"}
                </p>
              </a>
            </li>

            {/* INSTAGRAM */}
            <li className="flex items-start gap-[15px]">
              <a
                href={`https://www.instagram.com/${kontak.find((item) => item.namaPengaturan === "Instagram")?.isiPengaturan || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-[15px] text-white no-underline hover:opacity-80 transition-opacity duration-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3809 0C20.2559 0.005 21.2076 0.015 22.0293 0.0383333L22.3526 0.05C22.7259 0.0633333 23.0943 0.0799999 23.5393 0.0999999C25.3126 0.183333 26.5226 0.463333 27.5843 0.875C28.6843 1.29833 29.6109 1.87167 30.5376 2.79667C31.3854 3.62955 32.0413 4.63745 32.4593 5.75C32.8709 6.81167 33.1509 8.02167 33.2343 9.79667C33.2543 10.24 33.2709 10.6083 33.2843 10.9833L33.2943 11.3067C33.3193 12.1267 33.3293 13.0783 33.3326 14.9533L33.3343 16.1967V18.38C33.3383 19.5957 33.3256 20.8113 33.2959 22.0267L33.2859 22.35C33.2726 22.725 33.2559 23.0933 33.2359 23.5367C33.1526 25.3117 32.8693 26.52 32.4593 27.5833C32.0413 28.6959 31.3854 29.7038 30.5376 30.5367C29.7047 31.3845 28.6968 32.0403 27.5843 32.4583C26.5226 32.87 25.3126 33.15 23.5393 33.2333L22.3526 33.2833L22.0293 33.2933C21.2076 33.3167 20.2559 33.3283 18.3809 33.3317L17.1376 33.3333H14.9559C13.7397 33.3376 12.5235 33.3248 11.3076 33.295L10.9843 33.285C10.5886 33.27 10.1931 33.2528 9.79761 33.2333C8.02428 33.15 6.81428 32.87 5.75095 32.4583C4.639 32.0401 3.63169 31.3843 2.79928 30.5367C1.95086 29.7039 1.29446 28.696 0.875948 27.5833C0.464282 26.5217 0.184281 25.3117 0.100948 23.5367L0.0509479 22.35L0.0426148 22.0267C0.0118916 20.8114 -0.00199882 19.5957 0.000947995 18.38V14.9533C-0.00366516 13.7377 0.00855836 12.522 0.0376148 11.3067L0.0492814 10.9833C0.0626147 10.6083 0.0792813 10.24 0.0992813 9.79667C0.182615 8.02167 0.462615 6.81333 0.874281 5.75C1.29377 4.637 1.95132 3.62906 2.80095 2.79667C3.63287 1.94925 4.63959 1.29346 5.75095 0.875C6.81428 0.463333 8.02261 0.183333 9.79761 0.0999999C10.2409 0.0799999 10.6109 0.0633333 10.9843 0.05L11.3076 0.0399999C12.5229 0.0103878 13.7386 -0.00239116 14.9543 0.00166655L18.3809 0ZM16.6676 8.33333C14.4575 8.33333 12.3379 9.21131 10.7751 10.7741C9.21225 12.3369 8.33428 14.4565 8.33428 16.6667C8.33428 18.8768 9.21225 20.9964 10.7751 22.5592C12.3379 24.122 14.4575 25 16.6676 25C18.8778 25 20.9974 24.122 22.5602 22.5592C24.123 20.9964 25.0009 18.8768 25.0009 16.6667C25.0009 14.4565 24.123 12.3369 22.5602 10.7741C20.9974 9.21131 18.8778 8.33333 16.6676 8.33333ZM16.6676 11.6667C17.3242 11.6666 17.9744 11.7958 18.5811 12.047C19.1878 12.2981 19.739 12.6663 20.2034 13.1305C20.6678 13.5948 21.0362 14.1459 21.2875 14.7525C21.5389 15.3591 21.6683 16.0092 21.6684 16.6658C21.6686 17.3224 21.5393 17.9726 21.2882 18.5793C21.037 19.186 20.6688 19.7372 20.2046 20.2016C19.7404 20.666 19.1892 21.0344 18.5826 21.2857C17.976 21.5371 17.3259 21.6666 16.6693 21.6667C15.3432 21.6667 14.0714 21.1399 13.1337 20.2022C12.1961 19.2645 11.6693 17.9927 11.6693 16.6667C11.6693 15.3406 12.1961 14.0688 13.1337 13.1311C14.0714 12.1934 15.3432 11.6667 16.6693 11.6667M25.4193 5.83333C24.8667 5.83333 24.3368 6.05283 23.9461 6.44353C23.5554 6.83423 23.3359 7.36413 23.3359 7.91667C23.3359 8.4692 23.5554 8.9991 23.9461 9.38981C24.3368 9.78051 24.8667 10 25.4193 10C25.9718 10 26.5017 9.78051 26.8924 9.38981C27.2831 8.9991 27.5026 8.4692 27.5026 7.91667C27.5026 7.36413 27.2831 6.83423 26.8924 6.44353C26.5017 6.05283 25.9718 5.83333 25.4193 5.83333Z"
                    fill="white"
                  />
                </svg>

                <p className="font-['Nunito Sans'] m-0 text-[0.95rem] leading-[1.6] text-left">
                  {kontak.find((item) => item.namaPengaturan === "Instagram")
                    ?.isiPengaturan || "-"}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
