const App = () => {
  return (
    <div className="">
      <form className="p-5 flex gap-5 justify-evenly items-center">
        <div className="flex gap-5 flex-col w-1/3">
          <input type="text"
            placeholder="Enter task..."
            className="px-5 py-2 border-2 " />
          <input type="text"
            placeholder="Enter Details..."
            className="px-5 py-2 border-2 h-[60px] " />

          <button className="bg-white rounded text-black px-5 py-2 ">Add Note</button>
        </div>
       <img src="https://thumbs.dreamstime.com/b/man-working-laptop-desk-minimalist-white-line-art-icon-black-background-illustration-shows-person-focused-against-stark-403306174.jpg" alt="" className="w-1/5 h-70 "/>
      </form>
    </div>
  )
}
export default App