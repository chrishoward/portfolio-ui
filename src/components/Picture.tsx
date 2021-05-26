import React from "react";
import classNames from "classnames";

import "../styles/Picture.css";

interface Props {
  className?: string;
  src: string;
  alt: string;
  title?: string;
  href?: string;
  size?: string;
  radius?: string;
}

const Picture: React.FC<Props> = ({
  className,
  src,
  alt,
  title,
  href,
  size = "fill",
  radius = "none",
}) => {
  const classes = classNames(className, {
    "Picture--fill": size === "fill",
    "Picture--xsmall": size === "xsmall",
    "Picture--small": size === "small",
    "Picture--medium": size === "medium",
    "Picture--large": size === "large",
    "Picture--xlarge": size === "xlarge",
    "Picture--radius-small": radius === "small",
    "Picture--radius-medium": radius === "medium",
    "Picture--circle": radius === "circle",
  });
  const Component = () => (
    <img
      className={classes}
      src={src.includes("http") ? src : `/images/${src}`}
      alt={alt}
      title={title}
    />
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Component />
    </a>
  ) : (
    <Component />
  );
};

export default Picture;
