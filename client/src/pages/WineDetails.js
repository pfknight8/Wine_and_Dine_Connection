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
    deleteWine(wine)
  }

  const goBack = (e) => {
    e.preventDefault()
    navigate('/wines')
  }
  
  const deleteWine = async (wine) => {
    try {
      // const { id } = wine.params
      await axios.delete(`http://localhost:3001/wineDB/wines/${wine._id}`)
      navigate('/wines')
    } catch (error) {
      alert("Unable to delete item!")
    }
  }

  const passedStateToggle = (bool) => {
    toggleEditing(bool)
  }

  // Render (return)
  return (
    <div className="wineDetails">
      <section id='wineInfo'>
        <h1>Wine Details</h1>
        {wine.image ? <img className="wineImg" src={wine.image} alt={wine.name} /> : null}
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
      </section>
      <aside id='wineOptions'>
        <h1>Page Info</h1>
        <div className="textHolder">
          <p>For the purposes of this website, the price ranges are as follows: </p>
            <ul>
              <li>value = $0- $14.99</li>
              <li>premium = $15 - $49.99</li>
              <li>luxury = $50 - $199.99</li>
              <li>icon $200+</li>
            </ul>
        </div>
        <h3>Page Controls</h3>
        <div className="buttonHolder">
          <button className="editBtn" onClick={editClick}>Edit</button>
          <button className="deleteBtn" onClick={handleDelete}>Delete</button>
          <button className="backBtn" onClick={goBack}>To Wine List</button>
        </div>
        <div className="textHolder">
          <p>See something wrong? Use the edit button to apply corrections.</p>
          <p>Broken beyond reapair? Inappropriate in some way? Use delete to remove this entry entirely.</p>
          <p>Want to return to the wine list? There's that option, as well.</p>
        </div>
        <div className="editFormHolder">
          {editing ? <WineForm wine={wine} passedStateToggle=
          {passedStateToggle}/> : null}
        </div>
      </aside>
    </div>
  )
}

export default WineDetails