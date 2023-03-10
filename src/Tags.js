import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { API_KEY, API_URL } from "./config";

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(`${API_URL}?method=flickr.tags.getHotList&api_key=${API_KEY}&count=20&format=json&nojsoncallback=1`);
      setTags(response.data.hottags.tag);
    };
    fetchTags();
  }, []);

  return (
    <Container>
      <h1>Tags</h1>
      <Row>
        {tags.map((tag) => (
          <Col key={tag.id}>
            <p>{tag._content}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Tags;
