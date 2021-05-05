import React, { Component } from "react";
import { Card, CardMedia, CardPrimaryAction } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

import Section from "./Section";

const communityData = [
  {
    meetup: "ReactBris",
    img:
      "https://secure.meetupstatic.com/photos/event/1/e/5/2/600_478867762.jpeg",
    url: "https://www.meetup.com/reactbris/",
    title: "React Brisbane"
  },
  {
    meetup: "BrisJS",
    img:
      "https://secure.meetupstatic.com/photos/event/b/8/0/1/600_15527105.jpeg",
    url: "https://www.meetup.com/BrisJS/",
    title: "Brisbane JavaScript"
  },
  {
    meetup: "Node Brisbane",
    img:
      "https://secure.meetupstatic.com/photos/event/b/4/b/7/600_479626263.jpeg",
    url: "https://www.meetup.com/Node-Brisbane/",
    title: "Node Brisbane"
  }
];

class Community extends Component {
  render() {
    return (
      <Section heading="Community">
        <Typography use="body1">
          Currently attending all of the following meetups each month:
        </Typography>
        <div className="meetup-cards__container">
          {communityData.map(item => {
            const { meetup, img, url, title } = item;
            return (
              <Card
                key={meetup}
                tag="a"
                href={url}
                target="_blank"
                title={title}
              >
                <CardPrimaryAction>
                  <CardMedia
                    className="meetup-cards__card"
                    style={{
                      backgroundImage: `url(${img})`
                    }}
                  />
                </CardPrimaryAction>
              </Card>
            );
          })}
        </div>
      </Section>
    );
  }
}

export default Community;
