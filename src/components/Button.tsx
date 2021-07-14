import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Button.css";

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  hover?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  className,
  id,
  onClick,
  hover,
  disabled,
  fullWidth,
  href,
  children,
}) => {
  const classes = classNames(className, {
    "Button--hover": hover,
    "Button--full-width": fullWidth,
    "Button--disabled": disabled,
  });
  const Component = () => (
    <button id={id} className={classes} onClick={onClick}>
      {children}
    </button>
  );
  return href ? (
    <a
      className={disabled ? "Button--disabled" : ""}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Component />
    </a>
  ) : (
    <Component />
  );
};

export default Button;
