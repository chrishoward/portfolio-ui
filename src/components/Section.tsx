import React, { ReactNode } from "react";

import Separator from "./Separator";
import "../styles/Section.css";

interface Props {
  id?: string;
  title: string;
  separator?: boolean;
  children: ReactNode;
  bodyPadding?: boolean;
}

const Section: React.FC<Props> = ({
  id,
  title,
  separator,
  children,
  bodyPadding = false,
}) => {
  return (
    <section id={id} className="Section">
      <h1 className="Section__title">{title}</h1>
      <div className={bodyPadding ? "Section__body--padding" : ""}>
        {children}
      </div>
      {separator && <Separator className="Section__separator" />}
    </section>
  );
};

export default Section;
