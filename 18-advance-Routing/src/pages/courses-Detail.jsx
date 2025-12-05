import { useParams } from "react-router-dom"

// console.log(params)
const CourseDetail =()=>{
    const params = useParams()
    console.log(params)
    return(
        <div>
            <h1>Courses Detail Page</h1>
        </div>
    )
}
export default CourseDetail