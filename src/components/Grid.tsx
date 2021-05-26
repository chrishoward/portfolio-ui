import React, { ReactNode } from "react";

import "../styles/Grid.css";

interface Props {
  children: ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  return <div className="Grid">{children}</div>;
};

export default Grid;
