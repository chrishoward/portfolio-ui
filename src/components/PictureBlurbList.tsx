import React from "react";

import PictureBlurb from "./PictureBlurb";
import { IPictureBlurbList } from "../types";

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
