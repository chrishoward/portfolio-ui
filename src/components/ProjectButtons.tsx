import React from "react";
import classNames from "classnames";

import Button from "./Button";
import "../styles/ProjectButtons.css";

interface Props {
  code: string;
  demo: string;
  [propName: string]: string;
}

const isPrivate = (str: string) => str === "private";

const getButtonData = (props: Props) =>
  ["Code", "Demo"].map((str, i) => {
    const classes = classNames({
      ProjectButtons__button: true,
      "ProjectButtons__button--left": i === 0,
    });
    const key = str.toLowerCase();
    return {
      text: str,
      className: classes,
      href: props[key],
    };
  });

const ProjectButtons: React.FC<Props> = (props) => (
  <div className="ProjectButtons__button-container">
    {getButtonData(props).map((b) => (
      <Button
        key={b.text}
        className={b.className}
        href={b.href}
        disabled={isPrivate(b.href)}
        hover
      >
        {`${b.text}${isPrivate(b.href) ? " (Private)" : ""}`}
      </Button>
    ))}
  </div>
);

export default ProjectButtons;
