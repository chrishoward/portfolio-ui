import React, { Component } from "react";

import { icons } from "../icons";

class Avatar extends Component {
  render() {
    const { img, title, url, icon, size } = this.props;
    return (
      <a
        href={icon ? icons[icon]["url"] : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={"avatar"}
          title={icon ? icons[icon]["title"] : title}
          style={{
            background: icon
              ? icons[icon]["bgColor"]
              : `center / contain url(${img})`,
            width: size,
            height: size
          }}
        >
          {icon && (
            <img
              className={"avatar__icon"}
              src={icons[icon]["src"]}
              alt={icons[icon]["title"]}
            />
          )}
        </div>
      </a>
    );
  }
}

export default Avatar;
