import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { HashLink } from "react-router-hash-link";

import Button from "./Button";
import AppBar from "./AppBar";
import Toolbar from "./Toolbar";
import Menu from "./Menu";
import { scrollWithOffset, breakpoint } from "../utils/misc";

const sections = [
  { id: "about-me", title: "About Me" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "testimonials", title: "Testimonials" },
  { id: "community", title: "Community" },
  { id: "contact", title: "Contact" },
];

interface NavButtonsProps {
  onClick?: () => void | undefined;
}

const NavButtons: React.FC<NavButtonsProps> = ({ onClick }) => (
  <>
    {sections.map((n) => (
      <HashLink
        key={n.id}
        smooth
        to={`/#${n.id}`}
        scroll={(el) => scrollWithOffset(el)}
      >
        <Button key={n.id} hover onClick={onClick}>
          {n.title}
        </Button>
      </HashLink>
    ))}
  </>
);

const NavBar: React.FC<{}> = () => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoint;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <AppBar dropShadow>
        {isMobile ? (
          <Button
            hover
            onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
          >
            Menu
          </Button>
        ) : (
          <Toolbar className="Toolbar--height-100pc">
            <NavButtons />
          </Toolbar>
        )}
      </AppBar>
      {isMobile && isMenuOpen && (
        <Menu>
          <NavButtons onClick={() => setIsMenuOpen(false)} />
        </Menu>
      )}
    </>
  );
};

export default NavBar;
