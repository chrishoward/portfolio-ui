import React, { ReactNode } from "react";

import "../styles/Section.css";

interface Props {
  id?: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <section id={id} className="Section">
      <h1>{title}</h1>
      <div className="Section__body">{children}</div>
    </section>
  );
};

export default Section;
