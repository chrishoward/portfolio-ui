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
      <div>
        {data.blurbs.map((b) => (
          <Blurb title={b.title}>{b.text}</Blurb>
        ))}
      </div>
      <div className="AboutMe__picture">
        <Picture
          src={data.img}
          alt={data.alt}
          href={data.url}
          size="xlarge"
          radius="medium"
        />
      </div>
    </div>
  );
};

export default AboutMe;
