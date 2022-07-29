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
    <div>
      <div className="mealDetails">
        <section id='mealInfo'>
          <h1>{meal.name}</h1>
          {meal.image ? <img className="mealImg" src={meal.image} alt={meal.name} /> : null}
          <h2>Details</h2>
          <p>{meal.description}</p>
          <p>Category: {meal.category}</p>
          <h3>Suggested Wines Qualities:</h3>
          <p>Sweetness level: {meal.wine_pairs.sweetness.map(sweetness => (<span> {sweetness}, </span>))}</p>
          <p>Varietals:</p>
          <ul className="infoList">
            {meal.wine_pairs.varietals.map((varietal) => (
              <li>{varietal}</li>
            ))}
          </ul>
        </section>
        <aside id='mealOptions'>
          <h2>Page Controls</h2>
          <div className="buttonHolder">
            <button className="editBtn" onClick={editClick}>Edit</button>
            <button className="deleteBtn" onClick={handleDelete}>Delete</button>
            <button className="backBtn" onClick={goBack}>To Meal List</button>
            <button className="findWines" onClick={suggestWines}>Wine Pairings</button>
          </div>
          <div className="textHolder">
            <p>See something wrong? Use the edit button to apply corrections.</p>
            <p>Broken beyond reapair? Inappropriate in some way? Use delete to remove this entry entirely.</p>
            <p>Want to return to the meal list? There's that option, as well.</p>
            <p>If you desire a list of wine recommedations, click wine pairings and the results will display below!</p>
          </div>
          <div className="editFormHolder">
            {editing ? <MealForm meal={meal} /> : null}
          </div>
        </aside>
      </div>
      <section id='mealWines'>
        {wineSuggestions?.map((wine, index) => (
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)} />
        ))}
      </section>
    </div>
  )
}

export default MealDetails