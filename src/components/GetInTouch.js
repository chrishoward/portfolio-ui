import React, { Component } from "react";

import Section from "./Section";
import Avatar from "./Avatar";

const getInTouchData = ["react", "react", "react"];

class GetInTouch extends Component {
  render() {
    return (
      <Section heading="Get in Touch">
        <div className="get-in-touch">
          {getInTouchData.map(item => {
            return <Avatar icon={item} size="80px" />;
          })}
        </div>
      </Section>
    );
  }
}

export default GetInTouch;
