import { render, screen } from "@testing-library/react";

import PictureStrip from "../components/PictureStrip";

test("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<PictureStrip>{children}</PictureStrip>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});
