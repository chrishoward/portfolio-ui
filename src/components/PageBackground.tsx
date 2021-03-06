import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/PageBackground.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const PageBackground: React.FC<Props> = ({ className, children }) => {
  const classes = classNames(className, {
    PageBackground: true,
  });
  return <div className={classes}>{children}</div>;
};

export default PageBackground;
