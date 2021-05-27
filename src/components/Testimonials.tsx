import React from "react";

import Grid from "./Grid";
import Testimonial from "./Testimonial";

interface Props {
  data: any;
}

const Testimonials: React.FC<Props> = ({ data }) => {
  return (
    <Grid>
      {data.map((d: any) => (
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
