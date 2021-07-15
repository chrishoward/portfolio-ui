import React from "react";

import Grid from "./Grid";
import Project from "./Project";
import Section from "./Section";
import { IProject } from "../types";

interface Props {
  data: IProject[];
}

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <Section id="projects" title="Projects" separator>
      <Grid>
        {data.map((p: IProject) => (
          <Project key={p.title} data={p} />
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
