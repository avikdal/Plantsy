import React, { useState } from 'react'

export default function AddPlantForm({ addNewPlant }) {
    const [newPlant, setNewPlant] = useState({
        name: "",
        image: "",
        price: 0,
    })

    function handleSubmit(e){
        e.preventDefault()
        addNewPlant(newPlant)
        setNewPlant({
            name: "",
            image: "",
            price: 0,
        })
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Add New Plant</label>{' '}
        <input 
            type="text"
            placeholder="Plant Name ..."
            name="name"
            value={newPlant.name}
            onChange={e => setNewPlant({...newPlant, name: e.target.value})}
        />{' '}
        <input 
            type="text"
            placeholder="Plant Image"
            name="image"
            value={newPlant.image}
            onChange={e => setNewPlant({...newPlant, image: e.target.value})}
        />{' '}
        <input 
            type="number"
            placeholder="Plant Price"
            name="price"
            value={newPlant.price}
            onChange={e => setNewPlant({...newPlant, price: e.target.value})}
        />{' '}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
