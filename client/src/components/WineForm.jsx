import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const WineForm = ({wine}) => {
  // Try to write generic first to see if can be used for both edit and update.
  let initialFormState;
  {wine ? initialFormState = wine : initialFormState = { name: "", description: "", varietal: "", category: "", country: "", region: "", sweetness: "", price_range: "", image: "" }}
  const [formBody, setFormBody] = useState(initialFormState)
  
  let navigate = useNavigate()

  // useEffect(() => {},[])

  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setFormBody({...formBody, name: formItem})
      case "description":
        setFormBody({...formBody, description: formItem})
        break
      default:
        alert("Something is wrong!")
    }
  }
  const handleDropDown = (e) => {
    let priceValue = e.target.value
    setFormBody({...formBody, price_range: priceValue})
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
  }
  console.log(formBody._id)
  const formToDatabase = async (formBody) => {
    //Will perform database function, reset state, and navigate back (or toggle editing)
    try {
      await axios.put(`http://localhost:3001/wines/${formBody._id}`, formBody)
      navigate('/wines')
    } catch (error) {
      console.log('Error!')
    }
  }
  //Place on submit a level up, as this form will be handed two different one for POST and PUT
  return (
    <div className="wineForm">
      <p>Instruct them.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input className="formField" id="name" defaultValue={formBody.name}></input>
        <label htmlFor="varietal">Varietal: </label>
        <input className="formField" id="varietal" defaultValue={formBody.varietal}></input>
        <label htmlFor="category">Category: </label>
        <select className="formSelect" id="category" onChange={handleDropDown} defaultValue={formBody.category} >
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Blush/Rose">Blush/Rose</option>
          <option value="Sparkling">Sparkling</option>
          <option value="Dessert">Dessert</option>
        </select>
        <label htmlFor="country">Country: </label>
        <input className="formField" id="country" defaultValue={formBody.country}></input>
        <label htmlFor="region">Region: </label>
        <input className="formField" id="region" defaultValue={formBody.region}></input>
        <textarea className="formField" id="description" onChange={handleFormChange} defaultValue={formBody.description}></textarea>
        <select className="formSelect" id="sweetness" onChange={handleDropDown} defaultValue={formBody.sweetness} >
          <option value="Dry">Dry</option>
          <option value="Off-Dry">Off-Dry</option>
          <option value="Medium">Medium</option>
          <option value="Sweet">Sweet</option>
          <option value="Very-Sweet">Very Sweet</option>
        </select>
        <select className="formSelect" id="priceRange" onChange={handleDropDown} defaultValue={formBody.price_range} >
          <option value="cheap" aria-label="cheap">"$"</option>
          <option value="affordable" aria-label="affordable">"$$"</option>
          <option value="expensive" aria-label="expensive">"$$$"</option>
          <option value="thousands" aria-label="thousands">"$K"</option>
        </select>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default WineForm