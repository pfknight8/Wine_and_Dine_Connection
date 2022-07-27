import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

const MealForm = () => {
  //State
  let initialFormState;
  {meal ? initialFormState = meal : initialFormState = { name: "", description: "", category: "", wine_pairs: "", image: "" }}
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
    try {
      await axios.put(`http://localhost:3001/meals/${formBody._id}`, formBody)
      navigate('/meals')
    } catch (error) {
      console.log('Error!')
    }
  }
  //
  return (
    <div className="mealForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input className="formField" id="name" onChange={handleFormChange} defaultValue={formBody.name}></input>
        <label htmlFor="description">Add a brief description: </label>
        <textarea className="formField" id="description" onChange={handleFormChange} defaultValue={formBody.description}></textarea>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default MealForm