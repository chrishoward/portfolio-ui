import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { HashLink } from "react-router-hash-link";

import PageBackground from "./components/PageBackground";
import Page from "./components/Page";
import AppBar from "./components/AppBar";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Menu from "./components/Menu";

import { nav } from "./mock/data.js";

const breakpoint = 959;

const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -70;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const App: React.FC<{}> = () => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoint;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navButtons = nav.map((n) => (
    <HashLink smooth to={`/#${n.id}`} scroll={(el) => scrollWithOffset(el)}>
      <Button key={n.id} hover onClick={() => setIsMenuOpen(false)}>
        {n.name}
      </Button>
    </HashLink>
  ));
  return (
    <PageBackground className="PageBackground--green">
      <Page fixedWidth marginTopBottom dropShadow>
        <AppBar className="AppBar--dark-green">
          {isMobile ? (
            <Button hover fullWidth onClick={() => setIsMenuOpen(!isMenuOpen)}>
              Menu
            </Button>
          ) : (
            <Toolbar className="Toolbar--height-100pc">{navButtons}</Toolbar>
          )}
        </AppBar>
        {isMenuOpen && <Menu>{navButtons}</Menu>}
        {nav.map((n, i) => (
          <div id={n.id} key={i} style={{ height: "150px" }}>
            <h1>{n.name}</h1>
          </div>
        ))}
      </Page>
    </PageBackground>
  );
};

export default App;
