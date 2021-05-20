import React, { ReactNode } from "react";
// import classNames from "classnames";

import Grid from "./Grid";
import Card from "./Card";
import Picture from "./Picture";
import CardContent from "./CardContent";
import Button from "./Button";
import Blurb from "./Blurb";
import DualList from "./DualList";
import "../styles/Projects.css";

interface Props {
  data: any;
}

const Projects: React.FC<Props> = ({ data }) => {
  // const classes = classNames({});
  return (
    <Grid>
      {data.map((p: any) => (
        <Card className="Project__card">
          <Picture
            className="Picture--card"
            src={p.img}
            alt={p.name}
            href={p.demoUrl}
          />
          <CardContent>
            <Blurb title={p.name}>{p.description}</Blurb>
            <DualList title="Area">{p.area}</DualList>
            <DualList title="Languages">{p.languages}</DualList>
            <DualList title="Technologies">{p.technologies}</DualList>
            <DualList title="Dev Tools">{p.devTools}</DualList>
          </CardContent>
          <div className="Project__filler" />
          <Button className="Projects__button" href={p.demoUrl} hover>
            Demo
          </Button>
        </Card>
      ))}
    </Grid>
  );
};

export default Projects;
