import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Filters from "./Fillters";
import ImageGallery from "./ImageGallery";
import { API_KEY, API_URL } from "./config";

const Home = () => {
  const [query, setQuery] = useState("flowers");
  const [images, setImages] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
  };

  const handleFilterSelect = (filter) => {
    setQuery(filter);
  };

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get(`${API_URL}?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`);
      setImages(response.data.photos.photo);
    };
    fetchImages();
  }, [query]);

  return (
    <div className="container">
      
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterSelect={handleFilterSelect} />
      <h1 className="text-center">Dynamic Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default Home;
