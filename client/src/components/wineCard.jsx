const WineCard = ({ wine }) => {
  //
  return (
    <div className="wineCard">
      <div className="img-content">
        {wine.image ? <img scr={wine.image} alt={wine.name} /> : null}
      </div>
      <div className="infoBox">
        <h2>{wine.name}</h2>
        <ul className="infoList">
          <li>Category: {wine.category}</li>
          <li>Varietal: {wine.varietal}</li>
          <li>Nation of Origin: {wine.country}</li>
          <li>Region: {wine.region}</li>
          <li>Price Range: {wine.price_range}</li>
        </ul>
        <p>{wine.description}</p>
      </div>
      <p>Click for details</p>
    </div>
  )
}

export default WineCard