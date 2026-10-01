import { useEffect, useState } from "react";
import Footer from "./Footer";

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const [faqList, setFaqList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pageSetting, setPageSetting] = useState({
    title: "FAQ",
    description: "",
  });

  // =========================
  // GET FAQ DARI API
  // =========================
  useEffect(() => {
    const fetchFaq = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:5000/api/faq");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Gagal mengambil data FAQ");
        }

        setFaqList(data.data || []);
      } catch (error) {
        console.error("❌ Error mengambil FAQ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, []);

  useEffect(() => {
    const fetchPageSetting = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/page-settings/faq",
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Gagal mengambil pengaturan halaman FAQ",
          );
        }

        setPageSetting({
          title: data.data?.title || "FAQ",
          description: data.data?.description || "",
        });
      } catch (error) {
        console.error("❌ Error mengambil Page Setting FAQ:", error);
      }
    };

    fetchPageSetting();
  }, []);

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          HERO FAQ
      ========================== */}
      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, #FBFBFB 0%, #F2F0F6 25%, #EAE6F2 50%, #DDD6EC 75%, #D4C9EB 100%)",
        }}
      >
        <div className="max-w-[1150px] mx-auto px-8 md:px-[75px] py-[38px] md:py-[40px]">
          {/* TITLE */}
          <h1
            className="text-[34px] md:text-[38px] text-[#3F4241] leading-none"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
            }}
          >
            {pageSetting.title}
          </h1>

          {/* DESCRIPTION */}
          <p
            className="mt-4 max-w-[850px] text-[11px] md:text-[12px] leading-[1.55] text-[#666666]"
            style={{
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {pageSetting.description}
          </p>
        </div>
      </section>

      {/* =========================
          FAQ LIST
      ========================== */}
      <section className="w-full bg-white">
        <div className="max-w-[850px] mx-auto px-6 md:px-8 py-[38px] md:py-[54px]">
          <div className="max-w-[740px] mx-auto">
            <div className="space-y-[20px]">
              {/* =========================
                  LOADING
              ========================== */}
              {loading ? (
                <div
                  className="text-center text-[#666666] text-[13px] py-10"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  Memuat FAQ...
                </div>
              ) : faqList.length === 0 ? (
                /* =========================
                    DATA KOSONG
                ========================== */
                <div
                  className="text-center text-[#666666] text-[13px] py-10"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  Belum ada FAQ.
                </div>
              ) : (
                /* =========================
                    DATA FAQ
                ========================== */
                faqList.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.id}
                      className="
                        w-full
                        overflow-hidden
                        rounded-[18px]
                        border-[2px]
                        border-[#172044]
                        shadow-[0_3px_2px_rgba(0,0,0,0.25)]
                        bg-white
                      "
                    >
                      {/* QUESTION */}
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className={`
                          w-full
                          min-h-[64px]
                          px-7
                          md:px-9
                          py-4
                          flex
                          items-center
                          justify-between
                          text-left
                          cursor-pointer
                          bg-[#D8ECFB]
                          ${
                            isOpen
                              ? "rounded-t-[16px] border-b-[1px] border-[#172044]"
                              : "rounded-[16px]"
                          }
                        `}
                      >
                        <span
                          className="
                            text-[#40484A]
                            text-[13px]
                            md:text-[14px]
                            font-bold
                            pr-5
                          "
                          style={{
                            fontFamily: "'Nunito', sans-serif",
                          }}
                        >
                          {faq.question}
                        </span>

                        {/* PANAH ▼ HANYA SAAT CLOSED */}
                        {!isOpen && (
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#40484A"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      {/* ANSWER */}
                      {isOpen && (
                        <div
                          className="
                            bg-white
                            px-7
                            md:px-9
                            pt-7
                            pb-6
                          "
                        >
                          <p
                            className="
                              text-[#40484A]
                              text-[12px]
                              md:text-[13px]
                              leading-[1.55]
                            "
                            style={{
                              fontFamily: "'Nunito', sans-serif",
                            }}
                          >
                            {faq.answer}
                          </p>

                          {/* PANAH TUTUP */}
                          <button
                            type="button"
                            onClick={() => setOpenFaq(null)}
                            className="
                              mt-5
                              flex
                              items-center
                              cursor-pointer
                              hover:-translate-x-[2px]
                              transition-transform
                              duration-200
                            "
                            aria-label="Tutup FAQ"
                          >
                            <svg
                              width="25"
                              height="20"
                              viewBox="0 0 25 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23 10H3M3 10L10 3M3 10L10 17"
                                stroke="#40484A"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Faq;
