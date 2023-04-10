import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const GifItem = ({ gif }) => {
  return (
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
  );
};

export default GifItem;
