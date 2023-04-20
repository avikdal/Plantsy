import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CartPlantCard({ plant }) {

    const { id, name, image, price } = plant

    function handleClick(){
        console.log("this will do something soon")
    }

  return (
    <>
        <li className="card">
            <Card  style={{ width: '10rem' }}>
                <Card.Img variant="top" src={image} alt={name}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Button variant="light" onClick={handleClick}>Remove From Cart</Button>
                </Card.Body>
            </Card>
        </li>  
    </> 
  )
}
