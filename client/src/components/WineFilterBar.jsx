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
        setSearchFilters({...searchFilters, category: dropItem})
        break
      case "sweetness":
        setSearchFilters({...searchFilters, sweetness: dropItem})
        break
      case "priceRange":
        setSearchFilters({...searchFilters, price_range: dropItem})
        break
      default:
        alert("Something went wrong with dropdown menu!")
    }
  }

  const handleReset = (e) => {
    e.preventDefault()
    setSearchFilters({})
  }
console.log(searchFilters.sweetness)
  return (
    <div className="filters">
      <form className="filterBar" onReset={handleReset}>
        <label htmlFor="name">Name: </label>
        <input className="filterField" id="name" onChange={handleFormChange}></input>
        <label htmlFor="varietal">Varietal: </label>
        <input className="filterField" id="varietal" onChange={handleFormChange}></input>
        <label htmlFor="category">Category: </label>
        <select className="filterSelect" id="category" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Please Select</option>
          <option value="Red">Red</option>
          <option value="White">White</option>
          <option value="Blush/Rose">Blush/Rose</option>
          <option value="Sparkling">Sparkling</option>
          <option value="Dessert">Dessert</option>
        </select>
        <label htmlFor="country">Country: </label>
        <input className="filterField" id="country" onChange={handleFormChange}></input>
        <label htmlFor="region">Region: </label>
        <input className="filterField" id="region" onChange={handleFormChange}></input>
        <label htmlFor="sweetness">Sweetness: </label>
        <select className="filterSelect" id="sweetness" onChange={handleDropDown} defaultValue={searchFilters.sweetness}>
          <option value={undefined} aria-label="unselected">Please Select</option>
          <option value="Dry">Dry</option>
          <option value="Off-Dry">Off-Dry</option>
          <option value="Medium">Medium</option>
          <option value="Sweet">Sweet</option>
          <option value="Very-Sweet">Very Sweet</option>
        </select>
        <label htmlFor="priceRange">Price Range: </label>
        <select className="filterSelect" id="priceRange" onChange={handleDropDown}>
          <option value={null} aria-label="unselected">Please Select</option>
          <option value="cheap" aria-label="cheap">"$"</option>
          <option value="affordable" aria-label="affordable">"$$"</option>
          <option value="expensive" aria-label="expensive">"$$$"</option>
          <option value="thousands" aria-label="thousands">"$K"</option>
        </select>
        <button type="reset" className="resetSearch">Reset</button>
      </form>
    </div>
  )
}

export default WineFilterBar