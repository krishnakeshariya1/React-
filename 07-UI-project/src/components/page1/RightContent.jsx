import RightCard from "./RightCard";
const RightContent = (props)=>{
    return(
        <div id="right" className="w-2/3 h-full p-5 flex gap-5 flex-nowrap overflow-x-auto ">
            {props.user.map((ele ,idx)=>{
                return <RightCard img ={ele.img} tag ={ele.tag} key={idx} id={idx}/>
            })}
        </div>
    )
}
export default RightContent;