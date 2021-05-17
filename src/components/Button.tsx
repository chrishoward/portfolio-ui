import React, { ReactNode } from "react";
import classNames from "classnames";

import "../styles/Button.css";

interface Props {
  className?: string;
  id?: string;
  onClick?: () => void;
  hover?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  className,
  id,
  onClick,
  hover,
  fullWidth,
  children,
}) => {
  const classes = classNames(className, {
    Button: true,
    "Button--hover": hover,
    "Button--full-width": fullWidth,
  });
  return (
    <div id={id} className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
