import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

import Section from "./Section";
import AvatarWithBlurb from "./AvatarWithBlurb";

const BlurbSelfTaught = () => {
  return (
    <Typography use="body1">
      I am self taught bla bla bla I am self taught bla bla bla I am self taught
      bla bla bla
    </Typography>
  );
};

const experienceData = [
  {
    title: "Self Taught1",
    avatarIcon: "react",
    blurb: <BlurbSelfTaught />
  },
  {
    title: "Self Taught2",
    avatarIcon: "react",
    blurb: <BlurbSelfTaught />
  },
  {
    title: "Self Taught3",
    avatarIcon: "react",
    blurb: <BlurbSelfTaught />
  }
];

class Experience extends Component {
  render() {
    return (
      <Section heading="Experience">
        {experienceData.map((item, index, array) => {
          const { title, avatarIcon, blurb } = item;
          return (
            <AvatarWithBlurb
              key={title}
              className={index !== array.length - 1 ? "margin-bottom-20" : ""}
              avatarIcon={avatarIcon}
              title={title}
              blurb={blurb}
            />
          );
        })}
      </Section>
    );
  }
}

export default Experience;
