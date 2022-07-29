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
      <section id="homeIntro">
        <h1>Welcome to the Wine & Dine Connection!</h1>
        <p>Here you can browse a selection of meals and generate appropriate wine pairings.<br />Click on "Browse Meals" to search from our database of meals.</p>
        <button id="searchMeal" onClick={handleNavClick}>Browse Meals</button>
      </section>
      <img id='homeImg' src='https://images.pexels.com/photos/8922189/pexels-photo-8922189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="meal with wine"/>
      <section id="toWineBrowse">
        <h2>The Wine Section</h2>
        <p>If you would prefer to view our databse of wines, click on "Browse Wines" instead.<br />If there is a wine missing that you feel deserves to be included, please feel free to add it to the database appropriately.</p>
        <button id="searchWine" onClick={handleNavClick}>Browse Wines</button>
      </section>
    </div>
  )
  //Will display the landing page by default, then navigate to components from there.
}

export default Home