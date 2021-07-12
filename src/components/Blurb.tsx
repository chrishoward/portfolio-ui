import React from "react";
import classNames from "classnames";

import "../styles/Blurb.css";

interface Props {
  className?: string;
  title: string;
  href?: string;
  children: string;
}

const Blurb: React.FC<Props> = ({ className, title, href, children }) => {
  const classes = classNames(className, {
    Blurb: true,
  });
  const titleEl = <h2>{title}</h2>;
  return (
    <div className={classes}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {titleEl}
        </a>
      ) : (
        titleEl
      )}
      <p role="paragraph">{children}</p>
    </div>
  );
};

export default Blurb;
