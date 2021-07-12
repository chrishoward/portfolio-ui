import { render, screen } from "@testing-library/react";

import Testimonial from "../components/Testimonial";

test("displays children text", () => {
  const text = "test";
  render(
    <Testimonial name="foo" role="bar" company="baz" img="img" url="url">
      {text}
    </Testimonial>
  );

  const el = screen.getByText(text);
  expect(el).toHaveTextContent(text);
});
