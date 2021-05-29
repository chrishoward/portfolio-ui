import React from "react";

import Grid from "./Grid";
import Testimonial from "./Testimonial";
import { ITestimonial } from "../types";

interface Props {
  data: ITestimonial[];
}

const Testimonials: React.FC<Props> = ({ data }) => {
  return (
    <Grid>
      {data.map((d: ITestimonial) => (
        <Testimonial
          key={d.name}
          name={d.name}
          role={d.role}
          company={d.company}
          img={d.img}
          url={d.link}
        >
          {d.text}
        </Testimonial>
      ))}
    </Grid>
  );
};

export default Testimonials;
