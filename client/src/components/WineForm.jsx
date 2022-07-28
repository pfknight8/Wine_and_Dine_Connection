import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const WineForm = ({ wine }) => {
  // Try to write generic first to see if can be used for both edit and update.
  let initialFormState = wine
  // {wine ? initialFormState = wine : initialFormState = { name: "", description: "", varietal: "", category: "", country: "", region: "", sweetness: "", price_range: "", image: "" }}
  const [formBody, setFormBody] = useState(initialFormState)
  
  let navigate = useNavigate()

  // useEffect(() => {},[])

  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setFormBody({...formBody, name: formItem})
        break
      case "description":
        setFormBody({...formBody, description: formItem})
        break
      case "varietal":
        setFormBody({...formBody, varietal: formItem})
        break
      case "country":
        setFormBody({...formBody, country: formItem})
        break
      case "region":
        setFormBody({...formBody, region: formItem})
        break
      default:
        alert("Something is wrong!")
    }
  }

  const handleDropDown = (e) => {
    let dropItem = e.target.value
    switch(e.target.id) {
      case "category":
        setFormBody({...formBody, category: dropItem})
        break
      case "sweetness":
        setFormBody({...formBody, sweetness: dropItem})
        break
      case "priceRange":
        setFormBody({...formBody, price_range: dropItem})
        break
      default:
        alert("Something went wrong with dropdown menu!")
    }
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
  }

  const formToDatabase = async (formBody) => {
    if (Object.keys(initialFormState).length === 0) {
      try {
        await axios.post(`http://localhost:3001/wines`, formBody)
        setFormBody({})
        navigate('/')
      } catch (error) {
        console.log('Error!')
      }
    } else {
      try {
        await axios.put(`http://localhost:3001/wines/${formBody._id}`, formBody)
        navigate('/wines')
      } catch (error) {
        console.log('Error!')
      }
    }
  }

  return (
    <div id="wineForm">
      <p>Instruct them.</p>
      <form className="infoCard" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label htmlFor="name">Name: </label>
          <input className="formField" id="name" onChange={handleFormChange} defaultValue={formBody.name}></input>
        </div>
        <div className="formDiv">
          <label htmlFor="varietal">Varietal: </label>
          <input className="formField" id="varietal" onChange={handleFormChange} defaultValue={formBody.varietal}></input>
        </div>
        <div className="formDiv">
          <label htmlFor="category">Category: </label>
          <select className="formSelect" id="category" onChange={handleDropDown} defaultValue={formBody.category} >
            <option value={null} aria-label="unselected">Please Select</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Blush/Rose">Blush/Rose</option>
            <option value="Sparkling">Sparkling</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="formDiv">
          <label htmlFor="country">Country: </label>
          <input className="formField" id="country" onChange={handleFormChange} defaultValue={formBody.country}></input>
        </div>
        <div className="formDiv">
          <label htmlFor="region">Region: </label>
          <input className="formField" id="region" onChange={handleFormChange} defaultValue={formBody.region}></input>
        </div>
        <div className="formDiv">
          <label htmlFor="description">Brief description: </label>
          <textarea className="formField" id="description" onChange={handleFormChange} defaultValue={formBody.description}></textarea>
        </div>
        <div className="formDiv">
          <label htmlFor="sweetness">Sweetness: </label>
          <select className="formSelect" id="sweetness" onChange={handleDropDown} defaultValue={formBody.sweetness} >
            <option value={null} aria-label="unselected">Please Select</option>
            <option value="Dry">Dry</option>
            <option value="Off-Dry">Off-Dry</option>
            <option value="Medium">Medium</option>
            <option value="Sweet">Sweet</option>
            <option value="Very-Sweet">Very Sweet</option>
          </select>
        </div>
        <div className="formDiv">
          <label htmlFor="priceRange">Price Range: </label>
          <select className="formSelect" id="priceRange" onChange={handleDropDown} defaultValue={formBody.price_range} >
            <option value={null} aria-label="unselected">Please Select</option>
            <option value="cheap" aria-label="cheap">"$"</option>
            <option value="affordable" aria-label="affordable">"$$"</option>
            <option value="expensive" aria-label="expensive">"$$$"</option>
            <option value="thousands" aria-label="thousands">"$K"</option>
          </select>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default WineForm