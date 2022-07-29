const MealCard = ({ meal, onClick }) => {
    // State
  // useEffects
  // Functions
  // Render (return)
  return (
    <div className={`mealCard ${meal.category.split(" ").join('')}Card`}>
      <div className="img-content">
        {meal.image ? <img className="mealCardImg" src={meal.image} alt={meal.name} /> : null}
      </div>
      <div className="infoBox">
        <h2>Title: {meal.name}</h2>
        <p>Category: {meal.category}</p> {/*May move to conditional formatting with css*/}
      </div>
      <p onClick={onClick}>Click for details</p>
    </div>
  )
}

export default MealCard