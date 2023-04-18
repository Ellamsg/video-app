import React from "react";
import "./App.css";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="" >
      <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/room/:roomID" element={<Room/>}/>
     </Routes>
    </div>
  );
}

export default App;
