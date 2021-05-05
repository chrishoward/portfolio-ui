import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import { Grid, GridCell } from "@rmwc/grid";

import Section from "./Section";
import Avatar from "./Avatar";

import "@material/layout-grid/dist/mdc.layout-grid.css";

const testimonialsData = Array(4).fill({
  name: "Chris Howard",
  company: "Orbmaps",
  role: "Tech Lead",
  img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
  url: "https://www.linkedin.com/in/moses-hamon/",
  msg:
    "Chris is great bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
});

class Testimonials extends Component {
  render() {
    return (
      <Section heading="Testimonials">
        <Grid>
          {testimonialsData.map(testimonial => {
            const { name, company, role, img, url, msg } = testimonial;
            return (
              <GridCell
                className="testimonial"
                key={name}
                desktop={6}
                tablet={8}
                phone={4}
              >
                <Avatar img={img} title={name} size="100px" />
                <Typography use="body1">{msg}</Typography>
                <Typography use="body1">{name}</Typography>
                <Typography use="body1">{`${role}, ${company}`}</Typography>
              </GridCell>
            );
          })}
        </Grid>
      </Section>
    );
  }
}

export default Testimonials;
