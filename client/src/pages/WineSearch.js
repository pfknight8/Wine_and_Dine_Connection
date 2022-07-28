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
  const [filtering, toggleFiltering] = useState(false)
  //useEffects
  useEffect(() => {
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/wineDB/wines/winelist', {params: searchFilters})
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
  // // Write the functions that adjust the search results based on selected keys
  //Render (return)
  return (
    <div className="wineSearchPage">
      <div className='btnHolders'>
        <button id="filterBtn" onClick={filterClick}>Filter Search</button>
        <button id="newWineBtn" onClick={addClick}>Add a Wine</button>
      </div>
      <div id="searchOptions">
        {filtering ? <WineFilterBar searchFilters={searchFilters} setSearchFilters={setSearchFilters}/> : null}
      </div>
      {adding ? <WineForm wine={{}} /> : wines.map((wine, index) => (
        <div key={wine._id}>
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)}/>
        </div>
      ))}
    </div>
  )
}

export default WineSearch