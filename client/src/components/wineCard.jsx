const WineCard = ({ wine, onClick }) => {
  //
  return (
    <div className={`wineCard ${wine.category}Card`}>
      <div className="img-content">
        {wine.image ? <img className="wineCardImg" src={wine.image} alt={wine.name} /> : null}
      </div>
      <div className="infoBox">
        <h2>{wine.name}</h2>
        <ul className="infoList">
          <li>Category: {wine.category}</li> {/*May move to conditional formatting with css*/}
          <li>Varietal: {wine.varietal}</li>
          <li>Nation of Origin: {wine.country}</li>
        </ul>
      </div>
      <p onClick={onClick}>Click for details</p>
    </div>
  )
}

export default WineCard