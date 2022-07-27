import { useEffect, useState } from 'react'
import axios from 'axios'
import MealCard from '../components/mealCard'
import MealForm from '../components/MealForm'

const MealSearch = ({handleMealSelect}) => {
  // State
  const [meals, setMeals] = useState([])
  const [adding, toggleAdding] = useState(false)
  //useEffects
  useEffect(() => {
    const getMeals = async () => {
      const res = await axios.get('http://localhost:3001/meals/mealCards')
      setMeals(res.data.meals)
    }
    getMeals()
  },[adding])
  // Functions
  const addClick = (e) => {
    console.log(e.target.innerHTML)
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
  // Render (return)
  return (
    <div className="mealSearchPage">
      <button id="newMealBtn" onClick={addClick}>Add a Meal</button>
      <div id="searchOptions">
        <button>Search By:</button>
      </div>
      {adding ? <MealForm meal={{}} /> : meals.map((meal, index) => (
        <div key={meal._id}>
          <MealCard meal={meal} onClick={() => handleMealSelect(meal)}/>
        </div>
      ))}
    </div>
  )
}

export default MealSearch