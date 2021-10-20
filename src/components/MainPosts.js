import  React, { useEffect, useState } from 'react';
import Axios from 'axios'


import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import Grid from '@mui/material/Grid';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";

import CardActions from "@mui/material/CardActions";
import HoverRating from './HoverRating';

function MainPosts(props) {

  const [articles, setArticles] = useState ([]);

  //Upload dat Axios Newsapi
  useEffect (() => {
    const getArticles = async () => {
        const res = await Axios.get('https://newsapi.org/v2/top-headlines?country=cz&pageSize=7&apiKey=ec41f72b88244678994239ffbbdd7003');

        setArticles(res.data.articles);
    };

    getArticles();
},[]);

//Komponenta použita v Main.js
//Použitá komponenta HoverRating.js
  return (
    <Container sx={{ py: 2 }} xs={12} md={6}>
    {articles.map(({publishedAt, card, title, description, url, urlToImage}) =>(
        <Grid container key={title} sx={{ py: 2 }}>
          <Card key={card} sx={{  width: 950, display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 250, display: { xs: "none", sm: "block" } }}
              image={urlToImage}
              alt={url}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography paragraph component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {publishedAt}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
              <HoverRating/>
              <CardActions>
                <Button variant="contained" href={url} size="small">
                  Číst dál...
                </Button>
              </CardActions>
            </CardContent>
          </Card>
      </Grid>
    ))}
    </Container>
  );
}

export default MainPosts;