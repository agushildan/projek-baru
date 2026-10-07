import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../i18n";

function Navbar() {
  const [keyword, setKeyword] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [logoHeader, setLogoHeader] = useState("");

  useEffect(() => {
    const fetchLogoHeader = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/pengaturan-lainnya",
        );

        const result = await response.json();

        if (response.ok && result.success) {
          const logo = result.data.find((item) => item.nama === "Logo Header");

          if (logo?.gambar) {
            setLogoHeader(`http://localhost:5000${logo.gambar}`);
          }
        }
      } catch (error) {
        console.error("❌ Gagal mengambil Logo Header:", error);
      }
    };

    fetchLogoHeader();
  }, []);

  const [menuData, setMenuData] = useState([]);
  const [menuLoading, setMenuLoading] = useState(true);

  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const t = (key) => i18n.t(key);

  // ===============================
  // GET MENU DARI DATABASE
  // ===============================
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/pengaturan-menu",
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil data menu");
        }

        setMenuData(data.data || []);
      } catch (error) {
        console.error("❌ Error fetch navbar menu:", error);
      } finally {
        setMenuLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  // ===============================
  // DATA UNTUK SEARCH
  // ===============================
  const menuRoutes = menuData.flatMap((menu) => {
    const data = [];

    if (menu.nama) {
      data.push({
        keywords: [menu.nama.toLowerCase()],
        route: menu.url || "#",
      });
    }

    (menu.subMenus || []).forEach((subMenu) => {
      if (subMenu.nama) {
        data.push({
          keywords: [subMenu.nama.toLowerCase()],
          route: subMenu.url,
        });
      }
    });

    return data;
  });

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

  // ===============================
  // CEK MENU AKTIF
  // ===============================
  const isMenuActive = (menu) => {
    const currentPath = location.pathname;
    const currentHash = location.hash;

    // Cek URL menu utama
    if (menu.url) {
      if (menu.url.startsWith("/#")) {
        const hash = menu.url.substring(1);

        if (currentPath === "/" && currentHash === hash) {
          return true;
        }
      } else if (menu.url !== "/" && currentPath === menu.url) {
        return true;
      }
    }

    // Cek submenu
    return (menu.subMenus || []).some((subMenu) => {
      if (!subMenu.url) return false;

      if (subMenu.url.startsWith("/#")) {
        const hash = subMenu.url.substring(1);

        return currentPath === "/" && currentHash === hash;
      }

      return currentPath === subMenu.url;
    });
  };

  // ===============================
  // NAVIGASI MENU
  // ===============================
  const handleMenuClick = (url) => {
    if (!url) {
      return;
    }

    closeAllMenus();

    // URL external
    if (url.startsWith("http://") || url.startsWith("https://")) {
      window.location.href = url;
      return;
    }

    // URL dengan hash
    if (url.startsWith("/#")) {
      const hash = url.substring(2);

      navigateToHomeSection(hash);
      return;
    }

    // URL internal
    navigate(url);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoHeader || "digilogo2.png"} alt="Logo" />
      </div>

      <button className="hp-btn" onClick={() => setIsMobileMenuOpen(true)}>
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="backdrop" onClick={closeAllMenus}></div>
      )}

      <div className={`nav-menu-wrapper ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img
            src={logoHeader || "digilogo2.png"}
            alt="Logo"
            className="mobile-logo"
          />
          <button className="close-btn" onClick={closeAllMenus}>
            ✕
          </button>
        </div>

        <ul className="menu" ref={menuRef}>
          {!menuLoading &&
            menuData
              .filter((menu) => menu.status === "Aktif")
              .map((menu) => {
                const hasSubMenu = menu.subMenus && menu.subMenus.length > 0;

                const menuAktif = isMenuActive(menu);

                if (hasSubMenu) {
                  return (
                    <li key={menu.id}>
                      <span
                        className={`dropdown-trigger ${
                          activeMenu === String(menu.id) || menuAktif
                            ? "menu-aktif"
                            : ""
                        }`}
                        onClick={() => toggleMenu(String(menu.id))}
                      >
                        {menu.nama}
                      </span>

                      <ul
                        className={`submenu ${
                          activeMenu === String(menu.id) ? "show" : ""
                        }`}
                      >
                        {menu.subMenus
                          .filter((subMenu) => subMenu.url && subMenu.nama)
                          .map((subMenu) => (
                            <li key={subMenu.id}>
                              <a
                                href={subMenu.url}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleMenuClick(subMenu.url);
                                }}
                              >
                                {subMenu.nama}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={menu.id}>
                    {menu.url ? (
                      <a
                        href={menu.url}
                        className={menuAktif ? "menu-aktif" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(menu.url);
                        }}
                      >
                        {menu.nama}
                      </a>
                    ) : (
                      <span>{menu.nama}</span>
                    )}
                  </li>
                );
              })}
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
