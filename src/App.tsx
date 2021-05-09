import React from "react";

import PageBackground from "./components/PageBackground";
import Page from "./components/Page";
import NavBar from "./components/NavBar";

const img =
  "https://iconarchive.com/download/i85353/graphicloads/android-settings/plus.ico";

const App: React.FC<{}> = () => (
  <PageBackground img={img}>
    <Page>
      <NavBar>
        <span>Hello</span>
      </NavBar>
    </Page>
  </PageBackground>
);

export default App;
