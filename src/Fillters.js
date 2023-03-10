import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Filters = ({ onFilterSelect }) => {
  const filters = ["flowers", "mountains", "dogs", "trees"];

  const handleFilterSelect = (filter) => {
    onFilterSelect(filter);
  };

  return (
    <Nav className="mb-4 mt-3 d-flex justify-content-center">
      <Nav.Item  className="p-3">
        <Nav.Link className="btn btn-dark text-white" as={Link} to="/" onClick={() => handleFilterSelect("flowers")}>
          All
        </Nav.Link>
      </Nav.Item>
      {filters.map((filter) => (
        <Nav.Item key={filter} className="p-3">
          <Nav.Link  className="btn btn-dark text-white" as={Link} to="/" onClick={() => handleFilterSelect(filter)}>
            {filter}
          </Nav.Link>
        </Nav.Item>
      ))}
      
    </Nav>
  );
};

export default Filters;
