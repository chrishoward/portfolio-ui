import { render, screen } from "@testing-library/react";

import Button from "../components/Button";

test("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<Button>{children}</Button>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});

test("correctly applies the className prop", () => {
  const testClassName = "test";
  const text = "foo";
  render(<Button className={testClassName}>{text}</Button>);

  const el = screen.getByText(text);
  expect(el).toHaveClass(testClassName);
});
