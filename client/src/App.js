import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WineDetails from "./pages/WineDetails";
import MealDetails from "./pages/MealDetails";
import NavBar from "./components/NavBar";
import "./App.css";
import { useState } from "react";


const App = () => {
  //State
  const [wineSelect, setWineSelect] = useState("")
  const [mealSelect, setMealSelect] = useState("")

  let navigate = useNavigate()

  //Functions
  const handleWineSelect = (wine) => {
    // will do a "set" function
    setWineSelect(wine)
    // will navigate
    navigate(`/wine/${wine._id}`)
  }
  const handleMealSelect = (wine) => {
    // will do a "set" function
    // will navigate
  }

  //Render (return)
  return (
    <div className="App">
      <NavBar />
      <main>
        <p>This is where the pages will render.</p>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/wine/:wineId" element={<WineDetails handleSelect={handleWineSelect}/>} />
          <Route path="/meal/:mealId" element={<MealDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App