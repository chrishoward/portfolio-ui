import React from "react";
import classNames from "classnames";

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

const isPrivate = (str: string) => str === "private";

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <Grid>
      {data.map((p: any) => (
        <Card key={p.name} className="Project__card">
          <Picture className="Project__picture" src={p.img} alt={p.name} />
          <CardContent>
            <Blurb className="Projects__blurb" title={p.name}>
              {p.description}
            </Blurb>
            {lists
              .filter(({ title, key }) => p[key].length > 0)
              .map(({ title, key }) => (
                <DualList key={title} title={title}>
                  {p[key]}
                </DualList>
              ))}
          </CardContent>
          <div className="Project__filler" />
          <div className="Project__button-container">
            {["code", "url"].map((str) => {
              const classes = classNames({
                Projects__button: true,
                "Projects__button--left": str === "code",
              });
              return (
                <Button
                  key={str}
                  className={classes}
                  href={p[str]}
                  disabled={isPrivate(p[str])}
                  hover
                >
                  {`Code${isPrivate(p[str]) ? " (Private)" : ""}`}
                </Button>
              );
            })}
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default Projects;
