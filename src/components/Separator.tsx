import React from "react";
import classNames from "classnames";

import "../styles/Separator.css";

interface Props {
  className: string;
}

const Separator: React.FC<Props> = ({ className }) => {
  const classes = classNames(className, { Separator: true });
  const side = <span className="Separator__side" />;
  return (
    <div role="separator" className={classes}>
      {side}
      <span className="Separator__center">{" </> "}</span>
      {side}
    </div>
  );
};

export default Separator;
