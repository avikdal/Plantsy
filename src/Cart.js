import React from 'react'
import CartPlantCard from './CartPlantCard'

export default function Cart({ cartItems }) {
  console.log(cartItems)
  return (
    <div>
         <h3> Items in Cart </h3>
        {cartItems.map(plant => <CartPlantCard key={plant.id} plant={plant} />)}
    </div>
  )
}
