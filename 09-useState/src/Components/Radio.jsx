import { useState } from "react"

const Radio = ()=>{

    const [gender, setGender] = useState("");
    const [city, setCity] = useState("Delhi");
    return(
        <div>
            <h1>Handle Radio and DropDown </h1>
            <h4>Select Gender : {gender}</h4>
            <input type="radio" id="male" name="gender" onClick={(event)=> setGender(event.target.value)} value="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" onClick={(event)=> setGender(event.target.value)} value="female"/>
            <label htmlFor="female">Female</label><br />
            <br />
            <h2>Select City : {city}</h2>
            <select defaultValue="Delhi" onChange={(eve)=> setCity(eve.target.value)}>
                <option value="noida">Noida</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Banglore">Banglore</option>
                <option value="Pune">Pune</option>
                <option value="Hydrabad">Hydrabad</option>
            </select>
        </div>
    )
}
export default Radio