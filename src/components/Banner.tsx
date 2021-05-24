import React, { ReactNode } from "react";
// import classNames from 'classnames';

import "../styles/Banner.css";

interface Props {
  src: string;
}

const Banner: React.FC<Props> = ({ src }) => {
  //  const classes = classNames({  })
  return <img className="Banner" src={src} alt="Chris Howard" />;
};

export default Banner;
