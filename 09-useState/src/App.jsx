import { useState } from "react"

const App = () => {

  const [a, setA] = useState(10);
  const [userName, setUserName] = useState("Krishna");
  const [arr ,setArr] = useState({name : "krishna", age : 20});


  function changeA() {
    setA(a+5);
    setUserName("Samarth")
    console.log(a) //asynchronous process 
  }

  return (
    <div>
      <h1>The value of {a} <br /> Name of User is {userName} </h1>
      <button onClick={changeA}>Click me</button>
    </div>
  )
}
export default App