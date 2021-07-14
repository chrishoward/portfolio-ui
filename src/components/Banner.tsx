import React from "react";

import "../styles/Banner.css";

interface Props {
  src: string;
}

const Banner: React.FC<Props> = ({ src }) => {
  return (
    <header>
      <img className="Banner" src={src} alt="Chris Howard" />
    </header>
  );
};

export default Banner;
