import './App.css'
import Card from "./components/card";

const jobOpenings = [
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    companyName: "Google",
    role: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: { city: "Mountain View", country: "USA" },
    datePosted: "2025-10-28"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx0cmENacsYu8Z3kwcrZJRqc8oFsWe2n3Q&s",
    companyName: "Microsoft",
    role: "Backend Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 60,
    location: { city: "Seattle", country: "USA" },
    datePosted: "2025-11-01"
  },
  {
    companyLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    role: "UI/UX Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 35,
    location: { city: "Los Gatos", country: "USA" },
    datePosted: "2025-10-26"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
    companyName: "Amazon",
    role: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: { city: "New York", country: "USA" },
    datePosted: "2025-11-03"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg",
    companyName: "Spotify",
    role: "Frontend Developer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 40,
    location: { city: "Stockholm", country: "Sweden" },
    datePosted: "2025-10-30"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrQu6s1_NCCLb8kn1HD7y3kzBJgMN8e6HYA&s",
    companyName: "Tesla",
    role: "Full Stack Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 65,
    location: { city: "Austin", country: "USA" },
    datePosted: "2025-10-25"
  },
  {
    companyLogo: "https://fabrikbrands.com/wp-content/uploads/Adobe-Logo-History-4.png",
    companyName: "Adobe",
    role: "UI Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 38,
    location: { city: "San Jose", country: "USA" },
    datePosted: "2025-10-29"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
    companyName: "Meta",
    role: "Frontend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 68,
    location: { city: "Menlo Park", country: "USA" },
    datePosted: "2025-11-05"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOI8znsw1Wl6eyfPcvrBICg-V42Rmc9h_e9A&s",
    companyName: "Airbnb",
    role: "Backend Engineer",
    tag: "Part Time",
    tag2: "Junior Level",
    payPerHour: 42,
    location: { city: "San Francisco", country: "USA" },
    datePosted: "2025-10-31"
  },
  {
    companyLogo: "https://cdn.iconscout.com/icon/free/png-256/free-stripe-logo-icon-svg-download-png-2945188.png",
    companyName: "Stripe",
    role: "DevOps Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    payPerHour: 72,
    location: { city: "Dublin", country: "Ireland" },
    datePosted: "2025-11-06"
  }
];

const App = ()=>{
  return (
    <div className="parent">
      {
        jobOpenings.map(function(ele, idx){
          return <Card obj={ele} key={idx}/>
        })
      }
    </div>
  )

};
export default App;