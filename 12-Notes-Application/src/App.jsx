import { useState } from "react"
import React from "react";

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask)
    setTitle('');
    setDetail('');
  }

  return (
    <div className=" p-5">
      <form className=" flex gap-5 justify-evenly items-center mb-5" onSubmit={(e) => {
        submitHandler(e)
      }}>
        <div className="flex gap-5 flex-col w-1/3">
          <input type="text"
            placeholder="Enter task..."
            className="px-5 py-2 border-2 "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }} />

          <textarea className="px-5 py-2 border-2 h-30 "
            placeholder="write details"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}>
          </textarea>

          <button className="bg-white rounded text-black px-5 py-2 ">Add Note</button>
        </div>
      </form>
      <div className="flex gap-10 p-10 flex-col">
        <h2 className="font-medium text-4xl">Recent Notes</h2>
        <div className="flex flex-wrap gap-20 ">
          {task.map((elem, index) => {
            return <div key={index} className="h-70 w-60 overflow-hidden text-black bg-[url('https://img.freepik.com/free-vector/leafy-patterned-note-background_53876-97734.jpg?semt=ais_hybrid&w=740&q=80')]
             rounded-2xl p-10 bg-cover bg-no-repeat">
              <h3 className="mb-3 font-bold">{elem.title}</h3>
              <p>{elem.detail}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App;