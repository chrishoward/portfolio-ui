import React, { ReactNode } from "react";

import "../styles/CardContent.css";

interface Props {
  children: ReactNode;
}

const CardContent: React.FC<Props> = ({ children }) => {
  return <div className="CardContent">{children}</div>;
};

export default CardContent;
