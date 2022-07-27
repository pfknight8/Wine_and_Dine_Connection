import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import WineCard from '../components/wineCard'
import WineSearch from './WineSearch'
import '../Home.css'

const Home = (props) => {
  //State
  let navigate = useNavigate()
  //useEffects
  //Functions
  const handleNavClick = (e) => {
    e.preventDefault()
    switch(e.target.id) {
      case "searchWine":
        navigate('/wines')
        break
      case "searchMeal":
        navigate('/meals')
        break
    }
  }
  //Render (return)
  return (
    <div className="homePage">
      <div id="searchBtns">
        <button id="searchWine" onClick={handleNavClick}>Browse Wines</button>
        <button id="searchMeal" onClick={handleNavClick}>Browse Meals</button>
      </div>
    </div>
  )
  //Will display the landing page by default, then navigate to components from there.
}

export default Home