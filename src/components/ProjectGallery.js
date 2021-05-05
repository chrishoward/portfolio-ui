import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import { Grid, GridInner, GridCell } from "@rmwc/grid";

import Section from "./Section";
import Project from "./Project";

import "@material/layout-grid/dist/mdc.layout-grid.css";

const projectsData = [
  {
    name: "Orbmaps Website",
    img: "orbmaps-website.jpg",
    area: ["Client-side"],
    description:
      "Website created as part of Orbmaps' marketing campaign to communicate the features of their product and attract new customers.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "materialui", "netlify"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com"
  },
  {
    name: "(Review) Orbmaps CRM",
    img: "orbmaps-crm.jpg",
    area: ["Full Stack"],
    description:
      "CRM as part of the Orbmaps product suite which allows users to save properties from the Orbmaps Scanner mapping interface and add various information and files relating to their properties.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "rmwc", "aws", "netlify", "couchdb"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com"
  },
  {
    name: "(Review) Portfolio Website",
    img: "",
    area: ["Client-side"],
    description:
      "Created as a means of presenting projects I have worked on and providing links to live demos.",
    languages: ["html", "css", "javascript"],
    technologies: ["react", "rmwc"],
    devTools: ["vscode", "git", "bash", "chromedevtools"],
    demoUrl: "http://www.orbmaps.com"
  },
  {
    name: "(Review) Know Your Fees",
    img: "know-your-fees.jpg",
    area: ["Client-side"],
    description:
      "Website which lists all the potential upfront costs of buying your first home, to help buyers make an informed decision when choosing to buy a house.",
    languages: ["html", "css", "javascript"],
    technologies: [],
    devTools: ["vscode", "chromedevtools"],
    demoUrl: "http://knowyourfees.com.au/"
  },
  {
    name: "(Review) Joint Seal QLD",
    img: "joint-seal-qld.jpg",
    area: ["Client-side"],
    description:
      "Client website built for a small joint sealing business in the construction industry.",
    languages: ["html", "css", "javascript"],
    technologies: [],
    devTools: ["vscode", "chromedevtools"],
    demoUrl: "http://www.google.com.au/"
  },
  {
    name: "(Review) Easec",
    img: "easec-website.jpg",
    area: ["Client-side"],
    description:
      "Client website built for a Queensland occupational rehabilitation company.",
    languages: ["html", "css", "javascript"],
    technologies: ["wordpress"],
    devTools: ["chromedevtools"],
    demoUrl: "http://www.easec.com.au/"
  },
  {
    name: "(Review) Gumtree Notifier",
    img: "",
    area: ["Server-side"],
    description:
      "A Gumtree ad notifier built as an alternative to the built in notifier on Gumtree which has been slow or at times not functioning at all.",
    languages: ["javascript"],
    technologies: ["aws", "couchdb", "puppeteer"],
    devTools: ["vscode", "bash", "putty", "winscp"],
    demoUrl: "http://www.google.com.au/"
  },
  {
    name: "(Review) To-Do List",
    img: "",
    area: ["Full Stack"],
    description:
      "A to-do list built as a means of practicing the development of a full stack SPA with the following listed tech stack in preparation for a contracting position.",
    languages: ["html", "css", "javascript", "sql"],
    technologies: ["react", "redux", "rmwc", "express", "node", "postgres"],
    devTools: ["vscode", "bash", "pgadmin", "chromedevtools"],
    demoUrl: "http://www.google.com.au/"
  }
];

class ProjectGallery extends Component {
  render() {
    return (
      <Section heading="Projects">
        <Grid>
          {projectsData.map((project, index) => {
            return (
              <GridCell key={index} desktop={6} tablet={8} phone={4}>
                <Project project={project} />
              </GridCell>
            );
          })}
        </Grid>
      </Section>
    );
  }
}

export default ProjectGallery;
