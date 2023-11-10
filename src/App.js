import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import {  useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  // useEffect(()=>{
  //   setIsLoggedIn(false);
  // })


  return <div className="bg-[black] w-full min-h-screen">  
  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

  <Routes>

    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path="/Dashboard" element={<Dashboard/>}></Route>
    
  </Routes>

  </div>;
}

export default App;
