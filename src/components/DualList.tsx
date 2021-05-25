import React, { ReactNode } from "react";
// import classNames from 'classnames';

import "../styles/DualList.css";

interface Props {
  title?: string;
  children: string[];
}

const DualList: React.FC<Props> = ({ title, children }) => {
  //  const classes = classNames({  })
  const sorted = children.sort((a, b) => a.localeCompare(b));
  const len = sorted.length;
  const half = Math.ceil(len / 2);
  const list1 = sorted.slice(0, half);
  const list2 = sorted.slice(half, len);
  return (
    <div className="DualList">
      <h3 className="DualList__title">{title}</h3>
      <div className="DualList__lists-container">
        {[list1, list2].map((l) => (
          <ul className="DualList__list">
            {l.map((n) => (
              <li>{n}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DualList;
