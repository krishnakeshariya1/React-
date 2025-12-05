import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound";
import MenProducts from "./pages/Men's product";
import WomenProducts from "./pages/Women's Products";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/courses-Detail";


const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/products" element={<Products />} >
          <Route path="men" element={<MenProducts />} />
          <Route path="women" element={<WomenProducts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App