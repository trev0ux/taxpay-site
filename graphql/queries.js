export const HOMEPAGE_QUERY = `
  query {
    posts(first: 5) {
      nodes {
        title
      }
    }
    page(id: "homepage", idType: URI) {
      title
    }
  }
`;
