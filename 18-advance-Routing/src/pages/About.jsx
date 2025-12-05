import { useNavigate } from "react-router-dom"

const About =()=>{
    const navigate = useNavigate()
    
    return(
        <div>
            <button className="bg-red-600 px-2 py-1 mt-2.5 rounded"
            onClick={()=>{
                navigate('/')
            }}
            >Return to Home page</button>
            <h1>ABOUT PAGE</h1>
        </div>
    )
}
export default About