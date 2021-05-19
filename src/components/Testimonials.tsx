import React, { ReactNode } from "react";
import classNames from "classnames";

import Grid from "./Grid";
import Testimonial from "./Testimonial";
// import "../styles/Testimonials.css";

interface Props {
  data: any;
}

const Testimonials: React.FC<Props> = ({ data }) => {
  const classes = classNames({});
  return (
    <Grid>
      {data.map(() => (
        <Testimonial />
      ))}
    </Grid>
  );
};

export default Testimonials;
