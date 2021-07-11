import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { HashLink } from "react-router-hash-link";

import PageBackground from "./components/PageBackground";
import Page from "./components/Page";
import PageContent from "./components/PageContent";
import AppBar from "./components/AppBar";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import Menu from "./components/Menu";
import Section from "./components/Section";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import PictureBlurbList from "./components/PictureBlurbList";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import * as api from "./api";
import { scrollWithOffset, breakpoint } from "./utils/misc";
import "./App.css";

const sections = [
  { id: "about-me", title: "About Me", dataKey: "aboutMe", component: AboutMe },
  {
    id: "projects",
    title: "Projects",
    dataKey: "projects",
    component: Projects,
  },
  {
    id: "experience",
    title: "Experience",
    dataKey: "experience",
    component: PictureBlurbList,
  },
  {
    id: "education",
    title: "Education",
    dataKey: "education",
    component: PictureBlurbList,
  },
  {
    id: "testimonials",
    title: "Testimonials",
    dataKey: "testimonials",
    component: Testimonials,
  },
  {
    id: "community",
    title: "Community",
    dataKey: "community",
    component: Community,
  },
  { id: "contact", title: "Contact", dataKey: "contact", component: Contact },
];

const App: React.FC<{}> = () => {
  const { width } = useWindowSize();
  const isMobile = width < breakpoint;
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    api.getPortfolioData().then(
      (data) => setState({ loading: false, data, error: null }),
      (error) => setState({ loading: false, data: null, error })
    );
  }, []);

  const navButtons = sections.map((n) => (
    <HashLink
      key={n.id}
      smooth
      to={`/#${n.id}`}
      scroll={(el) => scrollWithOffset(el)}
    >
      <Button key={n.id} hover onClick={() => setIsMenuOpen(false)}>
        {n.title}
      </Button>
    </HashLink>
  ));

  const { loading, data, error } = state;

  if (loading) {
  }

  return (
    <>
      <div role="alert">
        {loading
          ? "Loading..."
          : error
          ? `Something went wrong. Let Chris know (hi@chrishoward.com.au) with error: ${error}`
          : null}
      </div>
      {data && (
        <PageBackground className="App__background">
          <Page marginTopBottom>
            <Banner src="/images/banner.svg" />
            <AppBar dropShadow>
              {isMobile ? (
                <Button
                  hover
                  fullWidth
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Menu
                </Button>
              ) : (
                <Toolbar className="Toolbar--height-100pc">
                  {navButtons}
                </Toolbar>
              )}
            </AppBar>
            {isMenuOpen && <Menu>{navButtons}</Menu>}
            <PageContent dropShadow>
              {sections.map(
                ({ id, title, dataKey, component: Component }, i, arr) => {
                  const last = i + 1 === arr.length;
                  return (
                    <Section key={id} id={id} title={title} separator={!last}>
                      <Component data={(data as any)[dataKey]} />
                    </Section>
                  );
                }
              )}
            </PageContent>
          </Page>
        </PageBackground>
      )}
    </>
  );
};

export default App;
