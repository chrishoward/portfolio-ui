import React from "react";

import Picture from "./Picture";
import PictureStrip from "./PictureStrip";
import "../styles/Community.css";

interface Props {
  data: any;
}

const Community: React.FC<Props> = ({ data }) => {
  return (
    <>
      <p className="Community__text">
        Currently attending all of the following meetups as a great way to meet
        like-minded developers and learn new things.
      </p>
      <PictureStrip>
        {data.map((d: any) => (
          <Picture
            key={d.meetup}
            className="Community__picture"
            src={d.src}
            alt={d.alt}
            size="xlarge"
            radius="small"
            href={d.url}
          />
        ))}
      </PictureStrip>
    </>
  );
};

export default Community;
