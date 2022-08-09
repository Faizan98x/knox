import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import InstallerArea from "./components/InstallerArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product1 from "./components/Product1";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LargerView from "./components/LargerView";

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
          <Route path="/product1" element={<Product1 />} />
          <Route path="/largerview" element={<LargerView />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
