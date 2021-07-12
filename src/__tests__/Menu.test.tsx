import { render, screen } from "@testing-library/react";

import Menu from "../components/Menu";

test("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<Menu>{children}</Menu>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});
