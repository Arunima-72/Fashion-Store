import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'


const Home = () => { const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div>
    <h1 style={{fontFamily:'-moz-initial', color:'purple', textAlign:'center'}}>Product List</h1>
<Grid  container spacing={3} padding= {3} margin={2}>
  {products.map((product)=>(
     <Grid  key={product.id} item xs={12} sm={6} md={4}>

      <Card  sx={{ maxWidth: 500,maxHeight:500} } style={{border:'1px solid purple', borderRadius:'10px'}}>
              <CardMedia
                component="img"
                height="100"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', p: 1 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{fontFamily:'-moz-initial', color:'blueviolet'}}>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontFamily:'-moz-initial',color:'coral', fontSize:'20px'}}>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{fontFamily:'-moz-initial',color:'darkcyan'}}>
                  Rating: {product.rating.rate} 
                </Typography>
              </CardContent>
            </Card>

     </Grid>
  
  ))}
   </Grid>  

</div>
   
  )
}

export default Home
