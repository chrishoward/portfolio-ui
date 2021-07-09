import { rest } from "msw";
import { setupServer } from "msw/node";

import { fetchAsJson } from "../utils/misc";

// Mock API server
const server = setupServer();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetchAsJson() takes a url argument and returns json", async () => {
  // Arrange
  const url = "/test";
  const mockData = JSON.stringify({
    obj: {
      foo: "bar",
    },
    arr: [1],
  });

  server.use(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.body(mockData));
    })
  );

  // Act
  const json = await fetchAsJson(url);

  // Assert
  expect(json.obj.foo).toBe("bar");
  expect(json.arr[0]).toBe(1);
});
