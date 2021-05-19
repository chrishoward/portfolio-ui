import React, { ReactNode } from "react";
// import classNames from "classnames";

import "../styles/CardContent.css";

interface Props {
  children: ReactNode;
}

const CardContent: React.FC<Props> = ({ children }) => {
  // const classes = classNames({});
  return <div className="CardContent">{children}</div>;
};

export default CardContent;
