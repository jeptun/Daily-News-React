import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const cards = [0];

//Změna breakpoints 
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

//Komponenta použita v NewsList.js
const NewsItem = ({ publishedAt, title, url, urlToImage }) => {
  return (
    <ThemeProvider theme={theme}>
    <Container sx={{ py: 2 }} xs={12} md={6}>
      <Grid container>
        {cards.map((card) => (
          <Card key={card} sx={{width: 450, display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 200, display: { tablet: "none", desktop: "block" } }}
              image={urlToImage}
              alt={url}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography paragraph  variant="body1">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {publishedAt}
              </Typography>
             
              <CardActions>
                <Button variant="contained" href={url} size="small">
                  Číst dál...
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
    </ThemeProvider>
  );
};

export default NewsItem;
