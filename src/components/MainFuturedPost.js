import  React, { useEffect, useState } from 'react';
import Axios from 'axios'

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";

function MainFeaturedPost(props) {
    
  const [articles, setArticles] = useState ([]);
  

  useEffect (() => {
    const getArticles = async () => {
        const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=cz&category=technology&pageSize=1&apiKey=ec41f72b88244678994239ffbbdd7003');

        setArticles(res.data.articles);
    };

    getArticles();
},[]);

  return (
    <div>
    {articles.map(({publishedAt, title, description, url, urlToImage}) =>(
    <Paper key={title}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${urlToImage})`,
      }}
    >
      {<img style={{ display: 'none' }} src={urlToImage} alt={url} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {publishedAt}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Button variant="contained" href={url} size="small"> ČÍST DÁL...
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    ))}
    </div>
  );
}



export default MainFeaturedPost;