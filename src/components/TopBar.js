import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";

import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/typography/dist/mdc.typography.css";

const navItems = [
  { name: "About Me", link: "" },
  { name: "Projects", link: "" },
  { name: "Experience", link: "" },
  { name: "Education", link: "" },
  { name: "Testimonials", link: "" },
  { name: "Community", link: "" },
  { name: "Contact", link: "" }
];

class TopBar extends Component {
  render() {
    return (
      <React.Fragment>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarTitle>Chris Howard</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              {navItems.map((item, index) => {
                const { name } = item;
                return (
                  <Typography
                    className="top-bar__menu-item"
                    key={index}
                    use="body1"
                  >
                    {name}
                  </Typography>
                );
              })}
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </React.Fragment>
    );
  }
}

export default TopBar;
