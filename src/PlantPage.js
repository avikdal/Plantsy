import React, { useEffect, useState }  from 'react'
import PlantList from './PlantList'
import AddPlantForm from './AddPlantForm'
import Cart from './Cart'

export default function PlantPage({ cartClicked }) {
    const [plants, setPlants] = useState([])
    const [cart, setCart] = useState([])

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

    function deletePlant(id){
        console.log("plant to delete", id)
        fetch(`http://localhost:3000/plants/${id}`, {
            method: "DELETE"
        })
        const updatedPlants = plants.filter(plant => plant.id !== id)
        setPlants(updatedPlants)
    }

    function addToCart(id){
        console.log("plant to add", id)
        let plantsInCart = plants.find(plant => plant.id === id)
        setCart([...cart, plantsInCart])
    }


    return (
   <div>
        { cartClicked ? <Cart cartItems={cart} /> :
        <>
        <AddPlantForm addNewPlant={addNewPlant}/>
        <PlantList plants={plants} deletePlant={deletePlant} addToCart={addToCart} />
        </>
        }
   </div>
  )
}
