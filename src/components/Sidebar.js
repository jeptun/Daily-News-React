import React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Weather from './Weather';
import NewsList from './NewsList';
import Radio from './Radio';

function Sidebar(props) {
  const { archives, social, title, description } = props;

  //Použité komponenty Weather.js Radio.js NewsList.js 
  return (
    <Grid item xs={12} md={4}>
      <Paper color="primary" elevation={1} sx={{ mx: 2,  p: 2, }}>
        <Typography  variant="h6" gutterBottom>
          {title}
        </Typography>
        <Weather />       
        <Typography variant="subtitle1" gutterBottom sx={{color: '#1976d2'}}>
          {description}
        </Typography> 
      </Paper>
      <Radio/>
      <NewsList/>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Témata
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
 
    </Grid>
  );
}



export default Sidebar;