import React from 'react'
import PlantCard from './PlantCard'


export default function PlantList({ plants, deletePlant, cart, addToCart }) {

    const plantCards = plants.map(plant => <PlantCard key={plant.id} plantInfo={plant} deletePlant={deletePlant} addToCart={addToCart} />)

  return (
    <div>
        <ul className="cards">
            {plantCards}
        </ul>
    </div>
  )
}
