import axios from 'axios';
import { useState } from 'react';
const App = ()=>{
  const [data, setData] = useState([]);

 async  function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(res)
  }

   const getData = async ()=>{

    const res = await axios.get('https://picsum.photos/v2/list');
    setData(res.data);
  }

  return(
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem , idx)=>{
          return <h3 key={idx}> {elem.id} </h3>;
        })}
      </div>
    </div>
  )
}
export default App;