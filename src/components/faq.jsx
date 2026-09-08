import { useState } from "react";

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqList = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ullamcorper mauris, et eros tincidunt justo, at rutrum massa metus ac ex. Suspendisse vel pretium diam. Aliquam sit amet porttitor felis. Ut at feugiat tellus, et condimentum mauris.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ullamcorper mauris, et eros tincidunt justo.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ullamcorper mauris.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam varius dolor et dolor accumsan vulputate. Etiam a gravida enim. Praesent mollis, libero ullamcorper mauris.",
    },
  ];

  return (
    <div className="w-full pt-[64px]">
      {/* =========================
          FAQ
      ========================== */}
      <section className="w-full bg-[#B7D3E6] min-h-[570px] py-10 md:py-12">
        <div className="max-w-[850px] mx-auto px-6">
          {/* TITLE */}
          <h1
            className="
              text-center
              text-white
              text-[42px]
              md:text-[48px]
              font-bold
              tracking-wide
              drop-shadow-[2px_3px_2px_rgba(0,0,0,0.20)]
            "
            style={{
              fontFamily: "'Belanosima', sans-serif",
            }}
          >
            FAQ
          </h1>

          {/* FAQ LIST */}
          <div className="mt-6 md:mt-7 space-y-5">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={index}>
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="
                      w-full
                      min-h-[70px]
                      bg-[#D8ECFB]
                      border-[2px]
                      border-[#172044]
                      rounded-[18px]
                      px-7
                      md:px-9
                      py-4
                      flex
                      items-center
                      justify-between
                      text-left
                      shadow-[0_3px_2px_rgba(0,0,0,0.25)]
                      hover:bg-[#D2E8F8]
                      transition-all
                      duration-200
                      cursor-pointer
                    "
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

                    {/* PANAH */}
                    <svg
                      className={`
                        w-[23px]
                        h-[23px]
                        shrink-0
                        transition-transform
                        duration-200
                        ${isOpen ? "rotate-180" : ""}
                      `}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#40484A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div
                      className="
                        bg-white
                        border-[2px]
                        border-t-0
                        border-[#172044]
                        rounded-b-[18px]
                        px-7
                        md:px-9
                        py-6
                        -mt-[14px]
                        pt-7
                        shadow-[0_3px_2px_rgba(0,0,0,0.20)]
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

                      {/* PANAH KEMBALI */}
                      <button
                        type="button"
                        onClick={() => setOpenFaq(null)}
                        className="
                          mt-5
                          flex
                          items-center
                          cursor-pointer
                          hover:translate-x-[-2px]
                          transition-transform
                        "
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
            })}
          </div>

          {/* KEMBALI */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              mt-5
              px-5
              py-2
              bg-[#F3D3C1]
              text-[#5A4A43]
              text-[13px]
              font-bold
              rounded-full
              border
              border-[#5A4A43]
              shadow-[0_3px_0_#6B554B]
              hover:translate-y-[1px]
              hover:shadow-[0_2px_0_#6B554B]
              transition-all
              duration-200
              flex
              items-center
              gap-2
              cursor-pointer
            "
            style={{
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <span className="text-[20px] leading-none">‹</span>
            Kembali
          </button>
        </div>
      </section>
    </div>
  );
}

export default Faq;
