import React from "react";

import "../styles/Banner.css";

interface Props {
  src: string;
}

const Banner: React.FC<Props> = ({ src }) => {
  return <img className="Banner" src={src} alt="Chris Howard" />;
};

export default Banner;
