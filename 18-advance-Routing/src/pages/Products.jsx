import { Link, Outlet } from "react-router-dom"

const Products = ()=>{
    return(
        <div>
            <div>
                <Link to='/products/men' className="text-xl font-bold mx-6" >MEN</Link>
                <Link to='/products/women' className="text-xl font-bold">WOMEN</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Products