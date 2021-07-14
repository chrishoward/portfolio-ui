import React from "react";

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
  const nameEl = <span className="Testimonial__name">{name}</span>;
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
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {nameEl}
          </a>
        ) : (
          nameEl
        )}
        <span className="Testimonial__role-company">{`${role}, ${company}`}</span>
      </div>
    </div>
  );
};

export default Testimonial;
