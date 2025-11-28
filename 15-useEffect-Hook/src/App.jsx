import { useEffect, useState } from "react"

const App = () =>{

  const [a, setA] = useState(0);
  const [b , setB] = useState(0);

  
  function achange(){
    console.log("cahnging a...");
  }

  function bchangeing(){
    console.log("b cahnging ....");
  }

  useEffect(()=>{
    achange()
    console.log("use effect is running...")
  },[a]);
  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button onClick={()=>{
        setA(a +1);
      }}>Increase a</button>
      <button
      onClick={()=>{
        setB(b +2)
      }}>Increase B</button>
    </div>
  )
}
export default App