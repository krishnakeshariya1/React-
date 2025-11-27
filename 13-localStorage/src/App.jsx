const App = ()=>{
  localStorage.setItem('admin', 'krishna keshariya');
console.log(localStorage.getItem('admin'));
localStorage.removeItem('admin')

const admin = {
  adminName : "krishna keshariya",
  age : 21,
  city : "Gwalior"
}
localStorage.setItem("admin",JSON.stringify(admin)); // we use json.stringify to convert obj into string
console.log(localStorage.getItem("admin"));
localStorage.clear();
  return(
    <div>App</div>
  )
}
export default App