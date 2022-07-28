import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const MealForm = ({meal}) => {
  //State
  let initialFormState = meal;
  const [formBody, setFormBody] = useState(initialFormState)
  
  let navigate = useNavigate()

  // useEffect(() => {},[])

  const handleFormChange = (e) => {
    let formItem = e.target.value
    let wineProps = formBody.wine_pairs
    switch(e.target.id) {
      case "name":
        setFormBody({...formBody, name: formItem})
        break
      case "description":
        setFormBody({...formBody, description: formItem})
        break
      case "varietals":
        let varietalArr = formItem.split(',')
        let newProps = {...wineProps, varietals: varietalArr}
        setFormBody({...formBody, wine_pairs: newProps})
        break
      case "image":
        setFormBody({...formBody, image: formItem})
        break
      default:
        alert("Something is wrong!")
    }
  }
  const handleDropDown = (e) => {
    let dropItem = e.target.value
    let wineProps = formBody.wine_pairs
    switch(e.target.id) {
      case "category":
        setFormBody({...formBody, category: dropItem})
        break
      case "sweetness":
        let newProps = {...wineProps, sweetness: dropItem}
        setFormBody({...formBody, wine_pairs: newProps})
        break
      default:
        alert("Something is wrong with dropdown menu!")
    }
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
  }

  const formToDatabase = async (formBody) => {
    //Will perform database function, reset state, and navigate back (or toggle editing)
    console.log(formBody)
    if (formBody._id === undefined) {
      try {
        await axios.post(`http://localhost:3001/meals`, formBody)
        setFormBody({wine_pairs:{}})
        navigate('/')
      } catch (error) {
        console.log('Error!')
      }
    } else {
      try {
        await axios.put(`http://localhost:3001/meals/${formBody._id}`, formBody)
        navigate('/meals')
      } catch (error) {
        console.log('Error!')
      }
    }
  }
  //
  return (
    <div id="mealForm">
      <form className="infoCard" onSubmit={handleSubmit}>
        <div className="formDiv">
          <label htmlFor="name">Name: </label>
          <input className="formField" id="name" onChange={handleFormChange} defaultValue={formBody.name}></input>
        </div>
        <div className="formDiv">
          <label htmlFor="category">Category: </label>
          <select className="formSelect" id="category" onChange={handleDropDown} defaultValue={formBody.category} >
            <option value={null} aria-label="unselected">Select</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Palate Cleanser">Palate Cleanser</option>
            <option value="Main Course">Main Course</option>
            <option value="Cheeses">Cheese Board</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="formDiv">
          <label htmlFor="description">Add a brief description: </label>
          <textarea className="formField" id="description" onChange={handleFormChange} defaultValue={formBody.description}></textarea>
        </div>
        <div className="formDiv">
          <label htmlFor="wine_pairs">Wine Pairing: </label>
          <label htmlFor="sweetness">Sweetness: </label>
          <select className="formSelect" id="sweetness" onChange={handleDropDown} defaultValue={formBody.wine_pairs.sweetness} >
            <option value={null} aria-label="unselected"></option>
            <option value="Dry">Dry</option>
            <option value="Off-Dry">Off-Dry</option>
            <option value="Medium">Medium</option>
            <option value="Sweet">Sweet</option>
            <option value="Very-Sweet">Very Sweet</option>
          </select>
        </div>
        <div className="formDiv">
          <label htmlFor="varietals">Varietals: </label>
          <textarea className="formField" id="varietals" onChange={handleFormChange} defaultValue={formBody.wine_pairs.varietals}></textarea>
        </div>
        <div className="formDiv">
          <label htmlFor="image">Image: </label>
          <textarea className="formField" id="image" onChange={handleFormChange} defaultValue={formBody.image}></textarea>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default MealForm