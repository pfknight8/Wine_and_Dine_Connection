import { useEffect, useState } from 'react'
import axios from 'axios'
import WineCard from '../components/wineCard'

const WineSearch = ({handleWineSelect}) => {
  //State
  const [wines, setWines] = useState([])
  //useEffects
  useEffect(() => {
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/wines/winelist')
      setWines(res.data.wines)
    }
    getWines()
  },[])
  //Functions
  // // Write the functions that adjust the search results based on selected keys
  //Render (return)
  return (
    <div className="wineSearchPage">
      <button id="newWineBtn">Add Wine to List</button>
      <div id="searchOptions">
        <button>Search By:</button>
      </div>
      {wines?.map((wine, index) => (
        <div key={wine._id}>
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)}/>
        </div>
      ))}
    </div>
  )
}

export default WineSearch