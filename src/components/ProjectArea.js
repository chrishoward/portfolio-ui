import React from "react";
import { Typography } from "@rmwc/typography";

import Avatar from "./Avatar";

const ProjectArea = props => {
  const { projectArea } = props;
  const { title, type, content } = projectArea;
  return (
    <div className="project-area">
      <Typography
        className="project-area__title"
        use="body1"
      >{`${title}: `}</Typography>
      {type === "text" && (
        <Typography use="body1">{content.join(", ")}</Typography>
      )}
      {type === "icons" &&
        content.map(item => <Avatar icon={item} size="50px" />)}
    </div>
  );
};

export default ProjectArea;
