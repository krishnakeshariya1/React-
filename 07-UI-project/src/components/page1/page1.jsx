import Navbar from "./Navbar";
import Page1Content from "./page1Content";

const Page1 = (props)=>{;
    return(
        <div className="h-screen w-full bg-[#D2E9E9]">
            <Navbar />
            <Page1Content user = {props.user}/>
        </div>
    )
}
export default Page1;