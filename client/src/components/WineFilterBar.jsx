const WineFilterBar = ({ searchFilters, setSearchFilters }) => {
  //
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch(e.target.id) {
      case "name":
        setSearchFilters({...searchFilters, name: formItem})
        break
      case "varietal":
        setSearchFilters({...searchFilters, varietal: formItem})
        break
      case "country":
        setSearchFilters({...searchFilters, country: formItem})
        break
      case "region":
        setSearchFilters({...searchFilters, region: formItem})
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
      case "sweetness":
        if (dropItem !== 'Select') {
          setSearchFilters({...searchFilters, sweetness: dropItem})
        } else {
          let tempFilters = {...searchFilters}
          delete tempFilters.sweetness
          setSearchFilters(tempFilters)
        }
        break
      case "priceRange":
        if (dropItem !== 'Select') {
          setSearchFilters({...searchFilters, price_range: dropItem})
        } else {
          let tempFilters = {...searchFilters}
          delete tempFilters.price_range
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
        <label htmlFor="varietal">Varietal: </label>
        <input className="filterField" id="varietal" onChange={handleFormChange}></input>
      </div>
      <div className="fBarItem">
        <label htmlFor="category">Category: </label>
        <select className="filterSelect" id="category" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Select</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Blush/Rose">Blush/Rose</option>
          <option value="Sparkling">Sparkling</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className="fBarItem">
        <label htmlFor="country">Country: </label>
        <input className="filterField" id="country" onChange={handleFormChange}></input>
      </div>
      <div className="fBarItem">
        <label htmlFor="region">Region: </label>
        <input className="filterField" id="region" onChange={handleFormChange}></input>
      </div>
      <div className="fBarItem">
        <label htmlFor="sweetness">Sweetness: </label>
        <select className="filterSelect" id="sweetness" onChange={handleDropDown} defaultValue={null}>
          <option value={null} aria-label="unselected">Select</option>
          <option value="Dry">Dry</option>
          <option value="Off-Dry">Off-Dry</option>
          <option value="Medium">Medium</option>
          <option value="Sweet">Sweet</option>
          <option value="Very-Sweet">Very Sweet</option>
        </select>
      </div>
      <div className="fBarItem">
        <label htmlFor="priceRange">Price Range: </label>
        <select className="filterSelect" id="priceRange" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Select</option>
          <option value="value" aria-label="value">"$"</option>
          <option value="premium" aria-label="premium">"$$"</option>
          <option value="luxury" aria-label="luxury">"$$$"</option>
          <option value="icon" aria-label="icon">"$$$$"</option>
        </select>
      </div>
    </form>
  )
}

export default WineFilterBar