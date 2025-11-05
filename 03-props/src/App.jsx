import React from "react";
import Card  from "./component/card"
const App = ()=>{
  return (
    <div className="parent">
      < Card  user = "krishna keshariya" role  =" Full stack Dev" img = "https://images.unsplash.com/photo-1759031807436-bffa8890cc5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user = "Ram singh" role = "cyber security Expert" img = "https://plus.unsplash.com/premium_photo-1739104471549-3fba06cd43e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"/>
    </div>
  )
}
export default App