import React from "react";

import PictureStrip from "./PictureStrip";
import Picture from "./Picture";
import Section from "./Section";
import { IContact } from "../types";
import "../styles/Contact.css";

interface Props {
  data: IContact[];
}

const Contact: React.FC<Props> = ({ data }) => {
  return (
    <Section id="contact" title="Contact" bodyPadding>
      <PictureStrip>
        {data.map((d: IContact) => (
          <Picture
            key={d.title}
            className="Contact__picture"
            src={d.img}
            alt={d.alt}
            href={d.link}
            title={d.title}
            size="medium"
            radius="medium"
          />
        ))}
      </PictureStrip>
    </Section>
  );
};

export default Contact;
