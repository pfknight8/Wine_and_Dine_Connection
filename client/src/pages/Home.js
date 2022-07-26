import { useEffect, useState } from 'react'
import axios from 'axios'
import WineCard from '../components/wineCard'

const Home = (props) => {
  //State
  const [wines, setWines] = useState([])
  //useEffects
  useEffect(() => {
    const getWines = async () => {
      const res = await axios.get('http://localhost:3001/wines/winelist')
      console.log(res.data.wines)
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
          <WineCard wine={wine}/>
        </div>
      ))}
    </div>
  )
  //Will display the landing page by default, then navigate to components from there.
}

export default Home