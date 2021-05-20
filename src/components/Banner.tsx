import React, { ReactNode } from "react";
// import classNames from 'classnames';

import "../styles/Banner.css";

interface Props {
  children: string;
}

const Banner: React.FC<Props> = ({ children }) => {
  //  const classes = classNames({  })
  return <header className="Banner">{children}</header>;
};

export default Banner;
