import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

import Section from "./Section";
import AvatarWithBlurb from "./AvatarWithBlurb";

const BlurbSelfTaught = props => {
  const { blurb } = props;
  return <Typography use="body1">{blurb}</Typography>;
};

const educationData = [
  {
    title: "Self Taught",
    avatarIcon: "selfstudy",
    blurbComponent: <BlurbSelfTaught />,
    blurb:
      "I am self taught bla bla bla I am self taught bla bla bla I am self taught bla bla bla"
  },
  {
    title: "Bach. of Mechanical Engineering",
    avatarIcon: "qut",
    blurb: <BlurbSelfTaught />
  }
];

class Education extends Component {
  render() {
    return (
      <Section heading="Education">
        {educationData.map((item, index, array) => {
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

export default Education;
