const Form = ()=>{
    const submitHandler = (e)=>{
        e.preventDefault()
    }

    return(
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
           <input type="text" id="userName" placeholder="Enter userName...."/>
           <button id="btn">Submit</button>
        </form>
    )
}
export default Form;