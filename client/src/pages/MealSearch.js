import { useEffect, useState } from 'react'
import axios from 'axios'
import MealCard from '../components/mealCard'
import MealForm from '../components/MealForm'
import MealFilterBar from '../components/MealFilterBar'

const MealSearch = ({handleMealSelect}) => {
  // State
  const [meals, setMeals] = useState([])
  const [adding, toggleAdding] = useState(false)
  const [searchFilters, setSearchFilters] = useState({})
  const [filtering, toggleFiltering] = useState(false)
  //useEffects
  useEffect(() => {
    const getMeals = async () => {
      const res = await axios.get('/wineDB/meals/mealCards', {params: searchFilters})
      setMeals(res.data.meals)
    }
    getMeals()
  },[searchFilters])
  // Functions
  const addClick = (e) => {
    switch(e.target.innerHTML) {
      case "Add a Meal":
        toggleAdding(true)
        e.target.innerHTML = "Cancel"
        break
      case "Cancel":
        e.target.innerHTML = "Add a Meal"
        toggleAdding(false)
        break
      default:
        alert("Something went egregiously wrong!")
    }
  }

  const filterClick = (e) => {
    // Renders WineFilterBar and swaps the button as a reset.
    switch(e.target.innerHTML) {
      case "Filter Search":
        toggleFiltering(true)
        e.target.innerHTML = "Reset Filters"
        break
      case "Reset Filters":
        e.target.innerHTML = "Filter Search"
        toggleFiltering(false)
        setSearchFilters({})
        break
      default:
        alert("Something went egregiously wrong!")
    }
  }
  // Render (return)
  return (
    <div className="mealSearchPage">
      <div className='btnHolders'>
        <button id="filterBtn" onClick={filterClick}>Filter Search</button>
        <button id="newMealBtn" onClick={addClick}>Add a Meal</button>
      </div>
      <div id="searchOptions">
        {filtering ? <MealFilterBar searchFilters={searchFilters} setSearchFilters={setSearchFilters}/> : null}
      </div>
      <div className="cardHolder">
      {adding ? <MealForm meal={{wine_pairs: {}}} /> : meals.map((meal, index) => (
        <div key={meal._id}>
          <MealCard meal={meal} onClick={() => handleMealSelect(meal)}/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default MealSearch