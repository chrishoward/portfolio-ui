import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import { apiUrl } from "../api";

test("show loading, fetch real data, show app populated with data", async () => {
  const sections = [
    "About Me",
    "Projects",
    "Experience",
    "Education",
    "Testimonials",
    "Community",
    "Contact",
  ];

  render(
    <Router>
      <App />
    </Router>
  );

  const alert = screen.getByRole("alert");
  expect(alert).toHaveTextContent(/loading/i);

  const headings = await screen.findAllByRole(
    "heading",
    { level: 1 },
    { timeout: 3000 }
  );
  headings.forEach((heading) => expect(sections).toContain(heading.innerHTML));
});

test("show loading, fetch fails, show error", async () => {
  const server = setupServer(
    rest.get(apiUrl, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );
  server.listen();

  render(
    <Router>
      <App />
    </Router>
  );

  const alert = screen.getByRole("alert");
  expect(alert).toHaveTextContent(/loading/i);

  await waitFor(() => expect(alert).toHaveTextContent(/error/i));

  server.close();
});
