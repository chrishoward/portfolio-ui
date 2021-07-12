const host = process.env.REACT_APP_API_HOST;
const port = process.env.REACT_APP_API_PORT;
const usingProdApi =
  process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test";
const protocol = `http${usingProdApi ? "s" : ""}`;
const apiUrl = `${protocol}://${host}:${port}/`;

export async function getPortfolioData() {
  const response = await fetch(apiUrl);
  return await response.json();
}
