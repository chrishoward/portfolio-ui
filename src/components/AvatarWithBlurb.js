import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

import Avatar from "./Avatar";

import "@material/layout-grid/dist/mdc.layout-grid.css";

class AvatarWithBlurb extends Component {
  render() {
    const {
      className,
      avatarImg,
      avatarTitle,
      avatarIcon,
      avatarSize = "150px",
      avatarUrl,
      title,
      blurb
    } = this.props;
    return (
      <div className={`avatar-with-blurb__container ${className}`}>
        <Avatar
          icon={avatarIcon}
          img={avatarImg}
          url={avatarUrl}
          title={avatarTitle}
          size={avatarSize}
        />
        <div className="blurb">
          <Typography use="headline4">{title}</Typography>
          {blurb}
        </div>
      </div>
    );
  }
}

export default AvatarWithBlurb;
