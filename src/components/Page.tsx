import React, { ReactElement } from "react";
import classNames from "classnames";

import "../styles/Page.css";

interface Props {
  width?: string;
  marginTopBottom?: boolean;
  children: ReactElement | null;
}

const Page: React.FC<Props> = ({
  width = "fixed",
  marginTopBottom = true,
  children,
}) => {
  const classes = classNames({
    Page__container: true,
    "Page__container--fixed-width": width === "fixed",
    "Page__container--margin-top-bottom": marginTopBottom,
  });
  return <div className={classes}>{children}</div>;
};

export default Page;
