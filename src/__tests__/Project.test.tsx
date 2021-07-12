import { render, screen } from "@testing-library/react";

import Projects from "../components/Projects";

test("projects data prop is rendered/applied correctly", () => {
  const data = [
    {
      title: "foo",
      img: "bar",
      area: ["area1", "area2"],
      description: "baz",
      languages: ["lang1", "lang2"],
      technologies: ["tech1", "tech2"],
      tools: ["tool1", "tool2"],
      demo: "demoHref",
      code: "codeHref",
    },
  ];
  const providedListHeadings = [
    "Area",
    "Languages",
    "Technologies",
    "Dev Tools",
  ];
  const providedItems = [
    ...data[0].area,
    ...data[0].languages,
    ...data[0].technologies,
    ...data[0].tools,
  ];

  render(<Projects data={data} />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", expect.stringContaining(data[0].img));
  expect(image).toHaveAttribute("alt", expect.stringContaining(data[0].title));

  const title = screen.getByRole("heading", { level: 2 });
  expect(title).toHaveTextContent(data[0].title);

  const description = screen.getByRole("paragraph");
  expect(description).toHaveTextContent(data[0].description);

  const listHeadingEls = screen.getAllByRole("heading", { level: 3 });
  const renderedListHeadings = listHeadingEls.map((el) => el.innerHTML);
  providedListHeadings.forEach((providedHeading) =>
    expect(renderedListHeadings).toContain(providedHeading)
  );

  const listItemEls = screen.getAllByRole("listitem");
  const renderedListItems = listItemEls.map((el) => el.innerHTML);
  providedItems.forEach((providedItem) =>
    expect(renderedListItems).toContain(providedItem)
  );

  const codeButton = screen.getByRole("button", { name: /code/i });
  expect(codeButton).toBeInTheDocument();
  const codeButtonAnchor = codeButton.closest("a");
  expect(codeButtonAnchor).toHaveAttribute(
    "href",
    expect.stringContaining(data[0].code)
  );

  const demoButton = screen.getByRole("button", { name: /demo/i });
  expect(demoButton).toBeInTheDocument();
  const demoButtonAnchor = demoButton.closest("a");
  expect(demoButtonAnchor).toHaveAttribute(
    "href",
    expect.stringContaining(data[0].demo)
  );
});
