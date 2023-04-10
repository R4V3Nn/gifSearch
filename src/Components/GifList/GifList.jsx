import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";

const GifList = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const lastIndex = currentPage * itemsPerPage;

  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = searchResults.slice(firstIndex, lastIndex);

  return (
    <>
      {currentItems.length === 0 ? (
        <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '300px' }}>
          <Grid item>
            <Typography variant="subtitle1">No results found.</Typography>
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container spacing={2}>
            {currentItems.map((gif) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={gif.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={gif.title}
                    image={gif.images.fixed_height.url}
                    title={gif.title}
                    height="200"
                  />
                  <CardContent>
                    <Typography variant="subtitle1">{gif.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={Math.ceil(searchResults.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            style={{ marginTop: "16px" }}
          />
        </>
      )}
    </>
  );
};

export default GifList;
