import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function Cards({title, subTitle, date, imageUrl, author}) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={author?.avatar} />
        <Card.Text>
        {author?.name}
      </Card.Text>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
     
      <Card.Text>
        {date}
      </Card.Text>
      <Card.Text>
        {subTitle}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}
