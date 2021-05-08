import React, { ReactElement } from "react";

import "../styles/PageBackground.css";

const PageBackground: React.FC<Props> = ({ img, children }) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    className="PageBackground-container"
  >
    {children}
  </div>
);

interface Props {
  img?: string;
  children: ReactElement | null;
}

export default PageBackground;
