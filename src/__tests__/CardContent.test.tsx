import { render, screen } from "@testing-library/react";

import CardContent from "../components/CardContent";

it("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<CardContent>{children}</CardContent>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});
