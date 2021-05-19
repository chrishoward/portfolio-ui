import React, { ReactNode } from "react";
// import classNames from 'classnames';

import Picture from "./Picture";

import "../styles/Testimonial.css";

interface Props {}

const Testimonial: React.FC<Props> = ({}) => {
  //  const classes = classNames({  })
  return (
    <div className="Testimonial">
      <Picture
        className="Testimonial__picture"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
        alt=""
        size="medium"
      />
      <div className="Testimonial__spacer" />
      <div className="Testimonial__body">
        <p>
          bla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla
          blabla bla bla bla bla blabla bla bla bla bla blabla bla bla bla bla
          bla
        </p>
        <h2>Chris Howard</h2>
        <h3>Tech Lead, Orbmaps</h3>
      </div>
    </div>
  );
};

export default Testimonial;
