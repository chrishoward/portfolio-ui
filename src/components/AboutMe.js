import React, { Component } from "react";

import Section from "./Section";
import AvatarWithBlurb from "./AvatarWithBlurb";

const aboutMeData = {
  img: "https://avatars2.githubusercontent.com/u/23305394?s=460&v=4",
  url: "https://www.linkedin.com/in/christopher-howard-au",
  blurb: {
    Background:
      "I previously studied and worked as a Mechanical Engineer and in 2017 decided to transition to a career in Software Development, a decision I'm very happy I made. I've since enjoyed developing my skills in the Web Development space, gaining professional experience within the startup arena and making friends with other like-minded developers.",
    Hobbies:
      "Developing, mountain biking, surfing, soccer, online gaming, fishing.",
    Goals:
      "Work hard and expand on my software knowledge and skills as quickly as possible."
  }
};

const AboutMeBlurb = props => {
  const { blurb } = props;
  return (
    <table>
      {Object.keys(blurb).map(item => {
        return (
          <tr key={item}>
            <td>{item}</td>
            <td>{blurb[item]}</td>
          </tr>
        );
      })}
    </table>
  );
};

class AboutMe extends Component {
  render() {
    const { img, url, blurb } = aboutMeData;
    return (
      <Section heading="About Me">
        <AvatarWithBlurb
          avatarImg={img}
          avatarTitle="Chris Howard"
          avatarSize="220px"
          avatarUrl={url}
          blurb={<AboutMeBlurb blurb={blurb} />}
        />
      </Section>
    );
  }
}

export default AboutMe;
