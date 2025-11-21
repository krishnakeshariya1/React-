
const App = () => {
  const btnClick = () => {
    console.log("Hey button clicked");
  }
  const clicking = (val) => {
    console.log(val)
  }
  return (
    <div>
      <button onClick={btnClick}>Click me</button>
      <button onClick={() => {
        console.log("clicked")
      }}> click meee</button>

      <div>
        <input type="text" placeholder="enter something" onChange={function (element) {
          clicking(element.target.value)
        }} />
      </div>
    </div>
  )
}
export default App