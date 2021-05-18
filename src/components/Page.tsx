import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Page.css";

interface Props {
  fullWidth?: boolean;
  marginTopBottom?: boolean;
  dropShadow?: boolean;
  children: ReactNode;
}

const Page: React.FC<Props> = ({
  fullWidth = false,
  marginTopBottom = false,
  dropShadow = false,
  children,
}) => {
  const classes = classNames({
    Page: true,
    "Page--full-width": fullWidth,
    "Page--margin-top-bottom": marginTopBottom,
    "Page--drop-shadow": dropShadow,
  });
  return <div className={classes}>{children}</div>;
};

export default Page;
