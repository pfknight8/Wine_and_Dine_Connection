const MealFilterBar = ({ searchFilters, setSearchFilters }) => {
  //
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setSearchFilters({...searchFilters, name: formItem})
        break
      case "ingredient":
        setSearchFilters({...searchFilters, main_ingredient: formItem})
        break
      default:
        alert("Something is wrong!")
    }
  }

  const handleDropDown = (e) => {
    let dropItem = e.target.value
    switch(e.target.id) {
      case "category":
        setSearchFilters({...searchFilters, category: dropItem})
        break
      default:
        alert("Something went wrong with dropdown menu!")
    }
  }
  
  return (
    <div className="filters">
      <form className="filterBar">
        <label htmlFor="name">Name: </label>
        <input className="filterField" id="name" onChange={handleFormChange} defaultValue="" ></input>
        <label htmlFor="ingredient">Main Ingredient: </label>
        <input className="filterField" id="ingredient" onChange={handleFormChange}></input>
        <label htmlFor="category">Category: </label>
        <select className="filterSelect" id="category" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Select</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Palate Cleanser">Palate Cleanser</option>
          <option value="Main Course">Main Course</option>
          <option value="Cheeses">Cheese Board</option>
          <option value="Dessert">Dessert</option>
        </select>
      </form>
    </div>
  )
}

export default MealFilterBar