import React from "react";

import Section from "./Section";
import PictureBlurbList from "./PictureBlurbList";
import { IPictureBlurbList } from "../types";

interface Props {
  data: IPictureBlurbList[];
}

const Experience: React.FC<Props> = ({ data }) => {
  return (
    <Section id="experience" title="Experience" separator bodyPadding>
      <PictureBlurbList data={data} />
    </Section>
  );
};

export default Experience;
