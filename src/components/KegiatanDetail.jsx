import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import i18n from "../i18n";

// =========================
// ASSET FOTO KEGIATAN
// =========================
import kegiatan1 from "../assets/kegiatan/kegiatan1.jpg";
import kegiatan2 from "../assets/kegiatan/kegiatan2.jpg";
import kegiatan3 from "../assets/kegiatan/kegiatan3.jpg";
import kegiatan4 from "../assets/kegiatan/kegiatan4.jpg";
import kegiatan5 from "../assets/kegiatan/kegiatan5.jpg";
import kegiatan6 from "../assets/kegiatan/kegiatan6.jpg";

// =========================
// ASSET VIDEO
// =========================
import video1 from "../assets/Kegiatan/vidio1.mp4";
import video2 from "../assets/Kegiatan/vidio2.mp4";

function KegiatanDetail() {
  const [, setCurrentLang] = useState(i18n.language || "id");

  // =========================
  // SLIDER
  // =========================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Timer 30 detik
  const timerRef = useRef(null);
  const timerStartRef = useRef(null);
  const remainingTimeRef = useRef(5 * 1000);

  // Video
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const [video1Ended, setVideo1Ended] = useState(false);
  const [video2Ended, setVideo2Ended] = useState(false);

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  // =========================
  // LANGUAGE CHANGE
  // =========================
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // =========================
  // DATA KEGIATAN
  // =========================
  const kegiatanList = [
    {
      image: kegiatan1,
      date: "16 - 05 - 2026",
      title: "Buka Bersama PT. Digi Tekno Indonesia",
    },
    {
      image: kegiatan2,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan3,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan4,
      date: "16 - 05 - 2026",
      title: "Rafting Citumang",
    },
    {
      image: kegiatan5,
      date: "16 - 05 - 2026",
      title: "Arung Jeram",
    },
    {
      image: kegiatan6,
      date: "16 - 05 - 2026",
      title: "Gathering PT. Digi Tekno Indonesia",
    },
  ];

  // =========================
  // TIMER SLIDE 1
  // 10 DETIK
  // =========================
  useEffect(() => {
    // Kalau sedang di slide video, tidak menggunakan timer 10 detik
    if (currentSlide !== 0) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      return;
    }

    // Kalau cursor sedang berada di slider,
    // timer jangan berjalan
    if (isHovered) {
      return;
    }

    timerStartRef.current = Date.now();

    timerRef.current = setTimeout(() => {
      setCurrentSlide(1);

      // Reset timer
      remainingTimeRef.current = 5 * 1000;
    }, remainingTimeRef.current);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);

        // Hitung sisa waktu sebelum di-pause
        if (timerStartRef.current) {
          const elapsed = Date.now() - timerStartRef.current;

          remainingTimeRef.current = Math.max(
            remainingTimeRef.current - elapsed,
            0,
          );
        }

        timerRef.current = null;
      }
    };
  }, [currentSlide, isHovered]);

  // =========================
  // VIDEO SLIDE
  // =========================
  useEffect(() => {
    if (currentSlide !== 1) return;

    setVideo1Ended(false);
    setVideo2Ended(false);

    if (video1Ref.current) {
      video1Ref.current.currentTime = 0;
      video1Ref.current.play().catch(() => {});
    }

    if (video2Ref.current) {
      video2Ref.current.currentTime = 0;
      video2Ref.current.play().catch(() => {});
    }

    const videoTimer = setTimeout(
      () => {
        setCurrentSlide(0);

        if (video1Ref.current) {
          video1Ref.current.pause();
        }

        if (video2Ref.current) {
          video2Ref.current.pause();
        }

        remainingTimeRef.current = 5 * 1000;
      },
      10 * 60 * 1000,
    );

    return () => {
      clearTimeout(videoTimer);
    };
  }, [currentSlide]);

  // =========================
  // SALAH SATU VIDEO SELESAI
  // =========================
  useEffect(() => {
    if (currentSlide !== 1) {
      return;
    }

    // Kalau salah satu video selesai,
    // video yang satunya langsung dihentikan
    // dan slider kembali ke foto.
    if (video1Ended || video2Ended) {
      if (video1Ref.current) {
        video1Ref.current.pause();
      }

      if (video2Ref.current) {
        video2Ref.current.pause();
      }

      setCurrentSlide(0);

      // Foto berikutnya mulai dari 10 detik
      remainingTimeRef.current = 5 * 1000;
    }
  }, [video1Ended, video2Ended, currentSlide]);

  // =========================
  // HOVER CARD FOTO
  // =========================
  const handlePhotoMouseEnter = () => {
    setIsHovered(true);

    // Pause timer foto
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handlePhotoMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HEADER KEGIATAN
      ========================== */}
      <section
        className="
          w-full
          px-6
          pt-[45px]
          pb-10
          md:px-8
          md:pt-[55px]
          md:pb-12
        "
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #F4F5FA 25%, #EDF0F9 50%, #E5EAF8 75%, #DEE4F7 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="
              font-['Cormorant_Garamond']
              text-[#222222]
              text-3xl
              md:text-4xl
              font-semibold
              tracking-wide
            "
          >
            {t("judul_kegiatan", "Kegiatan")}
          </h1>

          <p
            className="
              mt-3
              max-w-5xl
              font-['Nunito']
              text-[#666666]
              text-[11px]
              sm:text-xs
              md:text-[13px]
              leading-relaxed
            "
          >
            {t(
              "deskripsi_kegiatan",
              "PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
            )}
          </p>
        </div>
      </section>

      {/* =========================
          SLIDER KEGIATAN
      ========================== */}
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="max-w-[1000px] mx-auto overflow-x-clip overflow-y-visible">
          {/* =========================
              SLIDER TRACK
          ========================== */}
          <div
            className="
              flex
              w-full
              transition-transform
              duration-[900ms]
              ease-in-out
            "
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* ==================================================
                SLIDE 1
                6 CARD KEGIATAN
            ================================================== */}
            <div className="w-full shrink-0">
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-3
                  gap-x-5
                  gap-y-10
                "
              >
                {kegiatanList.map((kegiatan, index) => (
                  <div
                    key={index}
                    onMouseEnter={handlePhotoMouseEnter}
                    onMouseLeave={handlePhotoMouseLeave}
                    className="
                      relative
                      bg-white
                      border
                      border-[#E4E4E4]
                      rounded-[6px]
                      overflow-visible
                      shadow-[0_1px_4px_rgba(0,0,0,0.08)]
                      flex
                      flex-col
                      w-full
                      h-[430px]
                    "
                  >
                    {/* =========================
                        STRIP ATAS
                    ========================== */}
                    <div
                      className={`
                        absolute
                        -top-[15px]
                        left-1/2
                        -translate-x-1/2
                        w-[160px]
                        h-[25px]
                        rounded-[2px]
                        ${
                          index % 2 === 1
                            ? "bg-[#F5DEDE]/60"
                            : "bg-[#DCE7F8]/60"
                        }
                      `}
                    />

                    {/* =========================
                        GAMBAR
                    ========================== */}
                    <div
                      className="
    mx-5
    mt-5
    h-[390px]
    rounded-[3px]
    overflow-hidden
    bg-[#D9D9D9]
  "
                    >
                      <img
                        src={kegiatan.image}
                        alt={kegiatan.title}
                        draggable="false"
                        className="
                          w-full
                          h-full
                          object-cover
                          block
                        "
                      />
                    </div>

                    {/* =========================
                        INFORMASI
                    ========================== */}
                    <div
                      className="
                        w-full
                        px-3
                        pt-3
                        pb-6
                        text-center
                      "
                    >
                      <p
                        className="
                          font-['Nunito']
                          text-[#999999]
                          text-[15px]
                        "
                      >
                        {kegiatan.date}
                      </p>

                      <h2
                        className="
                          mt-3
                          font-['Nunito']
                          text-[#222222]
                          text-[15px]
                          font-semibold
                          leading-[15px]
                        "
                      >
                        {kegiatan.title}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================================================
    SLIDE 2
    VIDEO
================================================== */}
            <div className="w-full shrink-0">
              <div
                className="
      w-full
      flex
      items-start
      justify-center
      gap-5
      md:gap-6
    "
              >
                {/* =========================
        VIDEO 1
    ========================== */}
                <div
                  className="
    relative
    bg-white
    border
    border-[#E4E4E4]
    rounded-[6px]
    overflow-visible
    shadow-[0_1px_4px_rgba(0,0,0,0.08)]
    flex
    flex-col
    w-full
    h-[540px]
  "
                >
                  {/* STRIP ATAS */}
                  <div
                    className="
          absolute
          -top-[24px]
          left-1/2
          -translate-x-1/2
          w-[280px]
          h-[35px]
          rounded-[2px]
          bg-[#F5DEDE]/60
        "
                  />

                  {/* VIDEO */}
                  <div
                    className="
    mx-5
    mt-5
    h-[440px]
    rounded-[3px]
    overflow-hidden
    bg-[#D9D9D9]
  "
                  >
                    <video
                      ref={video1Ref}
                      src={video1}
                      muted
                      playsInline
                      preload="auto"
                      onEnded={() => setVideo1Ended(true)}
                      onMouseEnter={() => {
                        video1Ref.current?.pause();
                      }}
                      onMouseLeave={() => {
                        if (!video1Ended) {
                          video1Ref.current?.play().catch(() => {});
                        }
                      }}
                      className="
    w-full
    h-full
    object-cover
    block
  "
                    />
                  </div>

                  {/* INFORMASI */}
                  <div
                    className="
          w-full
          px-3
          pt-3
          pb-6
          text-center
        "
                  >
                    <p
                      className="
            font-['Nunito']
            text-[#999999]
            text-[15px]
          "
                    >
                      16 - 05 - 2026
                    </p>

                    <h2
                      className="
            mt-3
            font-['Nunito']
            text-[#222222]
            text-[15px]
            font-semibold
            leading-[15px]
          "
                    >
                      Rafting Citumang
                    </h2>
                  </div>
                </div>

                {/* =========================
        VIDEO 2
    ========================== */}
                <div
                  className="
    relative
    bg-white
    border
    border-[#E4E4E4]
    rounded-[6px]
    overflow-visible
    shadow-[0_1px_4px_rgba(0,0,0,0.08)]
    flex
    flex-col
    w-full
    h-[540px]
    mt-[300px]
  "
                >
                  {/* STRIP ATAS */}
                  <div
                    className="
    absolute
    -top-[24px]
    left-1/2
    -translate-x-1/2
    w-[280px]
    h-[35px]
    rounded-[2px]
    bg-[#DCE7F8]/60
  "
                  />

                  {/* VIDEO */}
                  <div
                    className="
    mx-5
    mt-5
    h-[440px]
    rounded-[3px]
    overflow-hidden
    bg-[#D9D9D9]
  "
                  >
                    <video
                      ref={video2Ref}
                      src={video2}
                      muted
                      playsInline
                      preload="auto"
                      onEnded={() => setVideo2Ended(true)}
                      onMouseEnter={() => {
                        video2Ref.current?.pause();
                      }}
                      onMouseLeave={() => {
                        if (!video2Ended) {
                          video2Ref.current?.play().catch(() => {});
                        }
                      }}
                      className="
    w-full
    h-full
    object-cover
    block
  "
                    />
                  </div>

                  {/* INFORMASI */}
                  <div
                    className="
          w-full
          px-3
          pt-3
          pb-6
          text-center
        "
                  >
                    <p
                      className="
            font-['Nunito']
            text-[#999999]
            text-[15px]
          "
                    >
                      16 - 05 - 2026
                    </p>

                    <h2
                      className="
            mt-3
            font-['Nunito']
            text-[#222222]
            text-[15px]
            font-semibold
            leading-[15px]
          "
                    >
                      Rafting Citumang
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            DOT INDICATOR
        ========================== */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            type="button"
            aria-label="Slide kegiatan foto"
            onClick={() => {
              setCurrentSlide(0);
              remainingTimeRef.current = 5 * 1000;
            }}
            className={`
              w-[10px]
              h-[10px]
              rounded-full
              transition-all
              duration-300
              cursor-pointer
              ${currentSlide === 0 ? "bg-[#4C8AAE]" : "bg-[#D9D9D9]"}
            `}
          />

          <button
            type="button"
            aria-label="Slide kegiatan video"
            onClick={() => setCurrentSlide(1)}
            className={`
              w-[10px]
              h-[10px]
              rounded-full
              transition-all
              duration-300
              cursor-pointer
              ${currentSlide === 1 ? "bg-[#4C8AAE]" : "bg-[#D9D9D9]"}
            `}
          />
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default KegiatanDetail;
