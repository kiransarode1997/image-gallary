import React from "react";
import { Card, Col, Row } from "react-bootstrap";


const ImageGallery = ({ images }) => {
  return (
    <Row>
      {images.map((image) => (
        <Col md={3} key={image.id}>
          <Card>
            <Card.Img variant="top"  src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
            <Card.Body>
              {/* <Card.Title>{image.title}</Card.Title> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ImageGallery

