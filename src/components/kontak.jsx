import { useEffect, useState } from "react";
import i18n from "../i18n";

function Kontak() {
  const [currentLang, setCurrentLang] = useState(i18n.language || "id");

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const t = (key, defaultValue) => i18n.t(key, { defaultValue });

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setNotification({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama.trim()) {
      showNotification("error", "Nama wajib diisi.");
      return;
    }

    if (!formData.email.trim()) {
      showNotification("error", "Email wajib diisi.");
      return;
    }

    if (!formData.pesan.trim()) {
      showNotification("error", "Pesan wajib diisi.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("http://localhost:5000/api/kontak-masuk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: formData.nama.trim(),
          email: formData.email.trim(),
          pesan: formData.pesan.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal mengirim pesan.");
      }

      showNotification(
        "success",
        "Pesan berhasil dikirim. Terima kasih telah menghubungi kami.",
      );

      setFormData({
        nama: "",
        email: "",
        pesan: "",
      });
    } catch (error) {
      console.error("❌ Error mengirim pesan:", error);

      showNotification("error", error.message || "Gagal mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="kontak"
      className="w-full bg-white px-6 py-16 md:px-10 lg:px-12"
    >
      <div className="w-full max-w-[1280px] mx-auto">
        {/* =========================
            JUDUL KONTAK
        ========================== */}
        <div className="flex justify-center">
          <h2
            className="
              font-['Cormorant_Garamond']
              text-[#666666]
              text-[65px]
              leading-none
              font-semibold
              text-center
            "
          >
            {t("judul_kontak", "Kontak")}
          </h2>
        </div>

        {/* =========================
            DESKRIPSI
        ========================== */}
        <div className="flex justify-center">
          <p
            className="
              mt-6
              w-full
              max-w-[911px]
              font-['Nunito']
              text-[#3B413B]
              text-[15px]
              font-normal
              leading-[1.2]
              text-center
            "
          >
            Kami akan menghubungi Anda untuk mengatur jadwal konsultasi awal
            secara gratis,
            <br />
            tanpa persyaratan.
          </p>
        </div>

        {/* =========================
            NOTIFICATION
        ========================== */}
        {notification.show && (
          <div
            className={`
              fixed
              top-24
              right-6
              z-[9999]
              min-w-[280px]
              max-w-[380px]
              px-5
              py-4
              rounded-[10px]
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              font-['Nunito']
              text-[14px]
              font-semibold
              ${
                notification.type === "success"
                  ? "bg-[#E8F5E9] text-[#2E7D32] border-l-[4px] border-[#4CAF50]"
                  : "bg-[#FFEBEE] text-[#C62828] border-l-[4px] border-[#E53935]"
              }
            `}
          >
            {notification.message}
          </div>
        )}

        {/* =========================
            FORM
        ========================== */}
        <form
          onSubmit={handleSubmit}
          className="
            w-[414px]
            mx-auto
            mt-7
          "
        >
          {/* =========================
              NAMA
          ========================== */}
          <div className="mb-4">
            <label
              htmlFor="nama"
              className="
                block
                mb-2
                font-['Nunito']
                text-[#333333]
                text-[16px]
                font-medium
              "
            >
              Nama
            </label>

            <input
              id="nama"
              type="text"
              placeholder="Masukkan Nama Anda"
              value={formData.nama}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nama: e.target.value,
                })
              }
              className="
                w-full
                h-[40px]
                bg-white
                border-[2px]
                border-[#D9D9D9]
                rounded-[10px]
                shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
                px-4
                font-['Nunito']
                text-[16px]
                text-[#333333]
                placeholder:text-[#bdbdbd]
                outline-none
                box-border
              "
            />
          </div>

          {/* =========================
              EMAIL
          ========================== */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="
                block
                mb-2
                font-['Nunito']
                text-[#333333]
                text-[16px]
                font-medium
              "
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Masukkan Email Anda"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="
                w-full
                h-[40px]
                bg-white
                border-[2px]
                border-[#D9D9D9]
                rounded-[10px]
                shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
                px-4
                font-['Nunito']
                text-[16px]
                text-[#333333]
                placeholder:text-[#bdbdbd]
                outline-none
                box-border
              "
            />
          </div>

          {/* =========================
              PESAN
          ========================== */}
          <div className="mb-4">
            <label
              htmlFor="pesan"
              className="
                block
                mb-2
                font-['Nunito']
                text-[#333333]
                text-[16px]
                font-medium
              "
            >
              Pesan
            </label>

            <textarea
              id="pesan"
              placeholder="Masukkan Pesan"
              value={formData.pesan}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pesan: e.target.value,
                })
              }
              className="
                w-full
                h-[102px]
                bg-white
                border-[2px]
                border-[#D9D9D9]
                rounded-[10px]
                shadow-[inset_0_2px_2px_rgba(0,0,0,0.12)]
                px-4
                py-3
                font-['Nunito']
                text-[16px]
                text-[#333333]
                placeholder:text-[#bdbdbd]
                outline-none
                resize-none
                box-border
              "
            />
          </div>

          {/* =========================
              BUTTON
          ========================== */}
          <div className="flex justify-start">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-[120px]
                h-[34px]
                rounded-[12px]
                bg-[#1C3759]
                border-[2px]
                border-[#C97173]
                shadow-[0_2px_4px_rgba(0,0,0,0.25)]
                text-white
                font-['Nunito']
                text-[16px]
                font-medium
                flex
                items-center
                justify-center
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:shadow-[0_4px_7px_rgba(0,0,0,0.25)]
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? "Mengirim..." : "Kirim"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Kontak;
