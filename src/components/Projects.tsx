import React from "react";

import Grid from "./Grid";
import Project from "./Project";
import { IProject } from "../types";

interface Props {
  data: IProject[];
}

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <Grid>
      {data.map((p: IProject) => (
        <Project key={p.title} data={p} />
      ))}
    </Grid>
  );
};

export default Projects;
