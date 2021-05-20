import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/PageContent.css";

interface Props {
  dropShadow?: boolean;
  children: ReactNode;
}

const PageContent: React.FC<Props> = ({ dropShadow, children }) => {
  const classes = classNames({
    PageContent: true,
    "PageContent--drop-shadow": dropShadow,
  });
  return <div className={classes}>{children}</div>;
};

export default PageContent;
