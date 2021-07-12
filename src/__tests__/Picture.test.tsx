import { render, screen } from "@testing-library/react";

import Picture from "../components/Picture";

test("correctly applies the className prop", () => {
  const testClassName = "test";
  render(<Picture className={testClassName} src="foo" alt="bar" />);

  const el = screen.getByRole("img");
  expect(el).toHaveClass(testClassName);
});
