import React, { ReactNode } from "react";
// import classNames from 'classnames';

import Picture from "./Picture";

import "../styles/Testimonial.css";

interface Props {
  name: string;
  role: string;
  company: string;
  img: string;
  url: string;
  children: string;
}

const Testimonial: React.FC<Props> = ({
  name,
  role,
  company,
  img,
  url,
  children,
}) => {
  //  const classes = classNames({  })
  const nameEl = <h2>{name}</h2>;
  return (
    <div className="Testimonial">
      <Picture
        className="Testimonial__picture"
        src={img}
        alt={name}
        size="medium"
        radius="circle"
        href={url}
      />
      <div className="Testimonial__spacer" />
      <div className="Testimonial__body">
        <p className="Testimonial__msg">{children}</p>
        {url ? <a href={url}>{nameEl}</a> : nameEl}
        <h3 className="Testimonial__role-company">{`${role}, ${company}`}</h3>
      </div>
    </div>
  );
};

export default Testimonial;
