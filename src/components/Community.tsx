import React, { ReactNode } from "react";
import classNames from "classnames";

import Picture from "./Picture";
import PictureStrip from "./PictureStrip";
import "../styles/Community.css";

interface Props {
  data: any;
}

const Community: React.FC<Props> = ({ data }) => {
  const classes = classNames({});
  return (
    <div>
      <p>Currently attending all of the following meetups each month:</p>
      <PictureStrip>
        {data.map((d: any) => (
          <Picture
            className="Community__picture"
            src={d.src}
            alt={d.alt}
            size="xlarge"
            radius="small"
            href={d.url}
          />
        ))}
      </PictureStrip>
    </div>
  );
};

export default Community;
