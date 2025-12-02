import { Link } from "react-router-dom"
const Navbar = ()=>{
    return(
        <div className="nav">
            <h3>Krishna</h3>
            <ul>
                <Link to ='./' >Home</Link>   
                <Link to ='./about'>About</Link>
                <Link to ='./contact'>Contact</Link>
            </ul>
        </div>
    )
}
export default Navbar