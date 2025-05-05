import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Addproduct = () => 
  {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    rating: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!product.title) newErrors.title = 'Product Name is required';
    if (!product.image) newErrors.image = 'Image URL is required';
    if (!product.price || isNaN(product.price)) newErrors.price = 'Valid price is required';
   
    if (product.rating < 0 || product.rating > 5) newErrors.rating = 'Rating must be between 0 and 6';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('New Product:', product); 
      alert("Product added! (Check console)");
      
      setProduct({
        title: '',
        image: '',
        price: '',
        rating: ''
      });
    }
  };
  <div>
    <img src="/images/fashionstore.avif" alt="product" style={{width:'100px', height:'100px', marginLeft:'40%', marginTop:'20px'}}/>
  </div>
  return (
   
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom  sx={{ fontFamily: '-moz-initial', color: 'purple' }}>
        Add New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Product Name"
          name="title"
          value={product.title}
          onChange={handleChange}
          error={!!errors.title}
          helperText={errors.title}
          color='secondary'
        />
        <TextField
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          error={!!errors.image}
          helperText={errors.image}
          color='secondary'
        />
        <TextField
          label="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          error={!!errors.price}
          helperText={errors.price}
          color='secondary'
        />
        <TextField
          label="Rating"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          error={!!errors.rating}
          helperText={errors.rating}
        />
        <Button type="submit" variant="contained" color="secondary">
          Submit Product
        </Button>
      </Box>
    </Container>
  );
};


export default Addproduct
