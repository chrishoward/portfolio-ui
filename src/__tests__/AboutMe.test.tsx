import { render, screen } from "@testing-library/react";

import AboutMe from "../components/AboutMe";

test("aboutme data prop is rendered/applied correctly", () => {
  const data = {
    img: "foo",
    alt: "bar",
    link: "baz",
    blurbs: [
      {
        text: "blurb text 1",
        title: "blurb title 1",
      },
      {
        text: "blurb text 2",
        title: "blurb title 2",
      },
    ],
  };

  render(<AboutMe data={data} />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", expect.stringContaining(data.img));
  expect(image).toHaveAttribute("alt", expect.stringContaining(data.alt));

  const imageLink = image.closest("a");
  expect(imageLink).toHaveAttribute("href", expect.stringContaining(data.link));

  const blurbTitles = screen.getAllByRole("heading", { level: 2 });
  expect(blurbTitles[0]).toHaveTextContent(data.blurbs[0].title);
  expect(blurbTitles[1]).toHaveTextContent(data.blurbs[1].title);

  const blurbTexts = screen.getAllByRole("paragraph");
  expect(blurbTexts[0]).toHaveTextContent(data.blurbs[0].text);
  expect(blurbTexts[1]).toHaveTextContent(data.blurbs[1].text);
});
