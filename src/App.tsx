import React, { useEffect, useState } from "react";

import PageBackground from "./components/PageBackground";
import Page from "./components/Page";
import PageContent from "./components/PageContent";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import * as api from "./api";
import { IData } from "./types";
import "./App.css";

interface State {
  loading: boolean;
  data: null | IData;
  error: null | string;
}

const App: React.FC<{}> = () => {
  const [state, setState] = useState<State>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    api.getPortfolioData().then(
      (data) => setState({ loading: false, data, error: null }),
      (error) => setState({ loading: false, data: null, error })
    );
  }, []);

  const { loading, data, error } = state;

  return (
    <>
      <div role="alert">
        {loading
          ? "Loading..."
          : error
          ? `Something went wrong. If you've got a minute, please let me know (hi@chrishoward.com.au) with error: ${error}`
          : null}
      </div>
      {data && (
        <PageBackground className="App__background">
          <Page marginTopBottom>
            <Banner src="/images/banner.svg" alt="Chris Howard" />
            <NavBar />
            <PageContent dropShadow>
              <AboutMe data={data.aboutMe} />
              <Projects data={data.projects} />
              <Experience data={data.experience} />
              <Education data={data.education} />
              <Testimonials data={data.testimonials} />
              <Community data={data.community} />
              <Contact data={data.contact} />
            </PageContent>
          </Page>
        </PageBackground>
      )}
    </>
  );
};

export default App;
