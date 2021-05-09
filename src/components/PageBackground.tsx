import React, { ReactElement } from "react";

import "../styles/PageBackground.css";

interface Props {
  img?: string;
  children: ReactElement | null;
}

const PageBackground: React.FC<Props> = ({ img, children }) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className="PageBackground__container"
  >
    {children}
  </div>
);

export default PageBackground;
