import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WineSearch from "./pages/WineSearch";
import WineDetails from "./pages/WineDetails";
import MealSearch from "./pages/MealSearch";
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
    navigate(`/wines/${wine._id}`)
  }
  const handleMealSelect = (meal) => {
    // will do a "set" function
    setMealSelect(meal)
    // will navigate
    navigate(`/meals/${meal._id}`)
  }

  //Render (return)
  return (
    <div className="App">
      <img id='siteBannerImg' src='https://cdn.pixabay.com/photo/2016/11/29/05/07/cheese-platter-1867456_1280.jpg' alt="wine and cheese board"/>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={ <Home handleMealSelect={handleMealSelect} /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/wines/:wineId" element={ <WineDetails wine={wineSelect} /> } />
          <Route path="/wines" element={ <WineSearch handleWineSelect={handleWineSelect} /> } />
          <Route path="/meals/:mealId" element={ <MealDetails meal={mealSelect} handleWineSelect={handleWineSelect} /> } />
          <Route path="/meals" element={ <MealSearch handleMealSelect={handleMealSelect}/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App