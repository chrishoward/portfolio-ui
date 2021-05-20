import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/AppBar.css";

interface Props {
  className?: string;
  dropShadow?: boolean;
  children: ReactNode;
}

const AppBar: React.FC<Props> = ({ className, dropShadow, children }) => {
  const classes = classNames(className, {
    AppBar: true,
    "AppBar--drop-shadow": dropShadow,
  });
  return <div className={classes}>{children}</div>;
};

export default AppBar;
