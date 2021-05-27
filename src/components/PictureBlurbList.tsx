import React from "react";
import PictureBlurb from "./PictureBlurb";

interface Props {
  data: any;
}

const PictureBlurbList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((d: any) => (
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
