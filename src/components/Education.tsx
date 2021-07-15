import React from "react";

import Section from "./Section";
import PictureBlurbList from "./PictureBlurbList";
import { IPictureBlurbList } from "../types";

interface Props {
  data: IPictureBlurbList[];
}

const Education: React.FC<Props> = ({ data }) => {
  return (
    <Section id="education" title="Education" separator bodyPadding>
      <PictureBlurbList data={data} />
    </Section>
  );
};

export default Education;
