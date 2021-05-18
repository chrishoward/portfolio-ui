import React, { ReactNode } from "react";

import "../styles/PageContent.css";

interface Props {
  children: ReactNode;
}

const PageContent: React.FC<Props> = ({ children }) => {
  return <div className="PageContent">{children}</div>;
};

export default PageContent;
