import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className=" d-flex justify-content-center" style={{width:"100%"}} >
    <Form onSubmit={handleSubmit} className="d-flex  gap-2">
      <Form.Group controlId="formBasicSearch">
        
        <Form.Control
          type="text"
         style={{marginTop:"30px"}}
          placeholder="Enter your search query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form.Group>
      <Button  variant="dark" type="submit" style={{height:"40px",marginTop:"30px"}}>
      search
      </Button>
    </Form>
    </div>
  );
};

export default SearchBar;
