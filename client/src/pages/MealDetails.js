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
      <h1>{meal.name}</h1>
      <div className="img-content">
        {meal.image ? <img scr={meal.image} alt={meal.name} /> : null}
      </div>
      <h3>Details</h3>
      <p>{meal.description}</p>
      <p>Category: {meal.category}</p>
      <p>Suggested Wines:</p>
      <ul className="infoList">
        <li>38</li>
        <li>34</li>
      </ul>
      <div className="buttonHolder">
        <button className="editBtn" onClick={editClick}>Edit</button>
        <button className="deleteBtn" onClick={handleDelete}>Delete</button>
      </div>
      <div className="editFormHolder">
        {editing ? <MealForm meal={meal} /> : null}
      </div>
    </div>
  )
}

export default MealDetails