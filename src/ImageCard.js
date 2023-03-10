import React from "react";
import { Card } from "react-bootstrap";

const ImageCard = ({ title, imageUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <img src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
