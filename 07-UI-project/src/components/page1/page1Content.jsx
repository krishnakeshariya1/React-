import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () =>{
    return(
        <div className="px-10 py-6 h-[90vh]  flex justify-between items-center">
            <LeftContent />
            <RightContent />
        </div>
    )
}
export default Page1Content;