import { useEffect, useState } from 'react'
import axios from 'axios'
import WineCard from '../components/wineCard'
import WineForm from '../components/WineForm'
import WineFilterBar from '../components/WineFilterBar'

const WineSearch = ({handleWineSelect}) => {
  //State
  const [wines, setWines] = useState([])
  const [adding, toggleAdding] = useState(false)
  const [searchFilters, setSearchFilters] = useState({})
  //useEffects
  useEffect(() => {
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/wines/winelist', {params: searchFilters})
      setWines(res.data.wines)
    }
    getWines()
  },[searchFilters])
  //Functions
  const addClick = (e) => {
    switch(e.target.innerHTML) {
      case "Add a Wine":
        toggleAdding(true)
        e.target.innerHTML = "Cancel"
        break
      case "Cancel":
        e.target.innerHTML = "Add a Wine"
        toggleAdding(false)
        break
      default:
        alert("Something went egregiously wrong!")
    }
  }
  
  // Not doing anything, but here until I can figure it out...
  const passedStateToggle = (bool) => {
    toggleAdding(bool)
  }

  // // Write the functions that adjust the search results based on selected keys
  //Render (return)
  return (
    <div className="wineSearchPage">
      <button id="newWineBtn" onClick={addClick}>Add a Wine</button>
      <div id="searchOptions">
        <WineFilterBar searchFilters={searchFilters} setSearchFilters={setSearchFilters}/>
      </div>
      {adding ? <WineForm wine={{}} passedStateToggle={passedStateToggle}/> : wines.map((wine, index) => (
        <div key={wine._id}>
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)}/>
        </div>
      ))}
    </div>
  )
}

export default WineSearch