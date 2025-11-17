import Page1 from "./components/page1/page1"
import Page2 from "./components/page2/page2"
const App = ()=>{
  const user = [
    {img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',intro: '', tag: 'Satisfied'},
    {img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', intro: '', tag: 'Underbanked'},
    {img : 'https://images.unsplash.com/photo-1635766854898-ad3766e5f5e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=672', intro: '', tag: 'Unserved'},
    {
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuK5yx4YLpIKuLoMqbgyC4JdC5iuhIqM3cjw&s",
      intro: " ",
      tag : "Average"
    }
  ];
  return(
    <div >
      <Page1 user={user}/>
    </div>
  )
}
export default App;