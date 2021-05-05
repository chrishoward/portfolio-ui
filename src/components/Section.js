import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

class Section extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <Typography className="section__heading" use="headline3">
            {this.props.heading}
          </Typography>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
