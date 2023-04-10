import React, { useState, useEffect } from "react";
import { TextField, Grid, Container, CircularProgress } from "@mui/material";

import GifList from "./Components/GifList";

import { apiKey } from "./config/config";

const GifApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGifs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&offset=0&limit=100&api_key=${apiKey}`
      );
      const data = await response.json();
      setSearchResults(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };


  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const getGifs = setTimeout(() => fetchGifs(), 300);

    return () => clearTimeout(getGifs);
  }, [searchQuery])

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '800px' }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search for GIFs"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </Grid>
        <Grid item xs={12}>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <GifList searchResults={searchResults} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default GifApp;
