import React from "react";

import Blurb from "./Blurb";
import Picture from "./Picture";
import Section from "./Section";
import { IAboutMe, IBlurb } from "../types";
import "../styles/AboutMe.css";

interface Props {
  data: IAboutMe;
}

const AboutMe: React.FC<Props> = ({ data }) => {
  return (
    <Section id="about-me" title="About Me" separator bodyPadding>
      <div className="AboutMe">
        <div className="AboutMe__blurbs">
          {data.blurbs.map((b: IBlurb) => (
            <Blurb key={b.title} className="AboutMe__blurb" title={b.title}>
              {b.text}
            </Blurb>
          ))}
        </div>
        <Picture
          className="AboutMe__picture"
          src={data.img}
          alt={data.alt}
          href={data.link}
          radius="medium"
        />
      </div>
    </Section>
  );
};

export default AboutMe;
