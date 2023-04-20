import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PlantCard({ plantInfo }) {
    const { name, image, price } = plantInfo
  return (
    <li className="card">
        <Card  style={{ width: '10rem' }}>
            <Card.Img variant="top" src={image} alt={name}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price: ${price}</Card.Text>
                <Button variant="light">Delete</Button>{' '}
                <Button variant="light">Add to Cart</Button>
            </Card.Body>
        </Card>
    </li>
  )
}
