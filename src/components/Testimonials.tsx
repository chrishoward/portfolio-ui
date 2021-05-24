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
      {data.map((d: any) => (
        <Testimonial
          name={d.name}
          role={d.role}
          company={d.company}
          img={d.img}
          url={d.url}
        >
          {d.msg}
        </Testimonial>
      ))}
    </Grid>
  );
};

export default Testimonials;
