import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import InstallerArea from "./components/InstallerArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import Product1 from "./components/Product1"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/installerarea" element={<InstallerArea />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product1" element={<Product1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
