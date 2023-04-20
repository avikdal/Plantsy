import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PlantCard({ plantInfo, deletePlant, addToCart }) {
    
  const { name, image, price, id } = plantInfo

  function handleDeleteClick(){
      deletePlant(id)
  }

  function handleCartClick(){
    addToCart(id)
  }

  return (
    <li className="card">
        <Card  style={{ width: '10rem' }}>
            <Card.Img variant="top" src={image} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button variant="light" onClick={handleDeleteClick}>Delete</Button>{' '}
                <Button variant="light" onClick={handleCartClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    </li>
  )
}
