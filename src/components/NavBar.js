import  React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Input from "@mui/material/Input";
import Tooltip from '@mui/material/Tooltip';

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Button  variant="outlined" size="small" sx={{ mx:1}} >Odběr</Button>
        <Typography
          component="h2"
          variant="h5"
          color="primary"
          align="center"
          noWrap
          sx={{ flex: 1 , textAlign: 'center'}}
        >
          {title}
        </Typography>
        <Input sx={{ color: 'primary.main' }} placeholder="Hledat..." />
        <Tooltip title="Hledat">
        <IconButton>
          <SearchIcon sx={{ color: 'primary.main' }} />
        </IconButton>
        </Tooltip>
        <Button variant="outlined" size="small">
          Přihlásit
        </Button>
      </Toolbar>

      {/* Menu sekcí*/}
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <IconButton aria-label="link" color="secondary"  key={section.title}> 
          <Link
            color="primary"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
          </IconButton>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
// const sections vytvořená v App.js pro Menu sekcí
Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
