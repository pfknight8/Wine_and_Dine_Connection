import { useEffect, useState } from "react";

const WineDetails = ({ wine }) => {
  // State
  // useEffects
  // Functions
  // Render (return)
  return (
    <div className="wineDeets">
      <h1>Howdy!</h1>
      <h3>{wine.name}</h3>
      <p>{wine.description}</p>
      <ul className="infoList">
        <li>Category: {wine.category}</li>
        <li>Varietal: {wine.varietal}</li>
        <li>Nation of Origin: {wine.country}</li>
        <li>Region: {wine.region}</li>
        <li>Sweetness: {wine.sweetness}</li>
        <li>Price Range: {wine.price_range}</li>
      </ul>
    </div>
  )
}

export default WineDetails