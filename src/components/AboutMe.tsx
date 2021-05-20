import React from "react";

import Blurb from "./Blurb";
import Picture from "./Picture";
import "../styles/AboutMe.css";

interface Props {
  data: any;
}

const AboutMe: React.FC<Props> = ({ data }) => {
  return (
    <div className="AboutMe">
      <div className="AboutMe__blurbs">
        {data.blurbs.map((b: any) => (
          <Blurb title={b.title}>{b.text}</Blurb>
        ))}
      </div>
      <Picture
        className="AboutMe__picture"
        src={data.img}
        alt={data.alt}
        href={data.url}
        radius="medium"
      />
    </div>
  );
};

export default AboutMe;
