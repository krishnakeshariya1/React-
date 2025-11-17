import RightCardContent from "./RightCardContent";
const RightCard =(props)=>{
    return(
        <div className="h-full w-80 rounded-4xl  overflow-hidden relative shrink-0">
            <img className="h-full w-fit object-cover" src={props.img} alt="working profession" />
            <RightCardContent tag ={props.tag} id={props.id}/>
        </div>
    )
}
export default RightCard;