import React from "react";
import './App.css'
import { Bookmark } from 'lucide-react';

const App = ()=>{
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png" alt="amazon logo" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon.in  <span> 5 days ago</span> </h3>
          <h2>Senior Ui/Ux Engineer</h2>
          <div className="btn">
            <button>Part-Time</button>
            <button>Senior-Time</button>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
};
export default App;