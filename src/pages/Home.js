import React from "react";
import MainFeaturedPost from "../components/MainFuturedPost";
import Divider from "@mui/material/Divider";
import Sidebar from "../components/Sidebar";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Main from "../components/Main";

const sidebar = {
  title: "⛅Počasí",
  description: "Pro zobrazení aktuálního počasí zadejte polohu města.",
  archives: [
    { title: "Domov", url: "#" },
    { title: "Technologie", url: "#" },
    { title: "Design", url: "#" },
    { title: "Busines", url: "#" },
    { title: "Politika", url: "#" },
    { title: "Sport", url: "#" },
    { title: "Věda", url: "#" },
    { title: "Zdraví", url: "#" },
    { title: "Styl", url: "#" },
    { title: "Cestování", url: "#" },
    { title: "Games", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

function Home() {
  return (
    <div>
      <MainFeaturedPost />
      <Grid container spacing={5} sx={{ mt: 3, pl: 2 }}>
        <Main title="Domov"/>
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>

      <Divider />
    </div>
  );
}
export default Home;
