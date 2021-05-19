import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Button.css";

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  hover?: boolean;
  fullWidth?: boolean;
  href?: string;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  className,
  id,
  onClick,
  hover,
  fullWidth,
  href,
  children,
}) => {
  const classes = classNames(className, {
    Button: true,
    "Button--hover": hover,
    "Button--full-width": fullWidth,
  });
  const Component = () => (
    <div id={id} className={classes} onClick={onClick}>
      {children}
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Component />
    </a>
  ) : (
    <Component />
  );
};

export default Button;
