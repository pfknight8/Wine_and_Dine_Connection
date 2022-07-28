import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MealForm from "../components/MealForm";
import WineCard from "../components/wineCard";

const MealDetails = ({ meal, handleWineSelect }) => {
  // State
  const [editing, toggleEditing] = useState(false)
  const [searchFilters, setSearchFilters] = useState({})
  const [wineSuggestions, setWineSuggestions] = useState([])
  
  const navigate = useNavigate()
  // useEffects
  useEffect(() => {
    let varietalList = meal.wine_pairs.varietals
    let sweetList = meal.wine_pairs.sweetness
    let searchParams = {sweetness: sweetList, varietal: varietalList}
    setSearchFilters(searchParams)
    setWineSuggestions([])
  },[])

  const suggestWines = (e) => {
    e.preventDefault()
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/wineDB/wines/winelist', {params: searchFilters})
      setWineSuggestions(res.data.wines)
    }
    getWines()
  }
  // Functions
  const editClick = (e) => {
    switch(e.target.innerHTML) {
      case "Edit":
        toggleEditing(true)
        e.target.innerHTML = "Cancel"
        break
      case "Cancel":
        e.target.innerHTML = "Edit"
        toggleEditing(false)
        break
      default:
        alert("Something went egregiously wrong!")
    }
  }
  // handleDelete
  const handleDelete = (e) => {
    e.preventDefault
    deleteWine(meal)
  }

  const goBack = (e) => {
    e.preventDefault()
    navigate('/meals')
  }
  
  const deleteWine = async (meal) => {
    try {
      await axios.delete(`http://localhost:3001/wineDB/meals/${meal._id}`)
      navigate('/meals')
    } catch (error) {
      alert("Unable to delete item!")
    }
  }
  // Render (return)
  return (
    <div className="mealDetails">
      <h1>{meal.name}</h1>
      <div className="img-content">
        {meal.image ? <img scr={meal.image} alt={meal.name} /> : null}
      </div>
      <h2>Details</h2>
      <p>{meal.description}</p>
      <p>Category: {meal.category}</p>
      <h3>Suggested Wines Qualities:</h3>
      <p>Sweetness level: {meal.wine_pairs.sweetness}</p>
      <p>Varietals:</p>
      <ul className="infoList">
        {meal.wine_pairs.varietals.map((varietal) => (
          <li>{varietal}</li>
        ))}
      </ul>
      <div className="buttonHolder">
        <button className="editBtn" onClick={editClick}>Edit</button>
        <button className="deleteBtn" onClick={handleDelete}>Delete</button>
        <button className="backBtn" onClick={goBack}>To Meal List</button>
        <button className="findWines" onClick={suggestWines}>Suggest Wines</button>
      </div>
      <div className="editFormHolder">
        {editing ? <MealForm meal={meal} /> : null}
      </div>
      <div className="wineCards">
        {wineSuggestions?.map((wine, index) => (
        <div key={wine._id}>
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default MealDetails