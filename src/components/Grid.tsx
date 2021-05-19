import React, { ReactNode } from "react";
// import classNames from 'classnames';

import "../styles/Grid.css";

interface Props {
  children: ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  //  const classes = classNames({  })
  return <div className="Grid">{children}</div>;
};

export default Grid;
