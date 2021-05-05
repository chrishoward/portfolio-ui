import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import {
  Card,
  CardActions,
  CardPrimaryAction,
  CardMedia,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} from "@rmwc/card";

import ProjectArea from "./ProjectArea";
import Avatar from "./Avatar";

import "@material/card/dist/mdc.card.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";

class Project extends Component {
  render() {
    const { project } = this.props;
    const {
      name,
      img,
      area,
      description,
      languages,
      technologies,
      devTools,
      demoUrl,
      codeUrl
    } = project;
    const projectAreas = [
      { title: "Area", type: "text", content: area },
      { title: "Languages", type: "icons", content: languages },
      { title: "Technologies", type: "icons", content: technologies },
      { title: "Dev Tools", type: "icons", content: devTools }
    ];
    return (
      <Card>
        <CardPrimaryAction>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage: `url(${
                img
                  ? `/images/${img}`
                  : "https://material-components-web.appspot.com/images/16-9.jpg"
              })`
            }}
          />
          <div style={{ padding: "0 1rem 1rem 1rem" }}>
            <Typography use="headline6" tag="h2">
              {name}
            </Typography>
            <Typography use="body1" tag="div" theme="textSecondaryOnBackground">
              {description}
            </Typography>
            {projectAreas.map(projectArea => {
              return <ProjectArea projectArea={projectArea} />;
            })}
          </div>
        </CardPrimaryAction>
        <CardActions className="project-card-buttons__container">
          <CardActionButtons>
            <CardActionButton tag="a" href={demoUrl} target="_blank">
              Demo
            </CardActionButton>
            {codeUrl && (
              <CardActionButton tag="a" href={codeUrl} target="_blank">
                Code
              </CardActionButton>
            )}
          </CardActionButtons>
        </CardActions>
      </Card>
    );
  }
}

export default Project;
