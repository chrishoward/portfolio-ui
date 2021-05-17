import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/AppBar.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const AppBar: React.FC<Props> = ({ className, children }) => {
  const classes = classNames(className, {
    AppBar: true,
  });
  return <div className={classes}>{children}</div>;
};

export default AppBar;
