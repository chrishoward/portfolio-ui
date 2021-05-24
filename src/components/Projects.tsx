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

const lists = [
  { title: "Area", key: "area" },
  { title: "Languages", key: "languages" },
  { title: "Technologies", key: "technologies" },
  { title: "Dev Tools", key: "devTools" },
];

const Projects: React.FC<Props> = ({ data }) => {
  // const classes = classNames({});
  return (
    <Grid>
      {data.map((p: any) => (
        <Card className="Project__card">
          <div className="Projects__picture-container">
            <Picture
              className="Project__picture"
              src={p.img}
              alt={p.name}
              href={p.url}
            />
          </div>
          <CardContent>
            <Blurb className="Projects__blurb" title={p.name}>
              {p.description}
            </Blurb>
            {lists
              .filter(({ title, key }) => p[key].length > 0)
              .map(({ title, key }) => (
                <DualList title={title}>{p[key]}</DualList>
              ))}
          </CardContent>
          <div className="Project__filler" />
          <div className="Project__button-container">
            <Button
              className="Projects__button Projects__button--left"
              href={p.code}
              disabled={p.code === "private"}
              hover
            >
              {`Code${p.code === "private" ? " (Private)" : ""}`}
            </Button>
            <Button
              className="Projects__button Projects__button--right"
              href={p.url}
              disabled={p.demo === "private"}
              hover
            >
              {`Demo${p.demo === "private" ? " (Private)" : ""}`}
            </Button>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default Projects;
