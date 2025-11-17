import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = (props) =>{
    return(
        <div className="px-10 py-6 h-[90vh]  flex justify-between items-center">
            <LeftContent />
            <RightContent user ={props.user}/>
        </div>
    )
}
export default Page1Content;