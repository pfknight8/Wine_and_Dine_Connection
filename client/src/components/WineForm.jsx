import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const WineForm = ({wine}) => {
  // Try to write generic first to see if can be used for both edit and update.
  const [formbody, setFormBody] = useState({})
  
  useEffect(() => {},[])

  const handleFormChange = (e) => {
    //
  }
  const handleDropDown = (e) => {
    let priceValue = e.target.value
    setFormBody({...formbody, price_range: priceValue})
  }

  return (
    <div className="wineForm">
      <p>Instruct them.</p>
      <textarea className="formField" id="name" onChange={handleFormChange} >{wine.name}</textarea>
      <select className="formSelect" id="priceRange" onChange={handleDropDown}>
        <option value="cheap">"$"</option>
        <option value="affordable">"$$"</option>
        <option value="expensive">"$$$"</option>
        <option value="thousands">"$K"</option>
      </select>
    </div>
  )
}

export default WineForm