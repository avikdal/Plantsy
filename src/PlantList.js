import React from 'react'
import PlantCard from './PlantCard'


export default function PlantList({ plants }) {

    const plantCards = plants.map(plant => <PlantCard key={plant.id} plantInfo={plant} />)

  return (
    <div>
        <ul className="cards">
            {plantCards}
        </ul>
    </div>
  )
}
