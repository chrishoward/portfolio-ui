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
      <p className="Community__text">
        Currently attending all of the following meetups as a great way to meet
        like-minded developers and learn new things.
      </p>
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
