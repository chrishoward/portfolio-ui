import React from "react";

import "../styles/DualList.css";

interface Props {
  title?: string;
  list: string[];
}

const DualList: React.FC<Props> = ({ title, list }) => {
  const sorted = list.sort((a, b) => a.localeCompare(b));
  const len = sorted.length;
  const half = Math.ceil(len / 2);
  const list1 = sorted.slice(0, half);
  const list2 = sorted.slice(half, len);
  return (
    <div className="DualList">
      <h3 className="DualList__title">{title}</h3>
      <div className="DualList__lists-container">
        {[list1, list2].map((l, i) => (
          <ul key={i} className="DualList__list">
            {l.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DualList;
