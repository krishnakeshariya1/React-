import React, { useState } from "react"
const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by",{title})
    setTitle('')
  }
  const [title, setTitle] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" 
        id="userName"
         placeholder="Enter userName...."
        onChange={e =>{
          setTitle(e.target.value)
        }}
        value={title}
        />
        <button id="btn">Submit</button>
      </form>
    </div>
  )
}
export default App;