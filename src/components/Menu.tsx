import React, { ReactNode } from "react";
// import classNames from "classnames";

import "../styles/Menu.css";

interface Props {
  children: ReactNode;
}

const Menu: React.FC<Props> = ({ children }) => {
  // const classes = classNames({

  // });
  return <div className="Menu">{children}</div>;
};

export default Menu;
