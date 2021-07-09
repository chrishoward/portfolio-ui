import { render, screen } from "@testing-library/react";

import Blurb from "../components/Blurb";

it("displays children text", () => {
  const text = "Test";
  render(<Blurb title="Foo">{text}</Blurb>);

  const el = screen.getByText(text);
  expect(el).toHaveTextContent(text);
});

it("correctly applies the className prop to Blurb container", () => {
  const testClassName = "Test";
  const text = "Foo";
  const { container } = render(
    <Blurb title="Bar" className={testClassName}>
      {text}
    </Blurb>
  );

  const el = container.firstChild;
  expect(el).toHaveClass(testClassName);
});
