import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <div className="flex justify-between text-center py-3 px-8 bg-cyan-700">
            <h2 className="text-2xl font-bold">Krishna</h2>
            <div className=" flex gap-10">
                <Link to='/' className="text-xl font-bold">HOME</Link>
                <Link to='/about' className="text-xl font-bold">ABOUT</Link>
                <Link to='/products' className="text-xl font-bold">Product</Link>
                <Link to='/Courses' className="text-xl font-bold">Courses</Link>
                
            </div>
        </div>
    )
}
export default Navbar;