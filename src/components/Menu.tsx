import React, { ReactNode } from "react";

import "../styles/Menu.css";

interface Props {
  children: ReactNode;
}

const Menu: React.FC<Props> = ({ children }) => {
  return <div className="Menu">{children}</div>;
};

export default Menu;
