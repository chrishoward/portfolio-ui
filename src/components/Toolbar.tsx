import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Toolbar.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const Toolbar: React.FC<Props> = ({ className, children }) => {
  const classes = classNames(className, {
    Toolbar: true,
  });
  return <div className={classes}>{children}</div>;
};

export default Toolbar;
