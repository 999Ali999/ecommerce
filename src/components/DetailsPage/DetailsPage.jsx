import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [products, setProducts] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {products ? (
        <Grid key={id} item xs={6} sm={4} md={2}>
          <Typography>{products.title}</Typography>
        </Grid>
      ) : (
        <Box sx={{ width: "100%" }}>
          <CircularProgress color="inherit" />
        </Box>
      )}
    </Box>
  );
};

export default DetailsPage;
