function Blog() {
  return (
    <div className="w-full min-h-screen bg-[#B9D2E3] py-10">
      <div className="max-w-[900px] mx-auto bg-[#F7FBFF] rounded-[6px] px-8 py-7">
        {/* JUDUL */}
        <h1
          className="text-[46px] font-bold text-[#8F3434] mb-5"
          style={{ fontFamily: "'Belanosima', sans-serif" }}
        >
          BLOG
        </h1>

        {/* KONTEN BLOG */}
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8">
          {/* BLOG UTAMA */}
          <div>
            <div className="w-full rounded-[8px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
              <img
                src="/blog1.png"
                alt="Blog utama"
                className="w-full aspect-[1.45/1] object-cover"
              />

              <div className="bg-white px-4 py-3">
                <p className="text-[12px] text-[#444] mb-1">| Blog</p>

                <h2 className="text-[15px] font-bold text-[#333]">
                  Lorem ipsum dolor sit amet
                </h2>

                <p className="text-[10px] text-[#777] mt-1">
                  05 Mei 2025 &nbsp; | &nbsp; 10:00 &nbsp; | &nbsp; Admin Digi
                </p>

                <p className="text-[10px] text-[#777] mt-2 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  varius dolor et dolor accumsan vulputate.
                </p>
              </div>
            </div>

            {/* TOMBOL KEMBALI */}
            <button
              onClick={() => window.history.back()}
              className="mt-6 px-5 py-2 bg-[#F0D2C4] text-[#704F45] text-[11px] font-semibold rounded-full border border-[#9B6254] shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
            >
              ← Kembali
            </button>
          </div>

          {/* BLOG SAMPING */}
          <div className="flex flex-col gap-5">
            {/* CARD 1 */}
            <div className="bg-white rounded-[7px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
              <img
                src="/blog1.png"
                alt="Blog"
                className="w-full aspect-[1.8/1] object-cover"
              />

              <div className="px-3 py-2">
                <p className="text-[10px] text-[#444]">| Blog</p>

                <h3 className="text-[11px] font-bold text-[#333]">
                  Lorem ipsum dolor sit amet
                </h3>

                <p className="text-[8px] text-[#777] mt-1">
                  05 Mei 2025 &nbsp; | &nbsp; 10:00 &nbsp; | &nbsp; Admin Digi
                </p>

                <p className="text-[8px] text-[#777] mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-[7px] overflow-hidden shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
              <img
                src="/blog2.png"
                alt="Blog"
                className="w-full aspect-[1.8/1] object-cover"
              />

              <div className="px-3 py-2">
                <p className="text-[10px] text-[#444]">| Blog</p>

                <h3 className="text-[11px] font-bold text-[#333]">
                  Lorem ipsum dolor sit amet
                </h3>

                <p className="text-[8px] text-[#777] mt-1">
                  05 Mei 2025 &nbsp; | &nbsp; 10:00 &nbsp; | &nbsp; Admin Digi
                </p>

                <p className="text-[8px] text-[#777] mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex justify-end mt-5">
          <div className="flex items-center bg-white rounded-[6px] shadow-[0_1px_4px_rgba(0,0,0,0.15)] overflow-hidden">
            <button className="px-2 py-1 text-[10px] text-[#777]">‹</button>

            <button className="px-2 py-1 text-[10px] bg-[#D9EDF8] text-[#47718A]">
              1
            </button>

            <button className="px-2 py-1 text-[10px]">2</button>
            <button className="px-2 py-1 text-[10px]">3</button>
            <button className="px-2 py-1 text-[10px]">4</button>

            <button className="px-2 py-1 text-[10px] text-[#777]">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
