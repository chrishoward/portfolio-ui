import { render, screen } from "@testing-library/react";

import Card from "../components/Card";

it("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<Card>{children}</Card>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});

it("correctly applies the className prop", () => {
  const testClassName = "test";
  const text = "foo";
  render(<Card className={testClassName}>{text}</Card>);

  const el = screen.getByText(text);
  expect(el).toHaveClass(testClassName);
});
