import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import i18n from "../i18n";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const t = (key) => i18n.t(key);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  const isTentangAktif = ["/sertifikasi", "/visimisi"].includes(
    location.pathname,
  );
  const isInfoAktif = ["/karir", "/faq", "/blog"].includes(location.pathname);

  const menuRoutes = [
    {
      keywords: [
        "beranda",
        "home",
        "utama",
        "halaman utama",
        "homepage",
        "menu utama",
        "menu",
        "dashbord",
        "tampilan awal",
        "home page",
        "awal",
        "welcome page",
        "main menu",
        "landing page",
        "welcome",
        "start page",
      ],
      route: "/",
    },
    {
      keywords: [
        "produk",
        "product",
        "barang",
        "produk kami",
        "item",
        "equipment",
        "peralatan",
        "sparepart",
        "spare part",
        "componen",
        "daftar barang",
        "produk list",
        "list produk",
        "alat alat",
        "mesin",
        "hardware",
        "perangkat",
        "produk unggulan",
        "produk terbaru",
        "katalog",
      ],
      route: "/#produk",
    },
    {
      keywords: [
        "layanan",
        "service",
        "jasa",
        "services",
        "pelayanan",
        "layanan kami",
        "service kami",
        "jasa kami",
        "support",
        "dukungan",
        "our services",
        "professional service",
        "maintanance",
        "instalation",
      ],
      route: "/layanan",
    },
    {
      keywords: [
        "mitra",
        "partner",
        "kerjasama",
        "mitra kami",
        "kerja sama",
        "partners",
        "kolaborasi",
        "rekan",
        "partnership",
        "our partners",
        "mitra perusahaan",
        "partner perusahaan",
        "rekan perusahaan",
      ],
      route: "/#mitra",
    },
    {
      keywords: [
        "kegiatan",
        "activity",
        "event",
        "acara",
        "events",
        "aktivitas",
        "dokumentasi",
        "agenda",
        "kegiatan perusahaan",
        "event perusahaan",
        "company activty",
        "company event",
        "our activty",
        "our event",
        "event terbaru",
      ],
      route: "/#kegiatan",
    },
    {
      keywords: [
        "sertifikasi",
        "sertifikat",
        "penghargaan",
        "sertifikasi perusahaan",
        "dokumen",
        "certifikasi",
        "penghargaan perusahaan",
        "sertifikasi kami",
        "company certification",
      ],
      route: "/sertifikasi",
    },
    {
      keywords: [
        "visi",
        "misi",
        "visi misi",
        "vision mission",
        "vision",
        "mission",
        "tujuan",
        "tujuan perusahaan",
        "arah perusahaan",
        "company vision",
        "company mision",
        "our vision",
        "our mision",
      ],
      route: "/visimisi",
    },
    {
      keywords: [
        "tentang",
        "about",
        "tentang kami",
        "about us",
        "profil",
        "company profile",
        "company",
        "informasi tentang perusahaan",
        "our company",
        "company history",
        "sejarah perusahaan",
        "identitass perusahaan",
        "tentang bisnis kami",
      ],
      route: "/#tentang",
    },
    {
      keywords: [
        "karir",
        "career",
        "job",
        "jobs",
        "lowongan",
        "lowongan kerja",
        "rekrutmen",
        "recruitment",
        "join us",
        "bekerja",
        "gabung",
        "bergabung dengan kami",
        "work with us",
        "working with us",
        "our careeers",
      ],
      route: "/karir",
    },
    {
      keywords: [
        "faq",
        "help",
        "bantuan",
        "tanya jawab",
        "question",
        "informasi umum",
        "pertanyaan",
        "jawaban",
        "pertanyaan yang sering di tanyakan",
        "pusat bantuan",
        "help center",
        "pusat informasi",
        "bantuan umum",
        "common question",
        "common answer",
      ],
      route: "/faq",
    },
    {
      keywords: [
        "blog",
        "tes",
        "artikel",
        "articles",
        "berita",
        "news",
        "informasi",
        "berita perusahaan",
        "tips",
        "update",
        "company blog",
        "company news",
        "latest news",
        "latest update",
        "informasi teknologi",
        "berita teknologi",
        "kabar terbaru",
        "publikasi",
        "publication",
      ],
      route: "/blog",
    },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const navigateToHomeSection = (sectionId) => {
    closeAllMenus();
    navigate(`/#${sectionId}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const kataKunci = keyword.trim().toLowerCase();
    if (!kataKunci) return;

    const match = menuRoutes.find((item) =>
      item.keywords.some((key) => key && kataKunci.includes(key)),
    );

    if (match) {
      if (match.route.includes("#")) {
        const [path, hash] = match.route.split("#");
        navigate(path + "#" + hash);

        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        navigate(match.route);
      }
    } else {
      alert(`Kata kunci "${keyword}" tidak ditemukan.`);
    }

    setKeyword("");
    closeAllMenus();
  };

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);
    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const timeoutId = setTimeout(scrollToSection, 100);
    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="digilogo2.png" alt="Logo" />
      </div>

      <button className="hp-btn" onClick={() => setIsMobileMenuOpen(true)}>
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="backdrop" onClick={closeAllMenus}></div>
      )}

      <div className={`nav-menu-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src="digilogo2.png" alt="Logo" className="mobile-logo" />
          <button className="close-btn" onClick={closeAllMenus}>
            ✕
          </button>
        </div>

        <ul className="menu" ref={menuRef}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive && !location.hash ? "menu-aktif" : ""
              }
              onClick={() => {
                closeAllMenus();
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {t("beranda")}
            </NavLink>
          </li>

          <li>
            <span
              className={`dropdown-trigger ${activeMenu === "tentang" || isTentangAktif ? "menu-aktif" : ""}`}
              onClick={() => toggleMenu("tentang")}
            >
              {t("tentang_digi")}
            </span>
            <ul className={`submenu ${activeMenu === "tentang" ? "show" : ""}`}>
              <li>
                <NavLink to="/sertifikasi" onClick={closeAllMenus}>
                  {t("sertifikasi")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/visimisi" onClick={closeAllMenus}>
                  {t("visi_misi")}
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/produklain"
              className={() =>
                location.pathname === "/produklain" ||
                location.pathname.startsWith("/produk/")
                  ? "menu-aktif"
                  : ""
              }
              onClick={closeAllMenus}
            >
              {t("produk")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/layanan"
              className={({ isActive }) => (isActive ? "menu-aktif" : "")}
              onClick={closeAllMenus}
            >
              {t("layanan")}
            </NavLink>
          </li>

          <li>
            <span
              className={`dropdown-trigger ${
                location.hash === "#mitra" ? "menu-aktif" : ""
              }`}
              onClick={() => navigateToHomeSection("mitra")}
            >
              {t("mitra")}
            </span>
          </li>

          <li>
            <NavLink
              to="/kegiatanDetail"
              className={({ isActive }) => (isActive ? "menu-aktif" : "")}
              onClick={closeAllMenus}
            >
              {t("kegiatan")}
            </NavLink>
          </li>

          <li>
            <span
              className={`dropdown-trigger ${activeMenu === "info" || isInfoAktif ? "menu-aktif" : ""}`}
              onClick={() => toggleMenu("info")}
            >
              {t("info")}
            </span>
            <ul className={`submenu ${activeMenu === "info" ? "show" : ""}`}>
              <li>
                <NavLink to="/karir" onClick={closeAllMenus}>
                  {t("karir")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={closeAllMenus}>
                  {t("faq")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={closeAllMenus}>
                  {t("blog")}
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        <div className="nav-right-container">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder={t("cari_placeholder")}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <button type="submit">
              <svg
                width="15"
                height="15"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.95833 11.9167C4.29306 11.9167 2.88383 11.3398 1.73067 10.186C0.5775 9.03222 0.000611596 7.623 4.85009e-07 5.95833C-0.000610626 4.29367 0.576278 2.88444 1.73067 1.73067C2.88506 0.576889 4.29428 0 5.95833 0C7.62239 0 9.03192 0.576889 10.1869 1.73067C11.3419 2.88444 11.9185 4.29367 11.9167 5.95833C11.9167 6.63056 11.8097 7.26458 11.5958 7.86042C11.3819 8.45625 11.0917 8.98333 10.725 9.44167L15.8583 14.575C16.0264 14.7431 16.1104 14.9569 16.1104 15.2167C16.1104 15.4764 16.0264 15.6903 15.8583 15.8583C15.6903 16.0264 15.4764 16.1104 15.2167 16.1104C14.9569 16.1104 14.7431 16.0264 14.575 15.8583L9.44167 10.725C8.98333 11.0917 8.45625 11.3819 7.86042 11.5958C7.26458 11.8097 6.63056 11.9167 5.95833 11.9167ZM5.95833 10.0833C7.10417 10.0833 8.07828 9.68244 8.88067 8.88067C9.68306 8.07889 10.0839 7.10478 10.0833 5.95833C10.0827 4.81189 9.68183 3.83808 8.88067 3.03692C8.0795 2.23575 7.10539 1.83456 5.95833 1.83333C4.81128 1.83211 3.83747 2.23331 3.03692 3.03692C2.23636 3.84053 1.83517 4.81433 1.83333 5.95833C1.8315 7.10233 2.23269 8.07644 3.03692 8.88067C3.84114 9.68489 4.81494 10.0858 5.95833 10.0833Z"
                  fill="#131838"
                />
              </svg>
            </button>
          </form>
          <div
            className="language-switcher"
            style={{
              width: "85px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FFFFFF",
              border: "1.5px solid #111827",
              borderRadius: "9999px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* INDONESIA */}
            <button
              type="button"
              onClick={() => changeLanguage("id")}
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                borderRight: "1px solid #111827",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="circle-id">
                    <circle cx="16" cy="16" r="16" />
                  </clipPath>
                </defs>

                <g clipPath="url(#circle-id)">
                  <rect width="32" height="16" fill="#FF0000" />
                  <rect y="16" width="32" height="16" fill="#FFFFFF" />
                </g>
              </svg>
            </button>

            {/* ENGLISH */}
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              style={{
                width: "50%",
                height: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="us-circle">
                    <circle cx="16" cy="16" r="16" />
                  </clipPath>
                </defs>

                <g clipPath="url(#us-circle)">
                  <rect width="32" height="32" fill="#B22234" />
                  <rect y="4.92" width="32" height="2.46" fill="#FFFFFF" />
                  <rect y="9.85" width="32" height="2.46" fill="#FFFFFF" />
                  <rect y="14.77" width="32" height="2.46" fill="#FFFFFF" />
                  <rect y="19.69" width="32" height="2.46" fill="#FFFFFF" />
                  <rect y="24.62" width="32" height="2.46" fill="#FFFFFF" />
                  <rect y="29.54" width="32" height="2.46" fill="#FFFFFF" />

                  <rect width="14" height="17" fill="#3C3B6E" />

                  <g fill="#FFFFFF">
                    <circle cx="2" cy="2" r=".65" />
                    <circle cx="5.5" cy="2" r=".65" />
                    <circle cx="9" cy="2" r=".65" />
                    <circle cx="12.5" cy="2" r=".65" />
                    <circle cx="3.75" cy="4.5" r=".65" />
                    <circle cx="7.25" cy="4.5" r=".65" />
                    <circle cx="10.75" cy="4.5" r=".65" />
                    <circle cx="2" cy="7" r=".65" />
                    <circle cx="5.5" cy="7" r=".65" />
                    <circle cx="9" cy="7" r=".65" />
                    <circle cx="12.5" cy="7" r=".65" />
                    <circle cx="3.75" cy="9.5" r=".65" />
                    <circle cx="7.25" cy="9.5" r=".65" />
                    <circle cx="10.75" cy="9.5" r=".65" />
                    <circle cx="2" cy="12" r=".65" />
                    <circle cx="5.5" cy="12" r=".65" />
                    <circle cx="9" cy="12" r=".65" />
                    <circle cx="12.5" cy="12" r=".65" />
                    <circle cx="3.75" cy="14.5" r=".65" />
                    <circle cx="7.25" cy="14.5" r=".65" />
                    <circle cx="10.75" cy="14.5" r=".65" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
