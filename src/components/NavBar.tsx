import React, { ReactElement } from "react";

import "../styles/NavBar.css";

interface Props {
  children: ReactElement | null;
}

const NavBar: React.FC<Props> = ({ children }) => (
  <div className="NavBar__container">{children}</div>
);

export default NavBar;
