import React from "react";
// import classNames from 'classnames';

import Picture from "./Picture";
import Blurb from "./Blurb";
import "../styles/PictureBlurb.css";

interface Props {
  src: string;
  alt: string;
  title: string;
  children: string;
}

const PictureBlurb: React.FC<Props> = ({ src, alt, title, children }) => {
  //  const classes = classNames({  })
  return (
    <div className="PictureBlurb">
      <Picture
        className="PictureBlurb__picture"
        src={src}
        alt={alt}
        size="large"
        radius="medium"
      />
      <Blurb className="PictureBlurb__blurb" title={title}>
        {children}
      </Blurb>
    </div>
  );
};

export default PictureBlurb;
