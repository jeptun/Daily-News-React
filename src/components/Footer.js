import  React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

//Komponenta použita v App.js
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
     
      <Link color="inherit" href="https://github.com/jeptun?tab=repositories">
        Jeptun github &nbsp;
      </Link>
      {new Date().getFullYear()}
     <GitHubIcon/>
    </Typography>
  );
}

function Footer(props) {
  const { description } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Footer;