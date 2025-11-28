import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);
    setUser(response.data)
  }

  useEffect(function () {
    getData();
  }, [index])

  let printUserData = <h3 className='text-white text-2xl font-bold'>NO User Available</h3>
  if (user.length > 0) {
    printUserData = user.map((data, idx) => {
      return <div key={idx} className='text-center'>
        <a href={data.url} target={'_blank'}>
          <div className='h-50 w-44 bg-white rounded-2xl'>
            <img className='h-full object-cover w-full rounded-xl' src={data.download_url} />
          </div>
          <h2 className=' text-white font-bold'>{data.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className="h-screen bg-black text-white p-5 overflow-auto">
      <div className='flex flex-wrap gap-5'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold' onClick={() => {
            if(index > 1) {
              setIndex(index + 1);
            }
          }}>
          Prev
        </button>
        <button
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setIndex(index +1);
          }}>
          Next
        </button>
      </div>
    </div>
  )
}
export default App;
