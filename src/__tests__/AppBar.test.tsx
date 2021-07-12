import { render, screen } from "@testing-library/react";

import AppBar from "../components/AppBar";

test("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<AppBar>{children}</AppBar>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});

test("correctly applies the className prop", () => {
  const testClassName = "test";
  const text = "foo";
  render(<AppBar className={testClassName}>{text}</AppBar>);

  const el = screen.getByText(text);
  expect(el).toHaveClass(testClassName);
});
