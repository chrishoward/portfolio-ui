import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Card.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ className, children }) => {
  const classes = classNames(className, { Card: true });
  return <article className={classes}>{children}</article>;
};

export default Card;
