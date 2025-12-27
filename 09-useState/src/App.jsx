import { useState } from "react"
import CheckBox from "./Components/CheckBox";
import Radio from "./Components/Radio";
const App = () => {

  const [a, setA] = useState(10);
  const [userName, setUserName] = useState("Krishna");
  const [obj ,setObj] = useState({name : "krishna", age : 20});

  const btnClicked = ()=>{
    const newObj = {...obj};
    newObj.name = "keshariya";
    console.log(newObj)
    setObj(newObj)
    console.log(obj)
  }

  function changeA() {
    setA(a+5);
    setUserName("Samarth")
    console.log(a) //asynchronous process 
  }

  return (
    <div>
      <h1>The value of {a} <br /> Name of User is {userName}  {obj.name} and the age is {obj.age}</h1>
      <button onClick={changeA}>Click me</button>
      <button onClick={btnClicked}>Click to See</button>
      <br /><br />
      <CheckBox />
      <br /><br />
      <Radio />
    </div>
    
  )
}
export default App