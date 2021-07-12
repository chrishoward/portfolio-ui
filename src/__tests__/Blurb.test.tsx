import { render, screen } from "@testing-library/react";

import Blurb from "../components/Blurb";

test("displays children text", () => {
  const text = "test";
  render(<Blurb title="foo">{text}</Blurb>);

  const el = screen.getByText(text);
  expect(el).toHaveTextContent(text);
});

test("correctly applies the className prop to Blurb container", () => {
  const testClassName = "test";
  const text = "foo";
  const { container } = render(
    <Blurb title="bar" className={testClassName}>
      {text}
    </Blurb>
  );

  const el = container.firstChild;
  expect(el).toHaveClass(testClassName);
});
