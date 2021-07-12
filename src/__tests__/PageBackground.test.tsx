import { render, screen } from "@testing-library/react";

import PageBackground from "../components/PageBackground";

test("displays all children props", () => {
  const arr = [1, 2, 3];
  const children = arr.map((num) => <div key={num}>{num}</div>);
  render(<PageBackground>{children}</PageBackground>);

  arr.forEach((c) => {
    const child = screen.getByText(c.toString());
    expect(child).toBeInTheDocument();
  });
});

test("correctly applies the className prop", () => {
  const testClassName = "test";
  const text = "foo";
  render(<PageBackground className={testClassName}>{text}</PageBackground>);

  const el = screen.getByText(text);
  expect(el).toHaveClass(testClassName);
});
