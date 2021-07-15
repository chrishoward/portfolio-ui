import React from "react";

import Card from "./Card";
import Picture from "./Picture";
import CardContent from "./CardContent";
import Blurb from "./Blurb";
import DualList from "./DualList";
import ProjectButtons from "./ProjectButtons";
import { IProject } from "../types";
import "../styles/Project.css";

interface Props {
  data: IProject;
}

const lists = [
  { key: "area", title: "Area" },
  { key: "languages", title: "Languages" },
  { key: "technologies", title: "Technologies" },
  { key: "tools", title: "Dev Tools" },
];

const Project: React.FC<Props> = ({ data }) => {
  return (
    <Card key={data.title} className="Project__card">
      <Picture className="Project__picture" src={data.img} alt={data.title} />
      <CardContent>
        <Blurb className="Project__blurb" title={data.title}>
          {data.description}
        </Blurb>
        {lists
          .filter(({ key }) => (data[key] as string[]).length > 0)
          .map(({ key, title }) => (
            <DualList key={title} title={title} list={data[key] as string[]} />
          ))}
      </CardContent>
      <div className="Project__filler" />
      <ProjectButtons code={data.code} demo={data.demo} />
    </Card>
  );
};

export default Project;
