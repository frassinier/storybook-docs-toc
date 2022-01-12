import { BackToTop, DocsContainerHOC, TableOfContents } from "./components";

const withTableOfContents = () => ({
  docs: {
    container: DocsContainerHOC,
  },
});

export { BackToTop, DocsContainerHOC, TableOfContents, withTableOfContents };
