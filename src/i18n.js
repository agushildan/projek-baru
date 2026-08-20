import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  id: {
    translation: {
      beranda: "Beranda",
      tentang_digi: "Tentang Digi",
      sertifikasi: "Sertifikasi",
      visi_misi: "Visi & Misi",
      kegiatan: "Kegiatan",
      produk:"Produk",
      layanan:"Layanan",
      mitra:"Mitra",
      info: "Info",
      karir: "Karir",
      faq: "FAQ",
      blog: "Blog",
      cari_placeholder:"Cari",

      /**beranda */
biru1:"SOLUSI IT,",
merah:"MEKANIKAL & ENGINEERING",
biru2:"UNTUK INDUSTRI BISNIS",
isi_beranda:"PT. Digi Tekno Indonesia merupakan perusahaan yang menyediakan Solusi Teknologi Informasi (IT), Konsultasi IT, Mekanikal & Engineering, Jasa Service Mesin Manufaktur, serta Pengadaan Sparepart dan Material Industri dengan pelayanan profesional dan produk berkualitas untuk mendukung kebutuhan industri dan bisnis anda.",
wakami:"Whatsapp Kami",
solusiit:"Solusi IT",
mekanik:"Mekanik & Engineering",
perawatan:"Perawatan Mesin Manufaktur",
spareart:"Pengadaan Sparepart & Material Industri",

                                               /**tentang kami */
judul_tentang:"Tentang Kami",
paragraft1:"PT Digi Tekno Indonesia didirikan pada tahun 2022 dan berlokasi di Summarecon Gedebage, Bandung. Kami menyediakan jasa Konsultasi IT, Mekanikal dan Engineering, Service Mesin Manufaktur, serta Pengadaan Sparepart dan Material Industri.",
paragraft2:"Didukung tim yang profesional, inovatif, dan berkompeten, kami membantu meningkatkan efisiensi operasional dan produktivitas bisnis melalui solusi teknologi dan engineering yang tepat guna.",
paragraft3:"Kami berkomitmen memberikan produk berkualitas, pelayanan profesional, dan solusi yang optimal untuk mendukung kebutuhan industri dan pertumbuhan bisnis pelanggan.",

/**visi misi */
judulvisi:"Visi",
judulmisi:"Misi",
isivisi:"Menjadi perusahaan yang inovatif,berperforma tinggi, independen,profesional, kerkomitment dan bertanggung jawab dalam bidang teknologi, industri dan teknis",
isimisi1:"Memberikan solusi dan produk terbaik sesuai kebutuhan",
isimisi2:"Menjalin kerjasama dan hubungan baik dengan mitra usaha dan proses yang berkualitas tinggi",
isimisi3:"Mengembangkan sumber daya manusia,fasilitas dan proses yang berkualitas tinggi ",
isimisi4:"Memperhatikan kesehatan,keselamatan kerja dan perlindungan lingkungan",
isimisi5:"menghasilkan produk dengan kualitas yang bermutu"
},
  },
  en: {
    translation: {
      beranda: "Home",
      tentang_digi: "About Digi",
      sertifikasi: "Certifications",
      visi_misi: "Vision & Mission",
      produk: "Products",
      layanan: "Services",
      mitra: "Partners",
      kegiatan: "Activities",
      info: "Info",
      karir: "Careers",
      faq: "FAQ",
      blog: "Blog",
      cari_placeholder: "Search...",

                                                    /**beranda */
    biru1:"IT SOLUTIONS,",
    merah:"Mechanical & Engineering",
    biru2:"FOR THE BUSINESS INDUSTRY",
    isi_beranda:"PT. Digi Tekno Indonesia is a company providing Information Technology (IT) solutions, IT consulting, mechanical engineering services, manufacturing machinery maintenance, and the procurement of industrial spare parts and materials, delivering professional service and quality products to support your industrial and business needs.",
    wakami:"WhatsApp Us",
    solusiit:"IT Solutions",
mekanik:"Mechanics & Engineering",
perawatan:"Manufacturing Machinery Maintenance",
spareart:"Procurement of Industrial Spare Parts & Materials",

                                                /**tentang kami */
judul_tentang:"About Us",
paragraft1:"PT Digi Tekno Indonesia was established in 2022 and is located in Summarecon Gedebage, Bandung. We provide services in IT consulting, mechanical and engineering, manufacturing machinery maintenance, as well as the procurement of industrial spare parts and materials.",
paragraft2:"Supported by a professional, innovative, and competent team, we help enhance operational efficiency and business productivity through effective technology and engineering solutions.",
paragraft3:"We are committed to providing quality products, professional service, and optimal solutions to support industrial needs and our customers' business growth.",
    
/**visi dan misi */

judulvisi:"Vision",
judulmisi:"Mission",
isivisi:"To become an innovative, high performing, independent, professional, committed, and responsible company in the fields of technology, industry, and engineering.",
isimisi1:"Providing the best solutions and products tailored to needs.",
isimisi2:"Establishing cooperation and good relationships with business partners and work partners.",
isimisi3:"Developing high quality human resources, facilities, and processes.",
isimisi4:"Prioritizing occupational health and safety and environmental protection.",
isimisi5:"Producing high quality products.",

},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", 
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;