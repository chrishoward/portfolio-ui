import React from "react";

import Picture from "./Picture";
import Blurb from "./Blurb";
import "../styles/PictureBlurb.css";

interface Props {
  src: string;
  alt: string;
  url?: string;
  title: string;
  children: string;
}

const PictureBlurb: React.FC<Props> = ({ src, alt, url, title, children }) => {
  return (
    <div className="PictureBlurb">
      <Picture
        className="PictureBlurb__picture"
        src={src}
        alt={alt}
        href={url}
        size="large"
        radius="medium"
      />
      <Blurb className="PictureBlurb__blurb" title={title} href={url}>
        {children}
      </Blurb>
    </div>
  );
};

export default PictureBlurb;
