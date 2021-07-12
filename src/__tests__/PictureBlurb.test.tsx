import { render, screen } from "@testing-library/react";

import PictureBlurb from "../components/PictureBlurb";

test("displays children text", () => {
  const text = "test";
  render(
    <PictureBlurb title="foo" src="bar" alt="baz">
      {text}
    </PictureBlurb>
  );

  const el = screen.getByText(text);
  expect(el).toHaveTextContent(text);
});
