import React from 'react';
import Link from 'next/link';
import {Card, Button} from "react-bootstrap";
import {urlFor} from 'lib/api';

export default function Cards({title, subTitle, date, imageUrl, author, link}) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={urlFor(author?.avatar).height(50)} />
        <Card.Text>
        {author?.name}
      </Card.Text>
    <Card.Img variant="top"src={urlFor(imageUrl).height(200)} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
     
      <Card.Text>
        {date}
      </Card.Text>
      <Card.Text>
        {subTitle}
      </Card.Text>
      {link &&
        // <Link href='blog/[slug]' as={`blog/${slug}`}>
        <Link {...link}>
        <Button variant="primary" >Go somewhere</Button>
        </Link>
      }
    </Card.Body>
  </Card>
  )
}
