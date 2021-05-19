import React, { ReactNode } from "react";
import classNames from "classnames";
import PictureBlurb from "./PictureBlurb";

// import "../styles/PictureBlurbList.css";

interface Props {
  data: any;
}

const PictureBlurbList: React.FC<Props> = ({ data }) => {
  const classes = classNames({});
  return (
    <div>
      {data.map((d) => (
        <PictureBlurb src={d.src} alt={d.alt} title={d.title}>
          {d.text}
        </PictureBlurb>
      ))}
    </div>
  );
};

export default PictureBlurbList;
