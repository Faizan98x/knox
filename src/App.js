import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import InstallerArea from "./components/InstallerArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Product1 from "./components/Product1";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Warrantycheck from "./components/Warrantycheck";
// Single Phase Inverter Links
import SSeries1to3kW from "./components/Products/Single-Phase-Inverters/SSeries1to3kW"
import SSeries3to5kW from "./components/Products/Single-Phase-Inverters/SSeries3to5kW"
import SSeries6to10kW from "./components/Products/Single-Phase-Inverters/SSeries6to10kW"
import SG2Series3to6kW from "./components/Products/Single-Phase-Inverters/SG2Series3to6kW"
// Three Phase Inverter Links
import G2Series3to5kW from "./components/Products/Three-Phase-Inverters/G2Series3to5kW";
import G2Series5to20kW from "./components/Products/Three-Phase-Inverters/G2Series5to20kW";
import G2Series30to50kW from "./components/Products/Three-Phase-Inverters/G2Series30to50kW";
import G2Series80to110kW from "./components/Products/Three-Phase-Inverters/G2Series80to110kW"
import G3Series10to40kW from "./components/Products/Three-Phase-Inverters/G3Series10to40kW"
// Hybrid Inveters Links
import HybridSinglePhase from "./components/Products/Hybrid-Inverters/HybridSinglePhase"
import HybridThreePhase from "./components/Products/Hybrid-Inverters/HybridThreePhase"

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/installerarea" element={<InstallerArea />} />
          <Route path="/products" element={<Products />} />

          {/* products routes */}
          <Route path="/SSeries1to3kW" element={<SSeries1to3kW />} />
          <Route path="/SSeries3to5kW" element={<SSeries3to5kW />} />
          <Route path="/SSeries6to10kW" element={<SSeries6to10kW />} />
          <Route path="/SG2Series3to6kW" element={<SG2Series3to6kW />} />

          <Route path="/G2Series3to5kW" element={<G2Series3to5kW />} />
          <Route path="/G2Series5to20kW" element={<G2Series5to20kW />} />
          <Route path="/G2Series30to50kW" element={<G2Series30to50kW />} />
          <Route path="/G2Series80to110kW" element={<G2Series80to110kW />} />
          <Route path="/G3Series10to40kW" element={<G3Series10to40kW />} />

          <Route path="/HybridSinglePhase" element={<HybridSinglePhase />} />
          <Route path="/HybridThreePhase" element={<HybridThreePhase />} />
          
          <Route path="/warrantycheck" element={<Warrantycheck />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
