import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import i18n from "../i18n";

function KegiatanDetail() {
  const [, setCurrentLang] = useState(i18n.language || "id");

  const [pageSetting, setPageSetting] = useState({
    title: "Kegiatan",
    description:
      "PT. Digi Tekno Indonesia menyediakan Software IT (Website SIM (Sistem Informasi Manajemen), Landing Page, Company Profile, ERP), Mekanik & Engineering (Repair & Services), serta Pengadaan Sparepart dan Material Industri untuk mendukung kebutuhan bisnis.",
  });

  // =========================
  // SLIDER
  // =========================
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Timer 30 detik
  const timerRef = useRef(null);
  const timerStartRef = useRef(null);
  const remainingTimeRef = useRef(5 * 1000);

  const videoRefs = useRef({});
  const [videoEnded, setVideoEnded] = useState(false);

  const [kegiatanData, setKegiatanData] = useState([]);

  const getMediaUrl = (media) => {
    if (!media) return "";

    if (media.startsWith("http")) {
      return media;
    }

    return `http://localhost:5000${media}`;
  };

  const formatTanggal = (tanggal) => {
    if (!tanggal) return "-";

    const date = new Date(tanggal);

    if (isNaN(date.getTime())) return "-";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day} - ${month} - ${year}`;
  };

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

  useEffect(() => {
    const fetchPageSetting = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/page-settings/kegiatan",
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Gagal mengambil pengaturan halaman kegiatan.",
          );
        }

        setPageSetting({
          title: data.data?.title || "Kegiatan",
          description: data.data?.description || "",
        });
      } catch (error) {
        console.error("❌ Error mengambil Page Setting Kegiatan:", error);
      }
    };

    fetchPageSetting();
  }, []);

  useEffect(() => {
    const fetchKegiatan = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/postingan/kegiatan",
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Gagal mengambil data kegiatan");
        }

        setKegiatanData(result.data);
      } catch (error) {
        console.error("❌ Error mengambil data kegiatan:", error);
      }
    };

    fetchKegiatan();
  }, []);

  // =========================
  // DATA KEGIATAN
  // =========================

  const kegiatanList = kegiatanData.filter((item) => item.tipe === "Gambar");

  const videoList = kegiatanData.filter((item) => item.tipe === "Video");

  // =========================
  // BAGI DATA MENJADI HALAMAN
  // FOTO = MAKSIMAL 6
  // VIDEO = MAKSIMAL 2
  // =========================

  const chunkArray = (array, size) => {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }

    return result;
  };

  const photoPages = chunkArray(kegiatanList, 6);
  const videoPages = chunkArray(videoList, 2);

  // Semua halaman digabung secara berurutan:
  // FOTO 1, FOTO 2, ... lalu VIDEO 1, VIDEO 2, ...
  const slides = [
    ...photoPages.map((items) => ({
      type: "photo",
      items,
    })),

    ...videoPages.map((items) => ({
      type: "video",
      items,
    })),
  ];

  // =========================
  // TIMER SLIDE 1
  // 10 DETIK
  // =========================
  // =========================
  // TIMER SLIDE FOTO
  // 5 DETIK
  // =========================

  useEffect(() => {
    const currentSlideData = slides[currentSlide];

    // Tidak ada slide
    if (!currentSlideData) {
      return;
    }

    // Kalau slide sekarang bukan foto,
    // timer foto tidak berjalan
    if (currentSlideData.type !== "photo") {
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
      // Timer sudah selesai
      // supaya cleanup tidak menghitung timer lama lagi
      timerRef.current = null;
      timerStartRef.current = null;

      // Reset timer untuk slide berikutnya
      remainingTimeRef.current = 5 * 1000;

      // Pindah ke slide berikutnya
      setCurrentSlide((prev) => {
        if (prev < slides.length - 1) {
          return prev + 1;
        }

        // Kalau sudah slide terakhir,
        // kembali ke slide pertama
        return 0;
      });
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
  }, [currentSlide, isHovered, slides.length]);

  // =========================
  // JAGA CURRENT SLIDE
  // =========================

  useEffect(() => {
    if (slides.length === 0) {
      setCurrentSlide(0);
      return;
    }

    if (currentSlide >= slides.length) {
      setCurrentSlide(slides.length - 1);
    }
  }, [slides.length, currentSlide]);

  // =========================
  // VIDEO SLIDE
  // =========================
  // =========================
  // VIDEO SLIDE
  // =========================

  useEffect(() => {
    const currentSlideData = slides[currentSlide];

    // Bukan slide video
    if (!currentSlideData || currentSlideData.type !== "video") {
      return;
    }

    setVideoEnded(false);

    // Ambil video berdasarkan ID
    const currentVideos = currentSlideData.items
      .map((video) => videoRefs.current[video.id])
      .filter((video) => video && typeof video.pause === "function");

    currentVideos.forEach((video) => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    const videoTimer = setTimeout(
      () => {
        currentVideos.forEach((video) => {
          if (video && typeof video.pause === "function") {
            video.pause();
          }
        });

        setCurrentSlide(0);

        remainingTimeRef.current = 5 * 1000;
      },
      10 * 60 * 1000,
    );

    return () => {
      clearTimeout(videoTimer);

      currentVideos.forEach((video) => {
        if (video && typeof video.pause === "function") {
          video.pause();
        }
      });
    };
  }, [currentSlide, slides]);

  // =========================
  // SALAH SATU VIDEO SELESAI
  // =========================
  useEffect(() => {
    if (currentSlide !== 1) {
      return;
    }

    // Kalau salah satu video selesai,
    // semua video dihentikan
    // dan slider kembali ke foto.
    if (videoEnded) {
      Object.values(videoRefs.current).forEach((video) => {
        if (video && typeof video.pause === "function") {
          video.pause();
        }
      });

      setCurrentSlide(0);

      remainingTimeRef.current = 5 * 1000;
    }
  }, [videoEnded, currentSlide]);

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
            {pageSetting.title}
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
            {pageSetting.description}
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
            {slides.map((slide, slideIndex) => (
              <div
                key={`${slide.type}-${slideIndex}`}
                className="w-full shrink-0"
              >
                {/* ==================================================
        SLIDE FOTO
    ================================================== */}

                {slide.type === "photo" && (
                  <div
                    className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-x-5
          gap-y-10
        "
                  >
                    {slide.items.map((kegiatan, index) => (
                      <div
                        key={kegiatan.id}
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
                ${index % 2 === 1 ? "bg-[#F5DEDE]/60" : "bg-[#DCE7F8]/60"}
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
                            src={getMediaUrl(kegiatan.media)}
                            alt={kegiatan.deskripsi}
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
                            {formatTanggal(kegiatan.tanggal)}
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
                            {kegiatan.deskripsi}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ==================================================
        SLIDE VIDEO
    ================================================== */}

                {slide.type === "video" && (
                  <div
                    className="
          w-full
          flex
          flex-wrap
          items-start
          justify-center
          gap-5
          md:gap-6
        "
                  >
                    {slide.items.map((video, index) => (
                      <div
                        key={video.id}
                        className={`
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
              md:w-[calc(50%-12px)]
              h-[540px]
              ${index % 2 === 1 ? "mt-[300px]" : ""}
            `}
                      >
                        {/* =========================
                STRIP ATAS
            ========================== */}

                        <div
                          className={`
                absolute
                -top-[24px]
                left-1/2
                -translate-x-1/2
                w-[280px]
                h-[35px]
                rounded-[2px]
                ${index % 2 === 1 ? "bg-[#DCE7F8]/60" : "bg-[#F5DEDE]/60"}
              `}
                        />

                        {/* =========================
                VIDEO
            ========================== */}

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
                            ref={(el) => {
                              videoRefs.current[video.id] = el;
                            }}
                            src={getMediaUrl(video.media)}
                            muted
                            playsInline
                            preload="auto"
                            onEnded={() => setVideoEnded(true)}
                            onMouseEnter={() => {
                              const currentVideo = videoRefs.current[video.id];

                              if (
                                currentVideo &&
                                typeof currentVideo.pause === "function"
                              ) {
                                currentVideo.pause();
                              }
                            }}
                            onMouseLeave={() => {
                              const currentVideo = videoRefs.current[video.id];

                              if (
                                !videoEnded &&
                                currentVideo &&
                                typeof currentVideo.play === "function"
                              ) {
                                currentVideo.play().catch(() => {});
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
                            {formatTanggal(video.tanggal)}
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
                            {video.deskripsi}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =========================
    DOT INDICATOR
========================== */}

        {slides.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Slide kegiatan ${index + 1}`}
                onClick={() => {
                  setCurrentSlide(index);
                  remainingTimeRef.current = 5 * 1000;
                  setVideoEnded(false);
                }}
                className={`
          w-[10px]
          h-[10px]
          rounded-full
          transition-all
          duration-300
          cursor-pointer
          ${currentSlide === index ? "bg-[#4C8AAE]" : "bg-[#D9D9D9]"}
        `}
              />
            ))}
          </div>
        )}
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </div>
  );
}

export default KegiatanDetail;
