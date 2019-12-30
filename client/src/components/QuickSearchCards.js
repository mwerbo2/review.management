import React from 'react'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

export default function QuickSearchCards() {
    return (
      <CardDeck>
         <Card className="text-center">
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lincoln_Square_%28117977633%29.jpg/800px-Lincoln_Square_%28117977633%29.jpg" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Body>
                <Card.Title>Hyde Park</Card.Title>
                <Card.Text>See Apartments</Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
        </Card>
        <Card className="text-center">
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Lincoln_Square_%28117977633%29.jpg/800px-Lincoln_Square_%28117977633%29.jpg" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Body>
                <Card.Title>Lincoln Square</Card.Title>
                <Card.Text>See Apartments</Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
        </Card>
        <Card className="text-center">
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Edgewater_Beach_Chicago.JPG/800px-Edgewater_Beach_Chicago.JPG" alt="Card image" />
            <Card.ImgOverlay>
            <Card.Body>
                <Card.Title>Edgewater</Card.Title>
                <Card.Text>See Apartments</Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
        </Card>
    </CardDeck>
    )
}
