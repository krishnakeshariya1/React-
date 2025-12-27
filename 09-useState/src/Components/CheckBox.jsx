import { useState } from "react"

const CheckBox =()=>{
    const [check, setCheck] = useState([])
    function handleCheckBox(event){
        if(event.target.checked){
            setCheck([...check, event.target.value])
        }
        else{
            setCheck([...check.filter((e)=>{
                return e !== event.target.value; 
            })])
        }
    }
    return(
        <div>
            <input type="checkbox" id="js" value="js" onClick={handleCheckBox}/>
            <label htmlFor="js">js</label>

            <input type="checkbox" id="html" value="html" onClick={handleCheckBox} />
            <label htmlFor="html">html</label>

            <h4>{check}</h4>
        </div>
    )
}
export default CheckBox