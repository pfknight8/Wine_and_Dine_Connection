import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import WineForm from "../components/WineForm";

const WineDetails = ({ wine }) => {
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
        alert("Something went aggregiously wrong!")
    }
  }
  // handleDelete
  const handleDelete = (e) => {
    e.preventDefault
    deleteWine(wine)
  }
  
  const deleteWine = async (wine) => {
    try {
      // const { id } = wine.params
      await axios.delete(`http://localhost:3001/wines/${wine._id}`)
      navigate('/')
    } catch (error) {
      alert("Unable to delete item!")
    }
  }

  // Render (return)
  return (
    <div className="wineDetails">
      <h1>Howdy!</h1>
      <h3>{wine.name}</h3>
      <p>{wine.description}</p>
      <ul className="infoList">
        <li>Category: {wine.category}</li>
        <li>Varietal: {wine.varietal}</li>
        <li>Nation of Origin: {wine.country}</li>
        <li>Region: {wine.region}</li>
        <li>Sweetness: {wine.sweetness}</li>
        <li>Price Range: {wine.price_range}</li>
      </ul>
      <button className="editBtn" onClick={editClick}>Edit</button>
      <button className="deleteBtn" onClick={handleDelete}>Delete</button>
      <div className="editFormHolder">
        {editing ? <WineForm wine={wine} /> : null}
      </div>
    </div>
  )
}

export default WineDetails