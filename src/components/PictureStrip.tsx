import React, { ReactNode } from "react";

import "../styles/PictureStrip.css";

interface Props {
  children: ReactNode[];
}

const PictureStrip: React.FC<Props> = ({ children }) => {
  return (
    <div className="PictureStrip__container">
      {children!.map((c, i) => (
        <div key={i} className="PictureStrip__picture">
          {c}
        </div>
      ))}
    </div>
  );
};

export default PictureStrip;
