import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound";
import MenProducts from "./pages/Men's product";
import WomenProducts from "./pages/Women's Products";


const App =()=>{
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/men" element={<MenProducts />} />
        <Route path="/products/women" element={<WomenProducts />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App