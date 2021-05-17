import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Page.css";

interface Props {
  fixedWidth?: boolean;
  marginTopBottom?: boolean;
  dropShadow?: boolean;
  children: ReactNode;
}

const Page: React.FC<Props> = ({
  fixedWidth = false,
  marginTopBottom = false,
  dropShadow = false,
  children,
}) => {
  const classes = classNames({
    Page: true,
    "Page--full-width": !fixedWidth,
    "Page--fixed-width": fixedWidth,
    "Page--margin-top-bottom": marginTopBottom,
    "Page--drop-shadow": dropShadow,
  });
  return <div className={classes}>{children}</div>;
};

export default Page;
