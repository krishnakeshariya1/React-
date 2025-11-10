import { ArrowRight } from "lucide-react";
const RightCard =()=>{
    return(
        <div className="h-full w-80 bg-red-500 rounded-4xl  overflow-hidden relative ">
            <img className="h-full w-fit object-cover" src="https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="working profession" />
            <div className=" absolute top-0 left-0 w-full h-full p-7 flex flex-col justify-between">
                <h2 className="bg-black text-white h-10 w-10 rounded-full flex justify-center items-center font-semibold">1</h2>
                <div>
                    <p className="text-lg leading-normal font-semibold drop-shadow-md text-[#850E35] "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa sapiente quia quisquam molestiae! Officiis</p>
                    <div className=" flex items-center ">
                    <button className="bg-[#0046FF] font-semibold text-white px-3 rounded-full">Satisfied</button>
                    <button className="bg-[#0046FF] font-semibold text-white px-3 rounded-full"><ArrowRight size={20} absoluteStrokeWidth /></button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default RightCard;