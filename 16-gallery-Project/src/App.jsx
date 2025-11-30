import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  const [user, setUser] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    setUser(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="min-h-screen bg-black text-white p-6 overflow-auto">

      {/* Gallery Grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-6
        "
      >
        {user.length === 0 && (
          <h3 className="col-span-full text-center text-2xl font-bold">
            Loading...
          </h3>
        )}

        {user.map((data, idx) => (
          <a
            key={idx}
            href={data.url}
            target="_blank"
            className="
              block 
              bg-zinc-900 
              p-3 
              rounded-xl 
              hover:scale-[1.03] 
              hover:bg-zinc-800 
              transition 
              shadow-lg
            "
          >
            <div className="w-full h-48 overflow-hidden rounded-lg">
              <img
                src={data.download_url}
                className="w-full h-full object-cover"
                alt={data.author}
              />
            </div>
            <h2 className="text-center mt-2 font-semibold">{data.author}</h2>
          </a>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center mt-8 gap-6">
        <button
          className="
            bg-amber-400 
            text-black 
            rounded-xl 
            px-6 py-2 
            font-semibold 
            shadow-md 
            hover:bg-amber-300
          "
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUser([]);
            }
          }}
        >
          Prev
        </button>

        <button
          className="
            bg-amber-400 
            text-black 
            rounded-xl 
            px-6 py-2 
            font-semibold 
            shadow-md 
            hover:bg-amber-300
          "
          onClick={() => {
            if (index < 10) {
              setIndex(index + 1);
              setUser([]);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
