import  React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MainPosts from './MainPosts';


function Main(props) {
  const {  title } = props;

  //Použita komponenta MainPost.js
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{p:2}}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <MainPosts/>
    </Grid>
  );
}



export default Main;