import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";


const App = () => {
  //State

  let navigate = useNavigate()

  //Functions

  //Render (return)
  return (
    <div className="App">
      <NavBar />
      <main>
        <p>This is where the pages will render.</p>
      </main>
    </div>
  )
}

export default App