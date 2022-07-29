const MealFilterBar = ({ searchFilters, setSearchFilters }) => {
  //
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setSearchFilters({...searchFilters, name: formItem})
        break
      default:
        alert("Something is wrong!")
    }
  }

  const handleDropDown = (e) => {
    let dropItem = e.target.value
    switch(e.target.id) {
      case "category":
        if (dropItem !== 'Select') {
          setSearchFilters({...searchFilters, category: dropItem})
        } else {
          let tempFilters = {...searchFilters}
          delete tempFilters.category
          setSearchFilters(tempFilters)
        }
        break
      default:
        alert("Something went wrong with dropdown menu!")
    }
  }
  
  return (
    <form className="filterBar">
      <div className="fBarItem">
        <label htmlFor="name">Name: </label>
        <input className="filterField" id="name" onChange={handleFormChange} defaultValue="" ></input>
      </div>
      <div className="fBarItem">
      <label htmlFor="category">Category: </label>
        <select className="filterSelect" id="category" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Select</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Palate Cleanser">Palate Cleanser</option>
          <option value="Main Course">Main Course</option>
          <option value="Cheeses">Cheese Board</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    </form>
  )
}

export default MealFilterBar