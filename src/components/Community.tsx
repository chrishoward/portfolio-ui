import React from "react";

import Picture from "./Picture";
import PictureStrip from "./PictureStrip";
import Section from "./Section";
import { ICommunity } from "../types";
import "../styles/Community.css";

interface Props {
  data: ICommunity[];
}

const Community: React.FC<Props> = ({ data }) => {
  return (
    <Section id="community" title="Community" separator bodyPadding>
      <p className="Community__text">
        Currently attending all of the following meetups as a great way to meet
        like-minded developers and learn new things.
      </p>
      <PictureStrip>
        {data.map((d: ICommunity) => (
          <Picture
            key={d.img}
            className="Community__picture"
            src={d.img}
            alt={d.alt}
            size="xlarge"
            radius="small"
            href={d.link}
          />
        ))}
      </PictureStrip>
    </Section>
  );
};

export default Community;
