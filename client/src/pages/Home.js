import { useEffect, useState } from 'react'
import axios from 'axios'
import WineCard from '../components/wineCard'

const Home = ({ handleWineSelect, handleMealSelect }) => {
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
  //Render (return)
  return (
    <div className="homePage">
      {wines?.map((wine, index) => (
        <div key={wine._id}>
          <WineCard wine={wine} onClick={() => handleWineSelect(wine)}/>
        </div>
      ))}
    </div>
  )
  //Will display the landing page by default, then navigate to components from there.
}

export default Home