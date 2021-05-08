import React from "react";

import PageBackground from "./components/PageBackground";

const img =
  "https://cdn11.bigcommerce.com/s-ed393/images/stencil/1280x1280/products/10942/13808/plain_20_helium_balloons__52132.1518656035.jpg?c=2";

const App: React.FC<{}> = () => (
  <PageBackground img={img}>
    <span>Hello</span>
  </PageBackground>
);

export default App;
