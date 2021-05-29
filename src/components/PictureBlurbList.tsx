import React from "react";

import { IPictureBlurbList } from "../types";
import PictureBlurb from "./PictureBlurb";

interface Props {
  data: IPictureBlurbList[];
}

const PictureBlurbList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((d: IPictureBlurbList) => (
        <PictureBlurb
          key={d.title}
          src={d.img}
          alt={d.alt}
          url={d.link}
          title={d.title}
        >
          {d.text}
        </PictureBlurb>
      ))}
    </>
  );
};

export default PictureBlurbList;
