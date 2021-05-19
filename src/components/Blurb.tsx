import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Blurb.css";

interface Props {
  className?: string;
  title: string;
  children: string;
}

const Blurb: React.FC<Props> = ({ className, title, children }) => {
  const classes = classNames(className, {
    Blurb: true,
  });
  return (
    <div className={classes}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Blurb;
