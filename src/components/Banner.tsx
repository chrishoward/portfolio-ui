import React from "react";

import "../styles/Banner.css";

interface Props {
  src: string;
  alt: string;
}

const Banner: React.FC<Props> = ({ src, alt }) => {
  return (
    <header>
      <img className="Banner" src={src} alt={alt} />
    </header>
  );
};

export default Banner;
