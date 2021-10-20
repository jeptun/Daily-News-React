import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";

// Pages
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Footer from "./components/Footer";

const theme = createTheme();

const sections = [
  { title: "Domov", url: "/" },
  { title: "Technologie", url: "/technology" },
  { title: "Design", url: "/technology" },
  { title: "Business", url:  "/technology" },
  { title: "Politika", url: "/technology" },
  { title: "Sport", url:  "/technology" },
  { title: "Věda", url:  "/technology" },
  { title: "Zdraví", url:  "/technology" },
  { title: "Styl", url:  "/technology" },
  { title: "Cestování", url:  "/technology" },
  { title: "Games", url:  "/technology" },
];

//Použité komponenty NavBar.js Footer.js 
//Switch kopne stránku na home nebo technology atd...
function App() {
  return (
    <div className="App ">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <header>
          <NavBar  title="B-News" sections={sections} />
        </header>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/technology" component={Technology} />
            <Route path="/technology" component={Technology} />
          </Switch>
        </main>
        <footer>
        <Footer
          description="Zdrojový kód naleznete na Github."
        />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
