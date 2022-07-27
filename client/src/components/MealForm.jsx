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
    switch(e.target.id) {
      case "name":
        setFormBody({...formBody, name: formItem})
        break
      case "description":
        setFormBody({...formBody, description: formItem})
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
      default:
        alert("Something is wrong with dropdown menu!")
    }
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    formToDatabase(formBody)
  }
  console.log(formBody._id)
  const formToDatabase = async (formBody) => {
    //Will perform database function, reset state, and navigate back (or toggle editing)
    if (Object.keys(initialFormState).length === 0) {
      try {
        await axios.post(`http://localhost:3001/meals`, formBody)
        setFormBody({})
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
        <label htmlFor="name">Name: </label>
        <input className="formField" id="name" onChange={handleFormChange} defaultValue={formBody.name}></input>
        <select className="formSelect" id="category" onChange={handleDropDown} defaultValue={formBody.category} >
          <option value={null} aria-label="unselected">Please Select</option>
          <option value="appetizer">Appetizer</option>
          <option value="dinner">Dinner</option>
          <option value="main_course">Main Course</option>
          <option value="cheeses">Cheese Board</option>
          <option value="Dessert">Dessert</option>
        </select>
        <label htmlFor="description">Add a brief description: </label>
        <textarea className="formField" id="description" onChange={handleFormChange} defaultValue={formBody.description}></textarea>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default MealForm