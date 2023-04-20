import React, { useEffect, useState }  from 'react'
import PlantList from './PlantList'
import AddPlantForm from './AddPlantForm'

export default function PlantPage() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/plants')
      .then(r => r.json())
      .then(data => setPlants(data))
    }, [])

    function addNewPlant(plant){
        console.log("new plant", plant)
        fetch('http://localhost:3000/plants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant),
        })
        .then(r => r.json())
        .then(plant => setPlants([...plants, plant]))
    }

    return (
   <div>
        <AddPlantForm addNewPlant={addNewPlant}/>
        <PlantList plants={plants} />
   </div>
  )
}
