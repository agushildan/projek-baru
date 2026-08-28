import Navbar from "./components/Navbar";
import "./App.css"; 
import { Routes, Route } from "react-router-dom";
import Beranda from "./components/beranda";
import Produk from "./components/produk";
import Mitra from "./components/mitra";
import Layanan from "./components/layanan"; 
import Kegiatan from "./components/kegiatan";
import Karir from "./components/karir"; 
import Faq from "./components/faq";
import Blog from "./components/blog";
import Sertifikasi from "./components/sertifikasi";
import VisiMisi from "./components/visimisi";
import ProdukDetail from "./components/ProdukDetail";
import SoftwareDetail from "./components/SoftwareDetail";
import ProdukSoftwareDetail from "./components/ProdukSoftwareDetail";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
  <Route path="/" element={<Beranda />} />

  <Route path="/sertifikasi" element={<Sertifikasi />} />
  <Route path="/visimisi" element={<VisiMisi />} />

  <Route path="/produklain" element={<ProdukDetail />} />

  <Route
    path="/produk/software"
    element={<SoftwareDetail />}
  />

  <Route path="/layanan" element={<Layanan />} />
  <Route path="/mitra" element={<Mitra />} />
  <Route path="/kegiatan" element={<Kegiatan />} />
  <Route path="/karir" element={<Karir />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/blog" element={<Blog />} />
  <Route
  path="/produk/software/detail"
  element={<ProdukSoftwareDetail />}
/>
</Routes>
    </div>
  );
}

export default App;