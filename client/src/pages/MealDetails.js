import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MealForm from "../components/MealForm";

const MealDetails = ({ meal }) => {
  // State
  const [editing, toggleEditing] = useState(false)
  
  const navigate = useNavigate()
  // useEffects
  // Functions
  const editClick = (e) => {
    console.log(e.target.innerHTML)
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
  
  const deleteWine = async (meal) => {
    try {
      await axios.delete(`http://localhost:3001/wines/${meal._id}`)
      navigate('/meals')
    } catch (error) {
      alert("Unable to delete item!")
    }
  }
  // Render (return)
  return (
    <div className="mealDetails">
      <h1>Howdy!</h1>
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <ul className="infoList">
        <li>Category: {meal.category}</li>
        <li>Varietal: {meal.varietal}</li>
        <li>Nation of Origin: {meal.country}</li>
        <li>Region: {meal.region}</li>
        <li>Sweetness: {meal.sweetness}</li>
        <li>Price Range: {meal.price_range}</li>
      </ul>
      <button className="editBtn" onClick={editClick}>Edit</button>
      <button className="deleteBtn" onClick={handleDelete}>Delete</button>
      <div className="editFormHolder">
        {editing ? <MealForm meal={meal} /> : null}
      </div>
    </div>
  )
}

export default MealDetails