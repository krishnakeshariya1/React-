import { ArrowRight } from "lucide-react";
const RightCardContent = (props) => {
    return (
        <div className=" absolute top-0 left-0 w-full h-full p-7 flex flex-col justify-between">
            <h2 className="bg-black text-white h-10 w-10 rounded-full flex justify-center items-center font-semibold">{props.id+1}</h2>
            <div>
                <p className="text-lg leading-normal font-semibold drop-shadow-md text-white mb-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa sapiente quia quisquam molestiae! Officiis</p>
                <div className=" flex items-center justify-around">
                    <button className="bg-black font-semibold text-white px-3 rounded-full">{props.tag}</button>
                    <button className="bg-black font-semibold text-white px-3 rounded-full"><ArrowRight size={20} absoluteStrokeWidth /></button>
                </div>
            </div>
        </div>
    )
}
export default RightCardContent