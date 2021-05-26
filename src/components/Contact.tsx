import React, { ReactNode } from "react";
import classNames from "classnames";

import PictureStrip from "./PictureStrip";
import Picture from "./Picture";

import "../styles/Contact.css";

interface Props {
  data: any;
}

const Contact: React.FC<Props> = ({ data }) => {
  const classes = classNames({});
  return (
    <PictureStrip>
      {data.map((d: any) => (
        <Picture
          className="Contact__picture"
          src={d.src}
          alt={d.alt}
          href={d.url}
          title={d.title}
          size="medium"
          radius="medium"
        />
      ))}
    </PictureStrip>
  );
};

export default Contact;
