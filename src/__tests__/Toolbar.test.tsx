import { render, screen } from "@testing-library/react";

import Toolbar from "../components/Toolbar";

it("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<Toolbar>{children}</Toolbar>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});

it("correctly applies the className prop", () => {
  const testClassName = "Test";
  const text = "Foo";
  render(<Toolbar className={testClassName}>{text}</Toolbar>);

  const el = screen.getByText(text);
  expect(el).toHaveClass(testClassName);
});
