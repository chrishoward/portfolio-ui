import React, { ReactNode } from "react";

import Separator from "./Separator";
import "../styles/Section.css";

interface Props {
  id?: string;
  title: string;
  separator?: boolean;
  children: ReactNode;
}

const Section: React.FC<Props> = ({ id, title, separator, children }) => {
  return (
    <section id={id} className="Section">
      <h1 className="Section__title">{title}</h1>
      <div className="Section__body">{children}</div>
      {separator && <Separator className="Section__separator" />}
    </section>
  );
};

export default Section;
